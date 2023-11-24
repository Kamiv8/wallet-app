using WalletApp.Application.Common;
using WalletApp.Application.Dtos;

namespace WalletApp.Application.Interfaces;

public interface IEmailClient
{
    Task<ApiResult> SendMailAsync(EmailClientDto dto);
}