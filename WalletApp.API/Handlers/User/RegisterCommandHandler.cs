using System.Security.Cryptography;
using AutoMapper;
using MediatR;
using WalletApp.API.Helpers;
using WalletApp.API.Services;
using WalletApp.API.Models.commands.User;

namespace WalletApp.API.Handlers.User;

public class RegisterCommandHandler: IRequestHandler<RegisterCommand, Unit>
{
    
    private readonly DataContext _dataContext;
    private readonly IMapper _mapper;
    private readonly IEmailService _emailService;

    public RegisterCommandHandler(
        DataContext dataContext,
        IMapper mapper,
        IEmailService emailService)
    {
        _dataContext = dataContext;
        _mapper = mapper;
        _emailService = emailService;
    }
    
    public Task<Unit> Handle(RegisterCommand command, CancellationToken cancellationToken)
    {

        var isUser = _dataContext.Users.FirstOrDefault(x => x.Email == command.Email);
    
        if (isUser is {IsVerified: false})
        {
            SendVerificationEmail(isUser, command.Origin);
            return Task.FromResult(Unit.Value);
        }
        
        if (_dataContext.Users.Any(u => u.Email == command.Email))
        {
            throw new AppException("This email is taken");
        }
        
        var user = _mapper.Map<Entities.User>(command);

        user.Created = DateTime.UtcNow;
        user.VerificationToken = GenerateVerificationToken();

        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(command.Password);

        _dataContext.Users.Add(user);
        _dataContext.SaveChanges();

        SendVerificationEmail(user, command.Origin);
     
        
        return Task.FromResult(Unit.Value);
    }
    
    private string GenerateVerificationToken()
    {
        var token = Convert.ToHexString(RandomNumberGenerator.GetBytes(64));

        var tokenIsUnique = !_dataContext.Users.Any(u => u.VerificationToken == token);
        return !tokenIsUnique ? GenerateVerificationToken() : token;
    }
    
    private void SendVerificationEmail(Entities.User user, string origin)
    {
        string message;
            var verifyUrl = $"{origin}/verify/{user.VerificationToken}";
            message = $@"<p>Please click the below link to verify your email address:</p>
                            <p><a href=""{verifyUrl}"">{verifyUrl}</a></p>"; // jeśli jest wyświetlany widok to ma lecieć dopiero ten request i if ok to zmień panding do tego napisu że jest git 

        _emailService.Send(
            to: user.Email,
            subject: "Sign-up Verification API - Verify Email",
            html: $@"<h4>Verify Email</h4>
                        <p>Thanks for registering!</p>
                        {message}"
        );
    }
}