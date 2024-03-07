using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BookingHomestay.Infrastructure.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Rooms",
                columns: new[] { "ID", "Area", "Description", "Price", "ProvinceID", "Title", "UserID" },
                values: new object[] { 1, 100.0, "Homestay gia re", 500000m, null, "Homestay gia re gan trung tam thanh pho Hue", 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Rooms",
                keyColumn: "ID",
                keyValue: 1);
        }
    }
}
