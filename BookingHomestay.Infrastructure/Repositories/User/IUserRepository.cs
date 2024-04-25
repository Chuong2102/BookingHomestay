using BookingHomestay.Domain.Entities.UserAggregate;
using BookingHomestay.Domain.Interfaces;

namespace BookingHomestay.Infrastructure.Repositories.User
{
    public interface IUserRepository : IAsyncRepository<Domain.Entities.UserAggregate.User>
    {

    }
}
