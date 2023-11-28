using FluentValidation;
using MediatR;
using WalletApp.Application.Common;
using WalletApp.Domain.Shared;

namespace WalletApp.Application.Behaviours;

public class ValidationBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse> where TResponse : ApiResult
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;


    public ValidationBehaviour(IEnumerable<IValidator<TRequest>> validators)
    {
        _validators = validators;
    }

    public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next,
        CancellationToken cancellationToken)
    {
        if (!_validators.Any()) return await next();

        var errorsDictionary = _validators
            .Select(validator => validator.Validate(request))
            .SelectMany(validationResult => validationResult.Errors)
            .Where(x => x is not null)
            .Select(failure => new Error(failure.PropertyName, failure.ErrorMessage))
            .Distinct()
            .ToArray();

        if (errorsDictionary.Any())
        {
            return CreateValidationResult<TResponse>(errorsDictionary);
        }

        return await next();
    }

    private static TResult CreateValidationResult<TResult>(Error[] errors)
        where TResult : ApiResult
    {
        if (typeof(TResult) == typeof(ApiResult))
        {
            return (ApiResult.BadRequest(ValidationResult.WithErrors(errors).Errors) as TResult)!;
        }

        var validationResult = typeof(ValidationResult)
            .GetGenericTypeDefinition()
            .MakeGenericType(typeof(TResult).GenericTypeArguments[0])
            .GetMethod(nameof(ValidationResult.WithErrors))!
            .Invoke(null, new object?[] { errors })!;

        return (TResult)validationResult;
    }
}