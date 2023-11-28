namespace WalletApp.Domain.Shared;

public sealed class ValidationResult : IValidationResult
{
    private ValidationResult(Error[] errors)
    {
        Errors = errors;
    }

    public Error[] Errors { get; }

    public static ValidationResult WithErrors(Error[] errors) => new(errors);
}