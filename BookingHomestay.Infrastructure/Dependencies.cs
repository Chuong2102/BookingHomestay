using BookingHomestay.Infrastructure.Context;
using BookingHomestay.Infrastructure.Repositories.Authentication;
using Microsoft.EntityFrameworkCore;

namespace BookingHomestay.Infrastructure
{
    public static class Dependencies
    {
        public static void ConfigureServices(IConfiguration configuration, IServiceCollection services)
        {
            services.Configure<JwtSettings>(configuration.GetSection(JwtSettings.SectionName));

            services.AddDbContext<BookingHomestayDbContext>(
                options => options.UseSqlServer(configuration.GetConnectionString("BookingHomestayDatabase"), opt => opt.UseNetTopologySuite())
            );
        }
    }
}

