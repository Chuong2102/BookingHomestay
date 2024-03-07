using BookingHomestay.Domain.Entities;
using BookingHomestay.Domain.Entities.Room;

namespace BookingHomestay.Infrastructure.Repositories
{
    public interface IRepository<T> where T : IAggregateRoot
    {
        Task<List<BookingHomestay.Domain.Entities.Room.Room>> GetAllAsync();
    }
}
