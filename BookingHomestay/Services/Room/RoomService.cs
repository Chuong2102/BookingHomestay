﻿using BookingHomestay.API.DTOs;
using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.RoomAggregate;
using BookingHomestay.Domain.Entities.UserAggregate;
using BookingHomestay.Domain.Interfaces;
using BookingHomestay.Infrastructure.Repositories;
using Microsoft.Extensions.Hosting;
using NetTopologySuite.Algorithm;
using NetTopologySuite.Geometries;
using NetTopologySuite.Operation.Distance;
using System.Collections.Generic;

namespace BookingHomestay.API.Services.Room
{
    public class RoomService : IRoomService
    {
        readonly IRoomRepository roomRepository;
        public RoomService(IRoomRepository roomRepository)
        {
            this.roomRepository = roomRepository;
        }

        public async Task<Domain.Entities.Room.Room> GetRoomAsync(int id)
        {
            return await this.roomRepository.GetAsync(r => r.ID == id);
        }

        public async Task<List<Domain.Entities.Room.Room>> GetAllRoomsAsync()
        {
            return await roomRepository.GetAllAsync();
        }

        public async Task<List<Domain.Entities.Room.Room>> GetAllRoomsByLocationAsync(RoomSearchDTO roomSearchDTO)
        {
            var rooms = await roomRepository.GetAllAsync();

            List<Domain.Entities.Room.Room> result = new List<Domain.Entities.Room.Room>();

            foreach (var room in rooms)
            {
                var point = new Point(new Coordinate((double)room.Location.Latitude,(double)room.Location.Longitude));
                var distanceOp = new DistanceOp(point, new Point(roomSearchDTO.Longitude, roomSearchDTO.Latitude));
                var distance = distanceOp.Distance();

                // Tim trong ban kinh 5km
                if (distance < 5)
                    result.Add(room);

            }

            return result;
        }

        public async Task<int> AddRoom(RoomAddDTO roomDTO)
        {
            int result = 1;

            try
            {
                await roomRepository.AddAsync(new Domain.Entities.Room.Room
                {
                    UserID = roomDTO.UserID,
                    Description = roomDTO.Description,
                    Title = roomDTO.Title,
                    Price = roomDTO.Price,
                    Area = roomDTO.Area,
                    Location = new Domain.Entities.RoomAggregate.Location(roomDTO.PlaceID, roomDTO.Latitude, roomDTO.Longitude)
                });

                result = 1;
            }
            catch (Exception ex)
            {
                result = 0;
            }
            return result;
        }

        public Task<List<Category>> GetAllCategoriesAsync()
        {
            return roomRepository.GetAllCategories();
        }

        public async Task<List<Domain.Entities.Room.Room>> GetAllRoomsAsync(RoomSearchDTO payload)
        {
            if (payload.Longitude == 0 && payload.Latitude == 0 & payload.CategoryName == "")
                return await roomRepository.GetAllAsync();

            var category = await roomRepository.GetCategoryByName(payload.CategoryName);

            List<Domain.Entities.Room.Room> rooms = new List<Domain.Entities.Room.Room>();

            if (category != null)
            {
                rooms = await roomRepository.GetAllAsync(r => r.Categories.Contains(category) && r.GuestNumber >= payload.GuestNumber);
            }
            else
            {
                rooms = await roomRepository.GetAllAsync(r => r.GuestNumber >= payload.GuestNumber);
            }

            // Order by location

            List<Domain.Entities.Room.Room> result = new List<Domain.Entities.Room.Room>();

            foreach (var room in rooms)
            {
                var point = new Point(new Coordinate((double)room.Location.Latitude, (double)room.Location.Longitude));
                var distanceOp = new DistanceOp(point, new Point(payload.Latitude, payload.Longitude));
                var distance = distanceOp.Distance();

                // Tim trong ban kinh 5km
                if (distance < 5)
                    result.Add(room);

            }

            return result;
        }

        public Task<List<Comment>> GetAllCommentByRoom(int roomID)
        {
            return roomRepository.GetCommentByRoomID(roomID);
        }

        public async Task<int> AddReservation(Reservation reservation)
        {
            int result = 1;

            try
            {
                await roomRepository.AddReservation(reservation);

                result = 1;
            }
            catch (Exception ex)
            {
                result = 0;
            }
            return result;
        }
    }
}
