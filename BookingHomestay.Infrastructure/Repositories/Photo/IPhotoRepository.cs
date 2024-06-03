using BookingHomestay.Domain.Entities.CommonEnities;
using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Interfaces;

namespace BookingHomestay.Infrastructure.Repositories.Photo
{
    public interface IPhotoRepository : IAsyncRepository<Domain.Entities.CommonEnities.Photo>
    {
        Task<List<Domain.Entities.CommonEnities.Photo>> GetAllByRoomID(int roomID);
        Task<List<string>> GetAllPathByRommID(int roomID);
        Task<List<string>> GetAllBase64ByRommID(int roomID);
        Task DeleteByRoomID(int roomID);
        Task<List<string>> GetAllPathsByRoomID(int roomID);
        string GetBase64String(string path);
        string CreateFolder(string folderName);
        string GetExtensionFromBase64(string path);
        string SetExtensionToBase64(string extension);
        string GetExtesionFromFilePath(string filePath);
        List<string> PhotosToBase64(List<string> paths);
        List<IFormFile> Base64ToPhotos(List<string> listBase64String, string nameFolder);
        Task<List<string>> Save(List<string> listBase64String, string folderName, Room room);
    }
}
