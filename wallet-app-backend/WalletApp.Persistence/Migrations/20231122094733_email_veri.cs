using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WalletApp.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class email_veri : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("fce4de9f-45af-42f9-98b9-94b602d88238"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.InsertData(
                table: "Currencies",
                columns: new[] { "Id", "Ask", "Bid", "Code", "CratedBy", "CreatedTime", "CurrencyName", "DeletedBy", "DeletedTime", "IsDeleted", "ModifiedBy", "ModifiedTime", "TradingDate" },
                values: new object[,]
                {
                    { new Guid("142169e3-2c32-46ec-8c6d-773e0768deb4"), 4.055m, 3.972m, "CHF", null, null, "frank szwajcarski", null, null, false, null, null, new DateTime(2023, 11, 22, 10, 47, 32, 880, DateTimeKind.Local).AddTicks(1420) },
                    { new Guid("c0b84ee7-9845-4f07-87e6-dfd18148915f"), 4.055m, 3.972m, "EUR", null, null, "euro", null, null, false, null, null, new DateTime(2023, 11, 22, 10, 47, 32, 880, DateTimeKind.Local).AddTicks(1416) },
                    { new Guid("dcce1c57-4eb0-44cc-b3e2-2060321842b2"), 4.055m, 3.972m, "USD", null, null, "dolar amerykanski", null, null, false, null, null, new DateTime(2023, 11, 22, 10, 47, 32, 880, DateTimeKind.Local).AddTicks(1363) },
                    { new Guid("ede48a0c-6b70-46a8-a323-0433bc8a03a0"), 4.055m, 3.972m, "GBP", null, null, "funt szterling", null, null, false, null, null, new DateTime(2023, 11, 22, 10, 47, 32, 880, DateTimeKind.Local).AddTicks(1423) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("fce4de9f-45af-42f9-98b9-94b602d88238"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("142169e3-2c32-46ec-8c6d-773e0768deb4"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("c0b84ee7-9845-4f07-87e6-dfd18148915f"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("dcce1c57-4eb0-44cc-b3e2-2060321842b2"));

            migrationBuilder.DeleteData(
                table: "Currencies",
                keyColumn: "Id",
                keyValue: new Guid("ede48a0c-6b70-46a8-a323-0433bc8a03a0"));

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
        }
    }
}
