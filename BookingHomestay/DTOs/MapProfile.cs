using AutoMapper;
using BookingHomestay.Domain.Entities.Room;

namespace BookingHomestay.API.DTOs
{
    public class MapProfile : Profile
    {
        public MapProfile()
        {
            CreateMap<Room, GetRoomsDTO>();
        }
    }
}
