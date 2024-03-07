using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Infrastructure.Repositories;

namespace BookingHomestay.API.Services
{
    public class RoomService : IRoomService
    {
        readonly IRoomRepository roomRepository;
        public RoomService(IRoomRepository roomRepo)
        {
            roomRepository = roomRepo;
        }
        public async Task<List<Room>> GetAllRoomsAsync()
        {
            return await roomRepository.GetAllAsync();
        }
    }
}
