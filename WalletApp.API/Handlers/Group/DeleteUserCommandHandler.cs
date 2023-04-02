using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Models.commands.Group;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.Group;

public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand, Unit>
{
    private readonly DataContext _dataContext;
    private readonly IAuthService _authService;
    private readonly IMapper _mapper;

    public DeleteUserCommandHandler(DataContext dataContext, IAuthService authService, IMapper mapper)
    {
        _dataContext = dataContext;
        _authService = authService;
        _mapper = mapper;
    }


    public Task<Unit> Handle(DeleteUserCommand request, CancellationToken cancellationToken)
    {
        var groupMember =
            _dataContext.Users.FirstOrDefault(x => x.GroupId == _authService.User.GroupId && x.Id == request.UserId);

        if (groupMember == null)
        {
            throw new AppException("Cannot find user");
        }

        groupMember.GroupId = null;
        groupMember.Role = null;

        _dataContext.Users.Update(groupMember);
        _dataContext.SaveChanges();

        return Task.FromResult(Unit.Value);
    }
}