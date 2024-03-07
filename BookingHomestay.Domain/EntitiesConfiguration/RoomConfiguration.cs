using BookingHomestay.Domain.Entities.Room;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

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

            builder.HasData(new Room(1, 1, "Homestay gia re", "Homestay gia re gan trung tam thanh pho Hue", 500000, 100));
        }
    }
}
