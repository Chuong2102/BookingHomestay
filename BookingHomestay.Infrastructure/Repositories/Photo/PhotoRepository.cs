using BookingHomestay.Domain.Entities.CommonEnities;
using BookingHomestay.Infrastructure.Context;

namespace BookingHomestay.Infrastructure.Repositories.Photo
{
    public class PhotoRepository : RepositoryBase<Photos>, IPhotoRepository
    {
        BookingHomestayDbContext dbcontext;
        public PhotoRepository(BookingHomestayDbContext context) : base(context)
        {
            this.dbcontext = context;
        }

        public Task DeleteByRoomID(int roomID)
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetAllBase64ByRommID(int roomID)
        {
            throw new NotImplementedException();
        }

        public Task<List<Photos>> GetAllByRoomID(int roomID)
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetAllPathByRommID(int roomID)
        {
            throw new NotImplementedException();
        }
    }
}
