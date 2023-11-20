using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WalletApp.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class guid_null : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Groups_GroupId",
                table: "Transactions");

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("b30c5ec9-2a7c-4fdb-bb95-f8b8a3ad56de"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("04d23244-906e-46bb-8f49-b41f9c91843e"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("0c0fb5a4-6e0c-4c31-a599-fb7dd41ae0a6"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("12d7f549-f196-41d8-bfc0-dc5de47a810c"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("b127be30-2713-4bad-a2a4-8d257ceeed62"));

            migrationBuilder.AlterColumn<Guid>(
                name: "GroupId",
                table: "Transactions",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<DateTime>(
                name: "TradingDate",
                table: "Currencies",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("78adf0ca-9d91-4f95-8ebe-803133056425"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.InsertData(
                table: "Currencies",
                columns: new[] { "Id", "Ask", "Bid", "Code", "CratedBy", "CreatedTime", "CurrencyName", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "TradingDate" },
                values: new object[,]
                {
                    { new Guid("5abc9602-4079-480b-89b9-49a1aca75cd8"), 4.055m, 3.972m, "GBP", null, null, "funt szterling", null, null, false, null, null, new DateTime(2023, 11, 20, 15, 40, 19, 241, DateTimeKind.Local).AddTicks(2449) },
                    { new Guid("636a6aa2-04c7-4729-9b3b-acc26748c576"), 4.055m, 3.972m, "EUR", null, null, "euro", null, null, false, null, null, new DateTime(2023, 11, 20, 15, 40, 19, 241, DateTimeKind.Local).AddTicks(2429) },
                    { new Guid("d477eede-7883-466e-9100-2548f1f6afc7"), 4.055m, 3.972m, "CHF", null, null, "frank szwajcarski", null, null, false, null, null, new DateTime(2023, 11, 20, 15, 40, 19, 241, DateTimeKind.Local).AddTicks(2432) },
                    { new Guid("f608d049-bc63-4018-9f73-2f63ed709bac"), 4.055m, 3.972m, "USD", null, null, "dolar amerykanski", null, null, false, null, null, new DateTime(2023, 11, 20, 15, 40, 19, 241, DateTimeKind.Local).AddTicks(2384) }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Groups_GroupId",
                table: "Transactions",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Groups_GroupId",
                table: "Transactions");

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("78adf0ca-9d91-4f95-8ebe-803133056425"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("5abc9602-4079-480b-89b9-49a1aca75cd8"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("636a6aa2-04c7-4729-9b3b-acc26748c576"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("d477eede-7883-466e-9100-2548f1f6afc7"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("f608d049-bc63-4018-9f73-2f63ed709bac"));

            migrationBuilder.AlterColumn<Guid>(
                name: "GroupId",
                table: "Transactions",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "TradingDate",
                table: "Currencies",
                type: "datetime",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("b30c5ec9-2a7c-4fdb-bb95-f8b8a3ad56de"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.InsertData(
                table: "Currencies",
                columns: new[] { "Id", "Ask", "Bid", "Code", "CratedBy", "CreatedTime", "CurrencyName", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "TradingDate" },
                values: new object[,]
                {
                    { new Guid("04d23244-906e-46bb-8f49-b41f9c91843e"), 4.055m, 3.972m, "USD", null, null, "dolar amerykanski", null, null, false, null, null, new DateTime(2023, 11, 19, 17, 28, 38, 654, DateTimeKind.Local).AddTicks(4428) },
                    { new Guid("0c0fb5a4-6e0c-4c31-a599-fb7dd41ae0a6"), 4.055m, 3.972m, "GBP", null, null, "funt szterling", null, null, false, null, null, new DateTime(2023, 11, 19, 17, 28, 38, 654, DateTimeKind.Local).AddTicks(4478) },
                    { new Guid("12d7f549-f196-41d8-bfc0-dc5de47a810c"), 4.055m, 3.972m, "EUR", null, null, "euro", null, null, false, null, null, new DateTime(2023, 11, 19, 17, 28, 38, 654, DateTimeKind.Local).AddTicks(4472) },
                    { new Guid("b127be30-2713-4bad-a2a4-8d257ceeed62"), 4.055m, 3.972m, "CHF", null, null, "frank szwajcarski", null, null, false, null, null, new DateTime(2023, 11, 19, 17, 28, 38, 654, DateTimeKind.Local).AddTicks(4475) }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Groups_GroupId",
                table: "Transactions",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
