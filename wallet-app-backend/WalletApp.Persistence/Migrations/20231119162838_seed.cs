using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WalletApp.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class seed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("a36cf5c7-4865-4e9f-a7e8-d1f604afdec6"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("9a5a9077-974c-42ac-bc86-4f89d112b514"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("ed5fc907-074a-418d-abba-740c5a13e31b"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("f4f21e2e-869c-4026-b6cf-f2db55102802"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("fdef2b19-cb1b-40c3-9290-c4f32743e8ae"));

            migrationBuilder.AlterColumn<string>(
                name: "CurrencyName",
                table: "Currencies",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(30)",
                oldMaxLength: 30);

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "Currencies",
                type: "nvarchar(3)",
                maxLength: 3,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(3)",
                oldMaxLength: 3);

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.AlterColumn<string>(
                name: "CurrencyName",
                table: "Currencies",
                type: "varchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "Currencies",
                type: "varchar(3)",
                maxLength: 3,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(3)",
                oldMaxLength: 3);

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("a36cf5c7-4865-4e9f-a7e8-d1f604afdec6"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.InsertData(
                table: "Currencies",
                columns: new[] { "Id", "Ask", "Bid", "Code", "CratedBy", "CreatedTime", "CurrencyName", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "TradingDate" },
                values: new object[,]
                {
                    { new Guid("9a5a9077-974c-42ac-bc86-4f89d112b514"), 4.055m, 3.972m, "USD", null, null, "dolar amerykanski", null, null, false, null, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { new Guid("ed5fc907-074a-418d-abba-740c5a13e31b"), 4.055m, 3.972m, "EUR", null, null, "euro", null, null, false, null, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { new Guid("f4f21e2e-869c-4026-b6cf-f2db55102802"), 4.055m, 3.972m, "GBP", null, null, "funt szterling", null, null, false, null, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { new Guid("fdef2b19-cb1b-40c3-9290-c4f32743e8ae"), 4.055m, 3.972m, "CHF", null, null, "frank szwajcarski", null, null, false, null, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });
        }
    }
}
