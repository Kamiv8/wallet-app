using Application.Tests.Helpers;
using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Transaction.AddUserTransaction;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;
using WalletApp.Domain.Entities;

namespace Application.Tests.Common.Transaction.AddUserTransaction;

public class AddUserTransactionTest
{
    private readonly Mock<ITransactionRepository> _transactionRepositoryMock = new();
    private readonly Mock<ICurrencyRepository> _currencyRepositoryMock = new();
    private readonly Mock<IAccountDataRepository> _accountDataRepositoryMock = new();
    private readonly Mock<IUnitOfWork> _unitOfWorkMock = new();
    private readonly Mock<IDefaultTransactionRepository> _defaultTransactionRepositoryMock = new();


    [Fact]
    public async Task Handle_ReturnsError_When_Currency_Is_Null()
    {
        // Arrange
        var command = new AddUserTransactionCommand(
            GenerateRandomGuid.RandomGuid, "title", 12.2m, GenerateRandomGuid.RandomGuid,
            GenerateRandomGuid.RandomGuid, new DateTime(2024, 4, 12), false, "", "", "");

        _currencyRepositoryMock
            .Setup(x => x.GetCurrencyById(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(() => null);

        var handler = new AddUserTransactionCommandHandler(
            _transactionRepositoryMock.Object,
            _currencyRepositoryMock.Object,
            _accountDataRepositoryMock.Object,
            _unitOfWorkMock.Object,
            _defaultTransactionRepositoryMock.Object
        );

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(CommonErrorMessages.CommonError);
    }
    
    [Fact]
    public async Task Handle_ReturnsError_When_AccountData_Is_Null()
    {
        // Arrange
        var command = new AddUserTransactionCommand(
            GenerateRandomGuid.RandomGuid, "title", 12.2m, GenerateRandomGuid.RandomGuid,
            GenerateRandomGuid.RandomGuid, new DateTime(2024, 4, 12), false, "", "", "");

        _currencyRepositoryMock
            .Setup(x => x.GetCurrencyById(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(new Currency());

        _accountDataRepositoryMock
            .Setup(x => x.GetUserById(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(() => null);

        var handler = new AddUserTransactionCommandHandler(
            _transactionRepositoryMock.Object,
            _currencyRepositoryMock.Object,
            _accountDataRepositoryMock.Object,
            _unitOfWorkMock.Object,
            _defaultTransactionRepositoryMock.Object
        );

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(CommonErrorMessages.CommonError);
    }
    
    [Fact]
    public async Task Handle_ReturnsError_When_Cannot_Parse_Currency_Code()
    {
        // Arrange
        var command = new AddUserTransactionCommand(
            GenerateRandomGuid.RandomGuid, "title", 12.2m, GenerateRandomGuid.RandomGuid,
            GenerateRandomGuid.RandomGuid, new DateTime(2024, 4, 12), false, "", "", "");

        _currencyRepositoryMock
            .Setup(x => x.GetCurrencyById(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(new Currency {Code = "ABC", Ask = 12, Bid = 12, CurrencyName = "Abkc"});

        _accountDataRepositoryMock
            .Setup(x => x.GetUserById(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(new AccountData());

        
        var handler = new AddUserTransactionCommandHandler(
            _transactionRepositoryMock.Object,
            _currencyRepositoryMock.Object,
            _accountDataRepositoryMock.Object,
            _unitOfWorkMock.Object,
            _defaultTransactionRepositoryMock.Object
        );

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Error);
        result.Message.Should().Be(CommonErrorMessages.CommonError);
    }
    
    [Theory]
    [InlineData("CHF")]
    [InlineData("GBP")]
    [InlineData("EUR")]
    [InlineData("USD")]
    [InlineData("PLN")]
    public async Task Handle_ReturnsError_When_Data_Are_Correct(string currency)
    {
        // Arrange
        var command = new AddUserTransactionCommand(
            GenerateRandomGuid.RandomGuid, "title", 12.2m, GenerateRandomGuid.RandomGuid,
            GenerateRandomGuid.RandomGuid, new DateTime(2024, 4, 12), false, "", "", "");

        _currencyRepositoryMock
            .Setup(x => x.GetCurrencyById(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(new Currency {Code = currency, Ask = 12, Bid = 12, CurrencyName = "Abkc"});

        _accountDataRepositoryMock
            .Setup(x => x.GetUserById(It.IsAny<Guid>(), It.IsAny<CancellationToken>()))
            .ReturnsAsync(new AccountData());

        
        var handler = new AddUserTransactionCommandHandler(
            _transactionRepositoryMock.Object,
            _currencyRepositoryMock.Object,
            _accountDataRepositoryMock.Object,
            _unitOfWorkMock.Object,
            _defaultTransactionRepositoryMock.Object
        );

        // Act
        var result = await handler.Handle(command, default);

        // Assert
        result.Status.Should().Be(ApiResultStatus.Success);
        _transactionRepositoryMock.Verify(x => x.AddTransactionAsync(It.IsAny<WalletApp.Domain.Entities.Transaction>(), It.IsAny<CancellationToken>()), Times.Once);
        _unitOfWorkMock.Verify(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Once);
    }
    
    
    
}