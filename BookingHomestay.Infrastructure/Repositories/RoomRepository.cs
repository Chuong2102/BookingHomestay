using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace BookingHomestay.Infrastructure.Repositories
{
    public class RoomRepository : IRoomRepository
    {
        readonly BookingHomestayDbContext context;

        public RoomRepository(BookingHomestayDbContext context)
        {
            this.context = context;
        }

        public async Task<List<BookingHomestay.Domain.Entities.Room.Room>> GetAllAsync()
        {
            return await context.Rooms.ToListAsync();
        }

    }
}
