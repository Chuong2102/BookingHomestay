using BookingHomestay.API.DTOs;
using BookingHomestay.API.Services.Room;
using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.RoomAggregate;
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

        public RoomController(IRoomService roomService)
        {
            this.roomService = roomService;
        }

        [Authorize]
        [HttpPost]
        [Route("Rooms")]
        public async Task<List<Room>> GetAllRooms()
        {
            return await roomService.GetAllRoomsAsync();
        }

        [Authorize]
        [HttpPost]
        [Route("SearchRooms")]
        public async Task<List<Room>> SearchRooms([FromBody] RoomSearchDTO payload)
        {
            return await roomService.GetAllRoomsAsync(payload);
        }

        [Authorize]
        [Route("Room")]
        [HttpGet]
        public async Task<Room> GetRoomByID(int id)
        {
            return await roomService.GetRoomAsync(id);
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("AllCategories")]
        public async Task<List<Category>> GetCategoriesAsync()
        {
            return await roomService.GetAllCategoriesAsync();
        }
    }
}
