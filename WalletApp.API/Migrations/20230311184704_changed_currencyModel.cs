using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WalletApp.API.Migrations
{
    public partial class changed_currencyModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Currencies_CurrencyId",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_UserDatas_Currencies_CurrencyId",
                table: "UserDatas");

            migrationBuilder.DropIndex(
                name: "IX_UserDatas_CurrencyId",
                table: "UserDatas");

            migrationBuilder.DropIndex(
                name: "IX_Groups_CurrencyId",
                table: "Groups");

            migrationBuilder.CreateIndex(
                name: "IX_UserDatas_CurrencyId",
                table: "UserDatas",
                column: "CurrencyId");

            migrationBuilder.CreateIndex(
                name: "IX_Groups_CurrencyId",
                table: "Groups",
                column: "CurrencyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Currencies_CurrencyId",
                table: "Groups",
                column: "CurrencyId",
                principalTable: "Currencies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_UserDatas_Currencies_CurrencyId",
                table: "UserDatas",
                column: "CurrencyId",
                principalTable: "Currencies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Groups_Currencies_CurrencyId",
                table: "Groups");

            migrationBuilder.DropForeignKey(
                name: "FK_UserDatas_Currencies_CurrencyId",
                table: "UserDatas");

            migrationBuilder.DropIndex(
                name: "IX_UserDatas_CurrencyId",
                table: "UserDatas");

            migrationBuilder.DropIndex(
                name: "IX_Groups_CurrencyId",
                table: "Groups");

            migrationBuilder.CreateIndex(
                name: "IX_UserDatas_CurrencyId",
                table: "UserDatas",
                column: "CurrencyId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Groups_CurrencyId",
                table: "Groups",
                column: "CurrencyId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Groups_Currencies_CurrencyId",
                table: "Groups",
                column: "CurrencyId",
                principalTable: "Currencies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserDatas_Currencies_CurrencyId",
                table: "UserDatas",
                column: "CurrencyId",
                principalTable: "Currencies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
