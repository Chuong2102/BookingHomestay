using BookingHomestay.Domain.Entities.Room;

namespace BookingHomestay.Infrastructure.Repositories.Room
{
    public interface IRoomRepository : IRepository<BookingHomestay.Domain.Entities.RoomAggregate.Room>
    {
    }
}
