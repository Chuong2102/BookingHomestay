using BookingHomestay.Domain.Entities.Room;

namespace BookingHomestay.API.Services.Room
{
    public interface IRoomService
    {
        Task<List<BookingHomestay.Domain.Entities.Room.Room>> GetAllRoomsAsync();
        //Task<Domain.Entities.Room.Room> AddRoomAsync();
    }
}
