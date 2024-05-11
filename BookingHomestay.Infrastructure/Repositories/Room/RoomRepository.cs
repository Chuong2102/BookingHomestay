using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.RoomAggregate;
using BookingHomestay.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace BookingHomestay.Infrastructure.Repositories
{
    public class RoomRepository : RepositoryBase<BookingHomestay.Domain.Entities.Room.Room>, IRoomRepository
    {
        BookingHomestayDbContext dbcontext;

        public RoomRepository(BookingHomestayDbContext context) : base(context)
        {
            this.dbcontext = context;
        }

        public async Task<List<Category>> GetAllCategories()
        {
            return await dbcontext.Categories.ToListAsync();
        }
    }
}
