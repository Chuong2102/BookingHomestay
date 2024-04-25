using BookingHomestay.API.DTOs;
using BookingHomestay.Domain.Entities.UserAggregate;

namespace BookingHomestay.API.Services.User
{
    public interface IUserService
    {
        Task<Domain.Entities.UserAggregate.User> Authenticate(UserAuthenDTO userDTO);
    }
}
