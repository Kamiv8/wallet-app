using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WalletApp.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class add_language : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("481420ff-3cc1-47cc-be65-03c31e10277e"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("1bf84dd1-851e-4369-b1d7-4c301f12191c"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("49b11f7c-c6db-4130-a638-58ded5c4dbed"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("50fc3f92-e9c9-48ae-a54b-01cccb4c49d4"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("af9d1038-8b15-4808-8601-120666b03214"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("b62faace-8b8b-412f-8064-a3cf21a52037"));

            migrationBuilder.AlterColumn<long>(
                name: "IconType",
                table: "AspNetUsers",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<long>(
                name: "Language",
                table: "AspNetUsers",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("fe51b179-a382-447d-9818-b29fb3062847"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.InsertData(
                table: "Currencies",
                columns: new[] { "Id", "Ask", "Bid", "Code", "CratedBy", "CreatedTime", "CurrencyName", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "TradingDate" },
                values: new object[,]
                {
                    { new Guid("0a72d06b-b39b-47b1-8aa1-dbb7a960baef"), 4.055m, 3.972m, "CHF", null, null, "frank szwajcarski", null, null, false, null, null, new DateTime(2024, 1, 4, 1, 55, 19, 388, DateTimeKind.Local).AddTicks(8985) },
                    { new Guid("5e241818-ff68-40a5-9e12-8d63af409e9d"), 1m, 1m, "PLN", null, null, "polski złoty", null, null, false, null, null, new DateTime(2024, 1, 4, 1, 55, 19, 388, DateTimeKind.Local).AddTicks(8993) },
                    { new Guid("8962939b-2c32-4579-b5c1-c5fdc626c3f0"), 4.055m, 3.972m, "GBP", null, null, "funt szterling", null, null, false, null, null, new DateTime(2024, 1, 4, 1, 55, 19, 388, DateTimeKind.Local).AddTicks(8988) },
                    { new Guid("e727487c-94b1-480b-a04a-0b23ffc58bff"), 4.055m, 3.972m, "USD", null, null, "dolar amerykanski", null, null, false, null, null, new DateTime(2024, 1, 4, 1, 55, 19, 388, DateTimeKind.Local).AddTicks(8920) },
                    { new Guid("e86def6d-fff1-4b84-9ed9-abd707d5bae4"), 4.055m, 3.972m, "EUR", null, null, "euro", null, null, false, null, null, new DateTime(2024, 1, 4, 1, 55, 19, 388, DateTimeKind.Local).AddTicks(8982) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("fe51b179-a382-447d-9818-b29fb3062847"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("0a72d06b-b39b-47b1-8aa1-dbb7a960baef"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("5e241818-ff68-40a5-9e12-8d63af409e9d"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("8962939b-2c32-4579-b5c1-c5fdc626c3f0"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("e727487c-94b1-480b-a04a-0b23ffc58bff"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("e86def6d-fff1-4b84-9ed9-abd707d5bae4"));

            migrationBuilder.DropColumn(
                name: "Language",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "IconType",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("481420ff-3cc1-47cc-be65-03c31e10277e"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.InsertData(
                table: "Currencies",
                columns: new[] { "Id", "Ask", "Bid", "Code", "CratedBy", "CreatedTime", "CurrencyName", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "TradingDate" },
                values: new object[,]
                {
                    { new Guid("1bf84dd1-851e-4369-b1d7-4c301f12191c"), 4.055m, 3.972m, "EUR", null, null, "euro", null, null, false, null, null, new DateTime(2024, 1, 3, 16, 0, 51, 539, DateTimeKind.Local).AddTicks(7506) },
                    { new Guid("49b11f7c-c6db-4130-a638-58ded5c4dbed"), 4.055m, 3.972m, "CHF", null, null, "frank szwajcarski", null, null, false, null, null, new DateTime(2024, 1, 3, 16, 0, 51, 539, DateTimeKind.Local).AddTicks(7509) },
                    { new Guid("50fc3f92-e9c9-48ae-a54b-01cccb4c49d4"), 1m, 1m, "PLN", null, null, "polski złoty", null, null, false, null, null, new DateTime(2024, 1, 3, 16, 0, 51, 539, DateTimeKind.Local).AddTicks(7515) },
                    { new Guid("af9d1038-8b15-4808-8601-120666b03214"), 4.055m, 3.972m, "GBP", null, null, "funt szterling", null, null, false, null, null, new DateTime(2024, 1, 3, 16, 0, 51, 539, DateTimeKind.Local).AddTicks(7512) },
                    { new Guid("b62faace-8b8b-412f-8064-a3cf21a52037"), 4.055m, 3.972m, "USD", null, null, "dolar amerykanski", null, null, false, null, null, new DateTime(2024, 1, 3, 16, 0, 51, 539, DateTimeKind.Local).AddTicks(7465) }
                });
        }
    }
}
