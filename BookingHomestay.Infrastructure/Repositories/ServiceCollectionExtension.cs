using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Interfaces;

namespace BookingHomestay.Infrastructure.Repositories
{
    public static class ServiceCollectionExtension
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddTransient(typeof(IAsyncRepository<>), typeof(RepositoryBase<>));
            services.AddScoped<RepositoryBase<BookingHomestay.Domain.Entities.Room.Room>>();

            services.AddTransient<IRoomRepository, RoomRepository>();

            services.AddTransient<RepositoryBase<Context.BookingHomestayDbContext>>();

        }
    }
}
