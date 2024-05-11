﻿using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.RoomAggregate;
using BookingHomestay.Domain.Interfaces;

namespace BookingHomestay.Infrastructure.Repositories
{
    public interface IRoomRepository : IAsyncRepository<BookingHomestay.Domain.Entities.Room.Room>
    {
        Task<List<Category>> GetAllCategories();
    }
}
