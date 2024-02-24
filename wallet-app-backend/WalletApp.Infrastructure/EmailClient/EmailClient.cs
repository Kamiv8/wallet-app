using Mailjet.Client;
using Mailjet.Client.Resources;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using WalletApp.Application.Common;
using WalletApp.Application.Consts;
using WalletApp.Application.Dtos;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Options.EmailOptions;

namespace WalletApp.Infractructure.EmailClient;

public class EmailClient : IEmailClient
{
    private readonly EmailOptions _options;

    public EmailClient(IOptions<EmailOptions> options)
    {
        _options = options.Value;
    }

    public async Task<ApiResult> SendMailAsync(EmailClientDto dto)
    {
        var client = new MailjetClient(_options.ApiKey,
            _options.SecretKey);

        var request = new MailjetRequest
            {
                Resource = Send.Resource,
            }
            .Property(Send.FromEmail, _options.FromEmail)
            .Property(Send.FromName, _options.FromName)
            .Property(Send.Subject, "Your email flight plan!")
            .Property(Send.TextPart, "Dear passenger, welcome to Mailjet! May the delivery force be with you!")
            .Property(Send.HtmlPart, dto.Html)
            .Property(Send.Recipients, new JArray {
                new JObject {
                    {"Email", dto.To}
                }
            });

        var response = await client.PostAsync(request);

        return response.IsSuccessStatusCode ? ApiResult.Success() : ApiResult.Error(CommonErrorMessages.CommonError);
    }
}