namespace WalletApp.Application.Dtos;

public sealed record EmailClientDto(string Subject, string Title, string Html, string To);
