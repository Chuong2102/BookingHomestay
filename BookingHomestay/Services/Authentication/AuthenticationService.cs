using BookingHomestay.API.DTOs;
using BookingHomestay.API.Helpers;
using BookingHomestay.Infrastructure.Repositories.User;
using Google.Apis.Auth;

namespace BookingHomestay.API.Services.Authentication
{
    public class AuthenticationService : IAuthenticaionService
    {
        readonly IUserRepository userRepository;

        public AuthenticationService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }
        public async Task<Domain.Entities.UserAggregate.User> Authenticate(GoogleJsonWebSignature.Payload payload)
        {
            await Task.Delay(1);
            return this.FindUserOrAdd(payload).Result;
        }

        public async Task<Domain.Entities.UserAggregate.User> ChangePassword(ChangePassDTO payload)
        {
            var user = await userRepository.GetAsync(u => u.Email == payload.Email);

            if(user != null)
            {
                var oldPassword = user.Password;
                if(payload.OldPassword == oldPassword)
                {
                    user.Password = payload.NewPassword;
                }

            }

            return user;
        }

        private async Task<Domain.Entities.UserAggregate.User> FindUserOrAdd(GoogleJsonWebSignature.Payload payload)
        {
            var user = await userRepository.GetAsync(u => u.Email == payload.Email);

            if(user == null)
            {
                user = new Domain.Entities.UserAggregate.User(payload.Email, payload.Name, payload.Email);
                

                await userRepository.AddAsync(user);
            }

            return user;
        }


    }
}
