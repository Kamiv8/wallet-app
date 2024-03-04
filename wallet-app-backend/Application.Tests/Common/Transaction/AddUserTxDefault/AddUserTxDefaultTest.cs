using FluentAssertions;
using Moq;
using WalletApp.Application.Common.Transaction.AddUserTxDefault;
using WalletApp.Application.Consts;
using WalletApp.Application.Enums;
using WalletApp.Application.Interfaces;
using WalletApp.Application.Interfaces.Repository;

namespace Application.Tests.Common.Transaction.AddUserTxDefault;

public class AddUserTxDefaultTest
{
    private readonly Mock<ITransactionRepository> _transactionRepositoryMock = new();
    private readonly Mock<IDefaultTransactionRepository> _defaultTransactionRepositoryMock = new();
    private readonly Mock<IUnitOfWork> _unitOfWorkMock = new();
    private readonly Mock<IDate> _dateMock = new();

    [Fact]
    public async Task Handle_ReturnError_When_DefaultTransaction_Is_Null()
    {
        // Arrange
        var guid = Guid.NewGuid();
        var query = new AddUserTxDefaultCommand(guid, guid);

        _defaultTransactionRepositoryMock
            .Setup(x => x.GetDefaultUserTransactionById(It.IsAny<Guid>(), CancellationToken.None))
            .ReturnsAsync(() => null);

        var handler = new AddUserTxDefaultCommandHandler(
            _transactionRepositoryMock.Object,
            _defaultTransactionRepositoryMock.Object,
            _unitOfWorkMock.Object,
            _dateMock.Object
        );

        // Act
        var result = await handler.Handle(query, CancellationToken.None);

        // Assert
        result.Message.Should().Be(CommonErrorMessages.CommonError);
        result.Status.Should().Be(ApiResultStatus.Error);
    }
}