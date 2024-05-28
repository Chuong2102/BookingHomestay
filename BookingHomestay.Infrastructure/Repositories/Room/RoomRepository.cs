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

        public async Task<List<Room>> GetAllRoomsByCategoryName(string categoryName)
        {
            return await dbcontext.Categories.Where(c => c.Name == categoryName).SelectMany(r => r.Rooms).ToListAsync();
        }

        public async Task<Category> GetCategoryByName(string name)
        {
            var category = await dbcontext.Categories.FirstOrDefaultAsync(c => c.Name == name);

            return category;
        }

        public async Task<List<Comment>> GetCommentByRoomID(int roomID)
        {
            var room = await dbcontext.Rooms.FirstOrDefaultAsync(r => r.ID == roomID);
            var comments = await dbcontext.Comments.Where(c => c.Room.Equals(room)).ToListAsync();

            return comments;
        }
    }
}
