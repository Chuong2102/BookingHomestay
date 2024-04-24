using BookingHomestay.Domain.Entities.CommonEnities;
using BookingHomestay.Domain.Interfaces;

namespace BookingHomestay.Infrastructure.Repositories.Photo
{
    public interface IPhotoRepository : IAsyncRepository<Domain.Entities.CommonEnities.Photo>
    {
        Task<List<Domain.Entities.CommonEnities.Photo>> GetAllByRoomID(int roomID);
        Task<List<string>> GetAllPathByRommID(int roomID);
        Task<List<string>> GetAllBase64ByRommID(int roomID);
        Task DeleteByRoomID(int roomID);
    }
}
