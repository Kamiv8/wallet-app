namespace WalletApp.Application.Interfaces;

public interface ICurrentUserService
{
    public Guid Id { get; }
    public string? Email { get; }
}