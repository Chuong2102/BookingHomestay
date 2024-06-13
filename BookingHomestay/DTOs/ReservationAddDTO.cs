using BookingHomestay.Domain.Entities.Room;

namespace BookingHomestay.API.DTOs
{
    public class ReservationAddDTO
    {
        public string? Username { get; set; }
        public int? RoomID { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal? Price { get; set; }
        public decimal? Total { get; set; }
        public int CreatedDateTime { get; set; }
    }
}
