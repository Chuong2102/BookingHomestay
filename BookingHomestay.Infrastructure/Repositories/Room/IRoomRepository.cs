using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.RoomAggregate;
using BookingHomestay.Domain.Interfaces;

namespace BookingHomestay.Infrastructure.Repositories
{
    public interface IRoomRepository : IAsyncRepository<BookingHomestay.Domain.Entities.Room.Room>
    {
        Task<List<Category>> GetAllCategories();
        Task<Category> GetCategoryByName(string name);
        Task<List<Room>> GetAllRoomsByCategoryName(string categoryName);
        Task<List<Comment>> GetCommentByRoomID(int roomID);
        Task<int> AddReservation(Reservation reservation);
    }
}
