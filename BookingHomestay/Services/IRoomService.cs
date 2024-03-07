using BookingHomestay.Domain.Entities.Room;

namespace BookingHomestay.API.Services
{
    public interface IRoomService
    {
        Task<List<Room>> GetAllRoomsAsync();
    }
}
