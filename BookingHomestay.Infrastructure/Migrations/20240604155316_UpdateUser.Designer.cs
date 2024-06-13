﻿// <auto-generated />
using System;
using BookingHomestay.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NetTopologySuite.Geometries;

#nullable disable

namespace BookingHomestay.Infrastructure.Migrations
{
    [DbContext(typeof(BookingHomestayDbContext))]
    [Migration("20240604155316_UpdateUser")]
    partial class UpdateUser
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.27")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("BookingHomestay.Domain.Entities.CommonEnities.Photo", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime?>("CreatedTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Path")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("RoomID")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("RoomID");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.Merchant", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int?>("LastUpdatedByUserID")
                        .HasColumnType("int");

                    b.Property<string>("MerchantIpnUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MerchantName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MerchantReturnUrl")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MerchantWeblink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SecretKey")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("SecretSecret")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<int?>("UserID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Merchants");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.Payment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime?>("ExpireDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("MerchantID")
                        .HasColumnType("int");

                    b.Property<decimal?>("PaidAmount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("PaymentContent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentCurrency")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("PaymentDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("PaymentDesinationID")
                        .HasColumnType("int");

                    b.Property<string>("PaymentLanguages")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentLastMessage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentRefID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PaymentStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("RequiredAmount")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("ID");

                    b.HasIndex("MerchantID");

                    b.HasIndex("PaymentDesinationID");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.PaymentDestination", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("DesName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DesShortName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("DesSortIndex")
                        .HasColumnType("int");

                    b.Property<string>("Deslogo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int?>("ParentID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("PaymentDestinations");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.PaymentNotification", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<int?>("MerchantID")
                        .HasColumnType("int");

                    b.Property<string>("NotiAmount")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NotiContent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("NotiDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("NotiMessege")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("NotiResDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("NotiSignature")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NotiStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PaymentID")
                        .HasColumnType("int");

                    b.Property<string>("PaymentRefID")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("MerchantID");

                    b.HasIndex("PaymentID");

                    b.ToTable("PaymentNotifications");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.PaymentSignature", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<int?>("PaymentID")
                        .HasColumnType("int");

                    b.Property<string>("SignAglo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("SignDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("SignOwn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SignValue")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("PaymentID");

                    b.ToTable("PaymentSignatures");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.Transaction", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<int?>("PaymentID")
                        .HasColumnType("int");

                    b.Property<int?>("ReservationID")
                        .HasColumnType("int");

                    b.Property<int?>("RoomID")
                        .HasColumnType("int");

                    b.Property<decimal?>("TranAmount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime?>("TranDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("TranMessage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TranPayload")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TranStatus")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("PaymentID");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.Room.Room", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<double>("Area")
                        .HasColumnType("float");

                    b.Property<int?>("BathRoom")
                        .HasColumnType("int");

                    b.Property<int?>("BedRoom")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("GuestNumber")
                        .HasColumnType("int");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("ProvinceID")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ProvinceID");

                    b.ToTable("Rooms");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            Area = 100.0,
                            Description = "Homestay gia re",
                            Price = 500000m,
                            Title = "Tam An Homestay",
                            UserID = 1
                        },
                        new
                        {
                            ID = 2,
                            Area = 260.0,
                            Description = "Homestay gia re",
                            Price = 450000m,
                            Title = "ChocoHouse",
                            UserID = 2
                        },
                        new
                        {
                            ID = 3,
                            Area = 400.0,
                            Description = "Homestay gia re",
                            Price = 350000m,
                            Title = "Dory Homestay",
                            UserID = 3
                        },
                        new
                        {
                            ID = 4,
                            Area = 800.0,
                            Description = "Homestay gia re",
                            Price = 220000m,
                            Title = "The Dreamers Homestay",
                            UserID = 4
                        });
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.RoomAggregate.Category", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.RoomAggregate.Comment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("CommentIDTo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CommentText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("CreatedDateTime")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("EditedDateTime")
                        .HasColumnType("datetime2");

                    b.Property<int?>("RoomID")
                        .HasColumnType("int");

                    b.Property<int?>("UserID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("RoomID");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.RoomAggregate.Province", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Provinces");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.RoomAggregate.Reservation", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<DateTime?>("CancelDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("CreatedDateTime")
                        .HasColumnType("int");

                    b.Property<DateTime?>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<decimal?>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal?>("RefundPaid")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("RoomID")
                        .HasColumnType("int");

                    b.Property<DateTime?>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<decimal?>("Total")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int?>("UpdatedDateTime")
                        .HasColumnType("int");

                    b.Property<int?>("UserID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("RoomID");

                    b.ToTable("Reservations");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.UserAggregate.Role", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.UserAggregate.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("LockoutEnalbe")
                        .HasColumnType("bit");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("ProfileImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("RegistrationDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("RoleID")
                        .HasColumnType("int");

                    b.Property<bool?>("SuperHost")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("RoleID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CategoryRoom", b =>
                {
                    b.Property<int>("CategoriesID")
                        .HasColumnType("int");

                    b.Property<int>("RoomsID")
                        .HasColumnType("int");

                    b.HasKey("CategoriesID", "RoomsID");

                    b.HasIndex("RoomsID");

                    b.ToTable("CategoryRoom");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.CommonEnities.Photo", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.Room.Room", "Room")
                        .WithMany()
                        .HasForeignKey("RoomID");

                    b.Navigation("Room");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.Payment", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.OrderAggregate.Merchant", "Merchant")
                        .WithMany()
                        .HasForeignKey("MerchantID");

                    b.HasOne("BookingHomestay.Domain.Entities.OrderAggregate.PaymentDestination", "PaymentDesination")
                        .WithMany()
                        .HasForeignKey("PaymentDesinationID");

                    b.Navigation("Merchant");

                    b.Navigation("PaymentDesination");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.PaymentNotification", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.OrderAggregate.Merchant", "Merchant")
                        .WithMany()
                        .HasForeignKey("MerchantID");

                    b.HasOne("BookingHomestay.Domain.Entities.OrderAggregate.Payment", "Payment")
                        .WithMany()
                        .HasForeignKey("PaymentID");

                    b.Navigation("Merchant");

                    b.Navigation("Payment");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.PaymentSignature", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.OrderAggregate.Payment", "Payment")
                        .WithMany()
                        .HasForeignKey("PaymentID");

                    b.Navigation("Payment");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.OrderAggregate.Transaction", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.OrderAggregate.Payment", "Payment")
                        .WithMany()
                        .HasForeignKey("PaymentID");

                    b.Navigation("Payment");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.Room.Room", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.RoomAggregate.Province", "Province")
                        .WithMany()
                        .HasForeignKey("ProvinceID");

                    b.OwnsOne("BookingHomestay.Domain.Entities.Room.Address", "Address", b1 =>
                        {
                            b1.Property<int>("RoomID")
                                .HasColumnType("int");

                            b1.Property<string>("AddressLine1")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<string>("AddressLine2")
                                .HasMaxLength(100)
                                .HasColumnType("nvarchar(100)");

                            b1.Property<string>("City")
                                .HasMaxLength(100)
                                .HasColumnType("nvarchar(100)");

                            b1.Property<string>("PostalCare")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("RoomID");

                            b1.ToTable("Rooms");

                            b1.WithOwner()
                                .HasForeignKey("RoomID");

                            b1.HasData(
                                new
                                {
                                    RoomID = 1,
                                    AddressLine1 = "56 Kiet 93 An Duong Vuong",
                                    AddressLine2 = "Thanh pho Hue, Tinh Thua Thien Hue",
                                    City = "Hue",
                                    PostalCare = "49000"
                                },
                                new
                                {
                                    RoomID = 2,
                                    AddressLine1 = "20 Nguyễn Tri Phương",
                                    AddressLine2 = "Phường Phú Nhuận, Thành phố Huế, Tỉnh Thừa Thiên Huế",
                                    City = "Hue",
                                    PostalCare = "49000"
                                },
                                new
                                {
                                    RoomID = 3,
                                    AddressLine1 = "73 Thạch Hãn",
                                    AddressLine2 = "Thanh pho Hue, Tinh Thua Thien Hue",
                                    City = "Hue",
                                    PostalCare = "49000"
                                },
                                new
                                {
                                    RoomID = 4,
                                    AddressLine1 = "106 Hải Triều",
                                    AddressLine2 = "Thanh pho Hue, Tinh Thua Thien Hue",
                                    City = "Hue",
                                    PostalCare = "49000"
                                });
                        });

                    b.OwnsOne("BookingHomestay.Domain.Entities.RoomAggregate.Location", "Location", b1 =>
                        {
                            b1.Property<int>("RoomID")
                                .HasColumnType("int");

                            b1.Property<double?>("Latitude")
                                .HasColumnType("float");

                            b1.Property<Point>("LocationPoint")
                                .HasColumnType("geography");

                            b1.Property<double?>("Longitude")
                                .HasColumnType("float");

                            b1.Property<string>("PlaceID")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("RoomID");

                            b1.ToTable("Rooms");

                            b1.WithOwner()
                                .HasForeignKey("RoomID");

                            b1.HasData(
                                new
                                {
                                    RoomID = 1,
                                    Latitude = 16.452226317000054,
                                    Longitude = 107.60572747100008,
                                    PlaceID = ""
                                },
                                new
                                {
                                    RoomID = 2,
                                    Latitude = 16.464479972000049,
                                    Longitude = 107.59203459400004,
                                    PlaceID = ""
                                },
                                new
                                {
                                    RoomID = 3,
                                    Latitude = 16.471000728000035,
                                    Longitude = 107.57140013500003,
                                    PlaceID = ""
                                },
                                new
                                {
                                    RoomID = 4,
                                    Latitude = 16.455358346983619,
                                    Longitude = 107.6071873579871,
                                    PlaceID = ""
                                });
                        });

                    b.Navigation("Address");

                    b.Navigation("Location");

                    b.Navigation("Province");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.RoomAggregate.Comment", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.Room.Room", "Room")
                        .WithMany()
                        .HasForeignKey("RoomID");

                    b.Navigation("Room");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.RoomAggregate.Reservation", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.Room.Room", "Room")
                        .WithMany()
                        .HasForeignKey("RoomID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Room");
                });

            modelBuilder.Entity("BookingHomestay.Domain.Entities.UserAggregate.User", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.UserAggregate.Role", "Role")
                        .WithMany()
                        .HasForeignKey("RoleID");

                    b.Navigation("Role");
                });

            modelBuilder.Entity("CategoryRoom", b =>
                {
                    b.HasOne("BookingHomestay.Domain.Entities.RoomAggregate.Category", null)
                        .WithMany()
                        .HasForeignKey("CategoriesID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BookingHomestay.Domain.Entities.Room.Room", null)
                        .WithMany()
                        .HasForeignKey("RoomsID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
