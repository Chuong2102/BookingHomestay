using BookingHomestay.Domain.Entities.CommonEnities;
using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace BookingHomestay.Infrastructure.Repositories.Photo
{
    public class PhotoRepository : RepositoryBase<Domain.Entities.CommonEnities.Photo>, IPhotoRepository
    {
        BookingHomestayDbContext dbcontext;
        public static IWebHostEnvironment? environment;
        public PhotoRepository(BookingHomestayDbContext context) : base(context)
        {
            this.dbcontext = context;
        }

        public List<IFormFile> Base64ToPhotos(List<string> listBase64String, string nameFolder)
        {
            DirectoryInfo directoryInfo;
            List<IFormFile> images = new List<IFormFile>();
            
            string path = environment.ContentRootPath + "\\Images\\";

            if (!Directory.Exists(path))
            {
                directoryInfo = Directory.CreateDirectory(path);
            }

            int i = 0;
            //
            foreach (var s in listBase64String)
            {
                var contentTypeTemp = s.Split(",")[0];
                var encode = s.Split(",")[1];

                var contentTypeTemp_1 = contentTypeTemp.Split(":")[1];
                var contentType = contentTypeTemp_1.Split(";")[0];

                //File.WriteAllBytes(path + i.ToString(), Convert.FromBase64String(encode));

                var bytes = Convert.FromBase64String(encode);
                MemoryStream stream = new MemoryStream(bytes);

                var file = new FormFile(stream, 0, stream.Length, i.ToString(), i.ToString())
                {
                    Headers = new HeaderDictionary(),
                    ContentType = contentType
                };

                images.Add(file);


            }

            return images;
        }

        public string CreateFolder(string folderName)
        {
            string path = environment.ContentRootPath + "\\Images\\" + "\\" + folderName + "\\";

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            return path;
        }

        public Task DeleteByRoomID(int roomID)
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetAllBase64ByRommID(int roomID)
        {
            throw new NotImplementedException();
        }

        public Task<List<Domain.Entities.CommonEnities.Photo>> GetAllByRoomID(int roomID)
        {
            throw new NotImplementedException();
        }

        public Task<List<string>> GetAllPathByRommID(int roomID)
        {
            throw new NotImplementedException();
        }

        public async Task<List<string>> GetAllPathsByRoomID(int roomID)
        {
            var room = await dbcontext.Rooms.FirstOrDefaultAsync(r => r.ID == roomID);
            var imagesPaths = await dbcontext.Photos.Where(c => c.Room.Equals(room)).Select(p => p.Path).ToListAsync();

            return imagesPaths;
        }

        public string GetBase64String(string path)
        {
            var encode = path.Split(",")[1];

            return encode;
        }

        public string GetExtensionFromBase64(string path)
        {
            var contentType = path.Split(",")[0];
            var encode = path.Split(",")[1];
            string extension = "";

            switch (contentType)
            {
                case "data:image/jpeg;base64":
                    extension = "jpeg";
                    break;
                case "data:image/png;base64":
                    extension = "png";
                    break;
                default://should write cases for more images types
                    extension = "jpg";
                    break;
            }

            return extension;
        }

        public string GetExtesionFromFilePath(string filePath)
        {
            var name = filePath.Split('.');

            string fileExt = name[1];

            return fileExt;
        }

        public List<string> PhotosToBase64(List<string> paths)
        {
            List<string> result = new List<string>();

            foreach (var path in paths)
            {
                byte[] imageArray = System.IO.File.ReadAllBytes(path);
                // decode Base64
                string base64ImageRepresentation = SetExtensionToBase64(GetExtesionFromFilePath(path)) + "," + Convert.ToBase64String(imageArray);

                result.Add(base64ImageRepresentation);
            }

            return result;
        }

        public async Task<List<string>> Save(List<string> listBase64String, string folderName, Room room)
        {
            List<string> listPath = new List<string>();

            //string example = "data:image/png;base64,abcdefghijklmnopqrstuvwxyz0123456789";
            int i = 0;
            foreach (string s in listBase64String)
            {
                // Create new Folder, name folder is AddressLine1
                string fileName = i.ToString() + "." + GetExtensionFromBase64(s);
                string filePath = CreateFolder(folderName) + fileName;
                // Write file photo to Folder
                await File.WriteAllBytesAsync(filePath, Convert.FromBase64String(GetBase64String(s)));
                // Save path into database
                //await
                //_dapperContext.Photos.CreateAsync(new Infrastrure.Entities.Photo
                //{
                //    Path = filePath,
                //    Title = folderName,
                //    Description = folderName,
                //    Room = room,
                //    Base64String = s,
                //    CreatedTime = DateTime.Now
                //});

                await dbcontext.Photos.AddAsync(new Domain.Entities.CommonEnities.Photo
                {
                    CreatedTime = DateTime.Now,
                    Room = room,
                    Path = fileName,
                    Title = fileName,
                    Description = "Photo of room: " + room.Title
                });

                i++;

                //
                listPath.Add(filePath);
            }

            return listPath;
        }

        public string SetExtensionToBase64(string extension)
        {
            string result = "";

            switch (extension)
            {
                case "jpeg":
                    result = "data:image/jpeg;base64";
                    break;
                case "png":
                    result = "data:image/png;base64";
                    break;
                default://should write cases for more images types
                    result = "data:image/jpg;base64";
                    break;
            }

            return result;
        }
    }
}
