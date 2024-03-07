using BookingHomestay.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace BookingHomestay.Infrastructure
{
    public static class Dependencies
    {
        public static void ConfigureServices(IConfiguration configuration, IServiceCollection services)
        {
            services.AddDbContext<BookingHomestayDbContext>(
                options => options.UseSqlServer(configuration.GetConnectionString("BookingHomestayDatabase"), opt => opt.UseNetTopologySuite())
            );
        }
    }
}

