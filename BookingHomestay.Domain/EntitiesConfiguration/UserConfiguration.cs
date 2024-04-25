using BookingHomestay.Domain.Entities.UserAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BookingHomestay.Domain.EntitiesConfiguration
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasData(new User("Chuong Doan", "Doan Huu Chuong", "chuongdoan2102@gmail.com", DateTime.Now, "0389195503"));

            builder.OwnsOne(r => r.Role).HasData(new Role("User", "Nguoi dung, Client"));
        }
    }
}
