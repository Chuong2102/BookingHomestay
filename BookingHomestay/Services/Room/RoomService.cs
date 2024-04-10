using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Interfaces;
using BookingHomestay.Infrastructure.Repositories;

namespace BookingHomestay.API.Services.Room
{
    public class RoomService : IRoomService
    {
        readonly IRoomRepository roomRepository;
        public RoomService(IRoomRepository roomRepository)
        {
            this.roomRepository = roomRepository;
        }

        public async Task<Domain.Entities.Room.Room> GetRoomAsync(int id)
        {
            return await this.roomRepository.GetAsync(r => r.ID == id);
        }

        public async Task<List<Domain.Entities.Room.Room>> GetAllRoomsAsync()
        {
            return await roomRepository.GetAllAsync();
        }
    }
}
