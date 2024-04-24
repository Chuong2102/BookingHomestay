using BookingHomestay.Domain.Entities.Room;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NetTopologySuite.Mathematics;

namespace BookingHomestay.Domain.EntitiesConfiguration
{
    public class RoomConfiguration : IEntityTypeConfiguration<Room>
    {
        public void Configure(EntityTypeBuilder<Room> builder)
        {
            builder.Property<int>("UserID").IsRequired();

            // Config property
            builder.OwnsOne(r => r.Address, a =>
            {
                a.WithOwner();

                a.Property(a => a.AddressLine1);

                a.Property(a => a.AddressLine2).HasMaxLength(100);

                a.Property(a => a.PostalCare);

                a.Property(a => a.City).HasMaxLength(maxLength: 100);
            });

            builder.OwnsOne(r => r.Location, l =>
            {
                l.WithOwner();

                l.Property(l => l.Latitude);

                l.Property(l => l.Longitude);

                l.Property(l => l.PlaceID);

                l.Property(l => l.LocationPoint);
            });

            builder.HasData(new Room(1, 1, "Homestay gia re", "Tam An Homestay", 500000, 100));

            builder.HasData(new Room(2, 2, "Homestay gia re", "ChocoHouse", 450000, 260));

            builder.HasData(new Room(3, 3, "Homestay gia re", "Dory Homestay", 350000, 400
            ));

            builder.HasData(new Room(4, 4, "Homestay gia re", "The Dreamers Homestay", 220000, 800
            ));

            builder.OwnsOne(a => a.Address)
                .HasData(
                    new {
                        RoomID =  1,
                        AddressLine1 = "56 Kiet 93 An Duong Vuong",
                        AddressLine2 = "Thanh pho Hue, Tinh Thua Thien Hue",
                        PostalCare = "49000",
                        City = "Hue"
                    },
                    new
                    {
                        RoomID = 2,
                        AddressLine1 = "20 Nguyễn Tri Phương",
                        AddressLine2 = "Phường Phú Nhuận, Thành phố Huế, Tỉnh Thừa Thiên Huế",
                        PostalCare = "49000",
                        City = "Hue"
                    },
                    new
                    {
                        RoomID = 3,
                        AddressLine1 = "73 Thạch Hãn",
                        AddressLine2 = "Thanh pho Hue, Tinh Thua Thien Hue",
                        PostalCare = "49000",
                        City = "Hue"
                    },
                    new
                    {
                        RoomID = 4,
                        AddressLine1 = "106 Hải Triều",
                        AddressLine2 = "Thanh pho Hue, Tinh Thua Thien Hue",
                        PostalCare = "49000",
                        City = "Hue"
                    }
                );

            builder.OwnsOne(l => l.Location)
                .HasData(
                    new
                    {
                        RoomID = 1,
                        PlaceID = "",
                        Latitude = 16.452226317000054,
                        Longitude = 107.60572747100008
                    },
                    new
                    {
                        RoomID = 2,
                        PlaceID = "",
                        Latitude = 16.46447997200005,
                        Longitude = 107.59203459400004
                    },
                    new
                    {
                        RoomID = 3,
                        PlaceID = "",
                        Latitude = 16.471000728000035,
                        Longitude = 107.57140013500003
                    }, new
                    {
                        RoomID = 4,
                        PlaceID = "",
                        Latitude = 16.45535834698362,
                        Longitude = 107.6071873579871
                    }
                );
        }
    }
}
