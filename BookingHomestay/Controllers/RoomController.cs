﻿using BookingHomestay.API.Services;
using BookingHomestay.Domain.Entities.Room;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingHomestay.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        IRoomService roomService;

        public RoomController(IRoomService roomService)
        {
            this.roomService = roomService;
        }

        [HttpPost]
        public async Task<List<Room>> GetAllRooms()
        {
            return await roomService.GetAllRoomsAsync();
        }
    }
}