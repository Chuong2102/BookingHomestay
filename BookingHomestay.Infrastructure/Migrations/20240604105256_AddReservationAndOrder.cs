using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookingHomestay.Infrastructure.Migrations
{
    public partial class AddReservationAndOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BathRoom",
                table: "Rooms",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BedRoom",
                table: "Rooms",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "GuestNumber",
                table: "Rooms",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BathRoom",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "BedRoom",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "GuestNumber",
                table: "Rooms");
        }
    }
}
