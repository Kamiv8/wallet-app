using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.User;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class ChangeUserPasswordCommandHandler : IRequestHandler<ChangeUserPasswordCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;
    private readonly IAuthService _authService;

    public ChangeUserPasswordCommandHandler(DataContext dataContext, IMapper mapper, IAuthService authService)
    {
        _dataContext = dataContext;
        _mapper = mapper;
        _authService = authService;
    }
    
    
    public Task<Unit> Handle(ChangeUserPasswordCommand request, CancellationToken cancellationToken)
    {
        var user = _dataContext.Users.FirstOrDefault(x => x.Id == _authService.User!.Id);

        if (user == null)
        {
            throw new AppException("Cannot find user");
        }

        var isVerify = BCrypt.Net.BCrypt.Verify(request.OldPassword, user.PasswordHash);
        
        if (!isVerify)
        {
            throw new AppException("Old password is incorrect");
        }

        if (request.NewPassword != request.ConfirmNewPassword)
        {
            throw new AppException("New password and confirm new password is not equal");
        }
        
        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.NewPassword);
        user.PasswordReset = DateTime.Now;

        _dataContext.Users.Update(user);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}