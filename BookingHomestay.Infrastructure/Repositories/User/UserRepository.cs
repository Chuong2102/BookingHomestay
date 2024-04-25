using BookingHomestay.Domain.Entities.UserAggregate;
using BookingHomestay.Infrastructure.Context;

namespace BookingHomestay.Infrastructure.Repositories.User
{
    public class UserRepository : RepositoryBase<Domain.Entities.UserAggregate.User>, IUserRepository
    {
        BookingHomestayDbContext context;
        public UserRepository(BookingHomestayDbContext dbContext) : base(dbContext)
        {
            context = dbContext;
        }
    }
}
