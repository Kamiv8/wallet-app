using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WalletApp.Persistance.Migrations
{
    /// <inheritdoc />
    public partial class group : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Group_GroupId",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK_Members_Group_GroupId",
                table: "Members");

            migrationBuilder.DropForeignKey(
                name: "FK_Notes_Group_GroupId",
                table: "Notes");

            migrationBuilder.DropForeignKey(
                name: "FK_Notifications_Group_GuidId",
                table: "Notifications");

            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Group_GroupId",
                table: "Transactions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Group",
                table: "Group");

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("f445d681-0bac-4c15-a8d3-dcdbfe043c09"));

            migrationBuilder.RenameTable(
                name: "Group",
                newName: "Groups");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Groups",
                table: "Groups",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("9f5836f5-8ca6-47bc-a399-3acfabdaa36c"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Groups_GroupId",
                table: "Categories",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Members_Groups_GroupId",
                table: "Members",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notes_Groups_GroupId",
                table: "Notes",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Notifications_Groups_GuidId",
                table: "Notifications",
                column: "GuidId",
                principalTable: "Groups",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Groups_GroupId",
                table: "Transactions",
                column: "GroupId",
                principalTable: "Groups",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Groups_GroupId",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK_Members_Groups_GroupId",
                table: "Members");

            migrationBuilder.DropForeignKey(
                name: "FK_Notes_Groups_GroupId",
                table: "Notes");

            migrationBuilder.DropForeignKey(
                name: "FK_Notifications_Groups_GuidId",
                table: "Notifications");

            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Groups_GroupId",
                table: "Transactions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Groups",
                table: "Groups");

            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: new Guid("9f5836f5-8ca6-47bc-a399-3acfabdaa36c"));

            migrationBuilder.RenameTable(
                name: "Groups",
                newName: "Group");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Group",
                table: "Group",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "Id", "CratedBy", "CreatedTime", "DeletedBy", "DeletedTime", "GroupId", "IsDeleted", "ModifiedBy", "ModifiedTime", "Name", "UserIdentityId" },
                values: new object[] { new Guid("f445d681-0bac-4c15-a8d3-dcdbfe043c09"), null, null, null, null, null, false, null, null, "Rachunki", null });

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Group_GroupId",
                table: "Categories",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Members_Group_GroupId",
                table: "Members",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notes_Group_GroupId",
                table: "Notes",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Notifications_Group_GuidId",
                table: "Notifications",
                column: "GuidId",
                principalTable: "Group",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Group_GroupId",
                table: "Transactions",
                column: "GroupId",
                principalTable: "Group",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
