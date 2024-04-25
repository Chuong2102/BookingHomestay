using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.UserAggregate;
using BookingHomestay.Domain.Interfaces;
using BookingHomestay.Infrastructure.Repositories.Authentication;
using BookingHomestay.Infrastructure.Repositories.User;

namespace BookingHomestay.Infrastructure.Repositories
{
    public static class ServiceCollectionExtension
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddTransient(typeof(IAsyncRepository<>), typeof(RepositoryBase<>));
            services.AddScoped<RepositoryBase<BookingHomestay.Domain.Entities.Room.Room>>();
            services.AddScoped<RepositoryBase<Domain.Entities.UserAggregate.User>>();

            services.AddTransient<IRoomRepository, RoomRepository>();
            services.AddTransient<IUserRepository, UserRepository>();

            services.AddTransient<RepositoryBase<Context.BookingHomestayDbContext>>();
            services.AddSingleton<IJwtTokenGenerator, JwtTokenGenerator>();

        }
    }
}
