﻿using BookingHomestay.API.Services.Room;
using BookingHomestay.Domain.Entities.Room;
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

        [HttpPost]
        [Route("Rooms")]
        public async Task<List<Room>> GetAllRooms()
        {
            return await roomService.GetAllRoomsAsync();
        }
        [Route("Room")]
        [HttpGet]
        public async Task<Room> GetRoomByID(int id)
        {
            return await roomService.GetRoomAsync(id);
        }
    }
}
