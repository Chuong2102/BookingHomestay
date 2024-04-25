using BookingHomestay.API.DTOs;
using BookingHomestay.Infrastructure.Repositories.User;

namespace BookingHomestay.API.Services.User
{
    public class UserService : IUserService
    {
        readonly IUserRepository userRepository;

        public UserService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }
        public async Task<Domain.Entities.UserAggregate.User> Authenticate(UserAuthenDTO userDTO)
        {
            var user = await userRepository.GetAsync(u => u.Email == userDTO.Email && u.Password == userDTO.Password);

            return user;
        }
    }
}
