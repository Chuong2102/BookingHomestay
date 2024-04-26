using BookingHomestay.API.DTOs;
using BookingHomestay.Domain.Entities.Room;

namespace BookingHomestay.API.Services.Room
{
    public interface IRoomService
    {
        Task<int> AddRoom(RoomAddDTO roomDTO);
        Task<List<BookingHomestay.Domain.Entities.Room.Room>> GetAllRoomsAsync();
        Task<Domain.Entities.Room.Room> GetRoomAsync(int id);
        Task<List<BookingHomestay.Domain.Entities.Room.Room>> GetAllRoomsByLocationAsync(RoomSearchDTO roomSearchDTO);
    }
}
