using AutoMapper;
using MediatR;
using Microsoft.Extensions.Options;
using WalletApp.API.Authorization;
using WalletApp.API.Helpers;
using WalletApp.API.Models;
using WalletApp.API.Models.commands;
using WalletApp.API.Services;

namespace WalletApp.API.Handlers.User;

public class VerifyEmailCommandHandler: IRequestHandler<VerifyEmailCommand, Unit>
{

    private readonly DataContext _dataContext;
    private readonly IJwtUtils _jwtUtils;
    private readonly IMapper _mapper;
    private readonly AppSettings _appSettings;
    private readonly IEmailService _emailService;


    public VerifyEmailCommandHandler(
        DataContext dataContext,
        IJwtUtils jwtUtils,
        IMapper mapper,
        IOptions<AppSettings> appSettings,
        IEmailService emailService)
    {
        _dataContext = dataContext;
        _jwtUtils = jwtUtils;
        _mapper = mapper;
        _appSettings = appSettings.Value;
        _emailService = emailService;
    }


    public Task<Unit> Handle(VerifyEmailCommand command, CancellationToken cancellationToken)
    {
        var user = _dataContext.Users.SingleOrDefault(u => u.VerificationToken == command.Token);

        if (user == null)
            throw new AppException("Verification failed");
        
        user.Verified = DateTime.UtcNow;
        user.VerificationToken = null;
        _dataContext.Users.Update(user);
        _dataContext.SaveChanges();
        return Task.FromResult(Unit.Value);
    }
}