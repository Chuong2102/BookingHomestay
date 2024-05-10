using BookingHomestay.API.DTOs;
using BookingHomestay.Domain.Entities.UserAggregate;

namespace BookingHomestay.API.Services.Authentication
{
    public interface IAuthenticaionService
    {
        Task<Domain.Entities.UserAggregate.User> Authenticate(Google.Apis.Auth.GoogleJsonWebSignature.Payload payload);
        Task<Domain.Entities.UserAggregate.User> ChangePassword(ChangePassDTO payload);

    }
}
