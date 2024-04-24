using System;
using Microsoft.EntityFrameworkCore.Migrations;
using NetTopologySuite.Geometries;

#nullable disable

namespace BookingHomestay.Infrastructure.Migrations
{
    public partial class InitialDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Provinces",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Provinces", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Rooms",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Area = table.Column<double>(type: "float", nullable: false),
                    Address_AddressLine1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address_AddressLine2 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Address_PostalCare = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address_City = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    Location_PlaceID = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Location_Latitude = table.Column<double>(type: "float", nullable: true),
                    Location_Longitude = table.Column<double>(type: "float", nullable: true),
                    Location_LocationPoint = table.Column<Point>(type: "geography", nullable: true),
                    ProvinceID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rooms", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Rooms_Provinces_ProvinceID",
                        column: x => x.ProvinceID,
                        principalTable: "Provinces",
                        principalColumn: "ID");
                });

            migrationBuilder.CreateTable(
                name: "CategoryRoom",
                columns: table => new
                {
                    CategoriesID = table.Column<int>(type: "int", nullable: false),
                    RoomsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryRoom", x => new { x.CategoriesID, x.RoomsID });
                    table.ForeignKey(
                        name: "FK_CategoryRoom_Categories_CategoriesID",
                        column: x => x.CategoriesID,
                        principalTable: "Categories",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoryRoom_Rooms_RoomsID",
                        column: x => x.RoomsID,
                        principalTable: "Rooms",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoomID = table.Column<int>(type: "int", nullable: true),
                    Path = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Photos_Rooms_RoomID",
                        column: x => x.RoomID,
                        principalTable: "Rooms",
                        principalColumn: "ID");
                });

            migrationBuilder.InsertData(
                table: "Rooms",
                columns: new[] { "ID", "Area", "Description", "Price", "ProvinceID", "Title", "UserID", "Address_AddressLine1", "Address_AddressLine2", "Address_City", "Address_PostalCare", "Location_Latitude", "Location_LocationPoint", "Location_Longitude", "Location_PlaceID" },
                values: new object[,]
                {
                    { 1, 100.0, "Homestay gia re", 500000m, null, "Tam An Homestay", 1, "56 Kiet 93 An Duong Vuong", "Thanh pho Hue, Tinh Thua Thien Hue", "Hue", "49000", 16.452226317000054, null, 107.60572747100008, "" },
                    { 2, 260.0, "Homestay gia re", 450000m, null, "ChocoHouse", 2, "20 Nguyễn Tri Phương", "Phường Phú Nhuận, Thành phố Huế, Tỉnh Thừa Thiên Huế", "Hue", "49000", 16.464479972000049, null, 107.59203459400004, "" },
                    { 3, 400.0, "Homestay gia re", 350000m, null, "Dory Homestay", 3, "73 Thạch Hãn", "Thanh pho Hue, Tinh Thua Thien Hue", "Hue", "49000", 16.471000728000035, null, 107.57140013500003, "" },
                    { 4, 800.0, "Homestay gia re", 220000m, null, "The Dreamers Homestay", 4, "106 Hải Triều", "Thanh pho Hue, Tinh Thua Thien Hue", "Hue", "49000", 16.455358346983619, null, 107.6071873579871, "" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CategoryRoom_RoomsID",
                table: "CategoryRoom",
                column: "RoomsID");

            migrationBuilder.CreateIndex(
                name: "IX_Photos_RoomID",
                table: "Photos",
                column: "RoomID");

            migrationBuilder.CreateIndex(
                name: "IX_Rooms_ProvinceID",
                table: "Rooms",
                column: "ProvinceID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CategoryRoom");

            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Rooms");

            migrationBuilder.DropTable(
                name: "Provinces");
        }
    }
}
