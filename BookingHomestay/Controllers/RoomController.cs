using AutoMapper;
using BookingHomestay.API.DTOs;
using BookingHomestay.API.Services.Room;
using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.RoomAggregate;
using BookingHomestay.Infrastructure.Repositories;
using BookingHomestay.Infrastructure.Repositories.Photo;
using BookingHomestay.Infrastructure.Repositories.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingHomestay.API.Controllers
{
    [Route("api/v1/")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        IRoomService roomService;
        IPhotoRepository photoRepository;
        IMapper mapper;
        IUserRepository userRepository;
        IRoomRepository roomRepository;

        public RoomController(IRoomService roomService, IMapper _mapper,
            IPhotoRepository _photoRepository, IUserRepository userRepository, IRoomRepository roomRepository)
        {
            this.roomService = roomService;
            mapper = _mapper;
            this.photoRepository = _photoRepository;
            this.userRepository = userRepository;
            this.roomRepository = roomRepository;
        }

        [HttpPost]
        [Route("AddReservation")]
        public async Task<int> AddReservation(ReservationAddDTO payload)
        {
            var user = await userRepository.GetAsync(u => u.Email == payload.Username);
            var room = await roomRepository.GetAsync(r => r.ID == payload.RoomID);

            try
            {
                await roomService.AddReservation(new Reservation
                {
                    UserID = user.ID,
                    Room = room,
                    StartDate = payload.StartDate,
                    EndDate = payload.EndDate,
                    Price = payload.Price,
                    Total = payload.Total

                });

                return 1;
            }
            catch(Exception ex)
            {
                return -1;
            }
        }

        [HttpPost]
        [Route("Rooms")]
        public async Task<List<Room>> GetAllRooms()
        {
            return await roomService.GetAllRoomsAsync();
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("SearchRooms")]
        public async Task<List<GetRoomsDTO>> SearchRooms([FromBody] RoomSearchDTO payload)
        {
            var result = new List<GetRoomsDTO>();
            var rooms = await roomService.GetAllRoomsAsync(payload);

            foreach(var room in rooms)
            {
                var tempRoom = mapper.Map<GetRoomsDTO>(room);
                

                var photos = new List<string>();
                
                // Get photo paths
                var paths = await photoRepository.GetAllPathsByRoomID(room.ID);
                //foreach(var path in paths)
                //{
                //    var fixPath = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, path);
                //    photos.Add(fixPath);
                //}

                tempRoom.PhotoPaths = paths;

                result.Add(tempRoom);
            }

            return result;
        }

        [Route("Room")]
        [HttpGet]
        public async Task<GetRoomsDTO> GetRoomByID(int id)
        {
            var result = new GetRoomsDTO();

            var room = await roomService.GetRoomAsync(id);
            var paths = await photoRepository.GetAllPathsByRoomID(room.ID);

            var tempRoom = mapper.Map<GetRoomsDTO>(room);
            tempRoom.PhotoPaths = paths;

            result = tempRoom;

            return result;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("AllCategories")]
        public async Task<List<Category>> GetCategoriesAsync()
        {
            return await roomService.GetAllCategoriesAsync();
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("AllCommentsByRoom")]
        public async Task<List<Comment>> GetCommentsByRoomAsync([FromBody] CommentGetByRoomDTO payload)
        {
            return await roomService.GetAllCommentByRoom(payload.RoomID);
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("AllCommentsByRoom")]
        public async Task<List<Comment>> GetCommentsByRoomAsync(int id)
        {
            return await roomService.GetAllCommentByRoom(id);
        }
    }
}
