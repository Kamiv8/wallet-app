using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WalletApp.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class added_date_range : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tokens_AspNetUsers_UserIdentityId",
                table: "Tokens");

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

            migrationBuilder.AlterColumn<Guid>(
                name: "UserIdentityId",
                table: "Tokens",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<string>(
                name: "Discriminator",
                table: "AspNetUserRoles",
                type: "nvarchar(34)",
                maxLength: 34,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<DateTime>(
                name: "CustomDateRange",
                table: "AccountData",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CustomDayRange",
                table: "AccountData",
                type: "int",
                precision: 2,
                nullable: false,
                defaultValue: 1);

            migrationBuilder.AddColumn<int>(
                name: "DateRangeOption",
                table: "AccountData",
                type: "int",
                nullable: false,
                defaultValue: 1);

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("4793bd67-b553-49c6-8b23-5bb0b50f5cea"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.InsertData(
                table: "Currencies",
                columns: new[] { "Id", "Ask", "Bid", "Code", "CratedBy", "CreatedTime", "CurrencyName", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "TradingDate" },
                values: new object[,]
                {
                    { new Guid("12f364d8-81d4-4248-906f-17c120527c9d"), 1m, 1m, "PLN", null, null, "polski złoty", null, null, false, null, null, new DateTime(2024, 5, 11, 13, 9, 46, 938, DateTimeKind.Local).AddTicks(6278) },
                    { new Guid("1312c319-aeac-441f-aee6-e202109aa73b"), 4.055m, 3.972m, "CHF", null, null, "frank szwajcarski", null, null, false, null, null, new DateTime(2024, 5, 11, 13, 9, 46, 938, DateTimeKind.Local).AddTicks(6260) },
                    { new Guid("2a419c42-5578-4658-88e2-099737b64969"), 4.055m, 3.972m, "USD", null, null, "dolar amerykanski", null, null, false, null, null, new DateTime(2024, 5, 11, 13, 9, 46, 938, DateTimeKind.Local).AddTicks(6212) },
                    { new Guid("c76012e2-c7b0-486c-99c8-61d0e49ec701"), 4.055m, 3.972m, "GBP", null, null, "funt szterling", null, null, false, null, null, new DateTime(2024, 5, 11, 13, 9, 46, 938, DateTimeKind.Local).AddTicks(6263) },
                    { new Guid("c8afc763-d5f7-46b7-bbda-03a16ec90901"), 4.055m, 3.972m, "EUR", null, null, "euro", null, null, false, null, null, new DateTime(2024, 5, 11, 13, 9, 46, 938, DateTimeKind.Local).AddTicks(6257) }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Tokens_AspNetUsers_UserIdentityId",
                table: "Tokens",
                column: "UserIdentityId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tokens_AspNetUsers_UserIdentityId",
                table: "Tokens");

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("4793bd67-b553-49c6-8b23-5bb0b50f5cea"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("12f364d8-81d4-4248-906f-17c120527c9d"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("1312c319-aeac-441f-aee6-e202109aa73b"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("2a419c42-5578-4658-88e2-099737b64969"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("c76012e2-c7b0-486c-99c8-61d0e49ec701"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("c8afc763-d5f7-46b7-bbda-03a16ec90901"));

            migrationBuilder.DropColumn(
                name: "CustomDateRange",
                table: "AccountData");

            migrationBuilder.DropColumn(
                name: "CustomDayRange",
                table: "AccountData");

            migrationBuilder.DropColumn(
                name: "DateRangeOption",
                table: "AccountData");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserIdentityId",
                table: "Tokens",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Discriminator",
                table: "AspNetUserRoles",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(34)",
                oldMaxLength: 34);

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

            migrationBuilder.AddForeignKey(
                name: "FK_Tokens_AspNetUsers_UserIdentityId",
                table: "Tokens",
                column: "UserIdentityId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
