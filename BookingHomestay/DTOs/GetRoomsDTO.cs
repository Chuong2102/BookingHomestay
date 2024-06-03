using BookingHomestay.Domain.Entities.Room;
using BookingHomestay.Domain.Entities.RoomAggregate;

namespace BookingHomestay.API.DTOs
{
    public class GetRoomsDTO
    {
        public int ID { get; set; }
        public int UserID { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public double Area { get; set; }
        public Address? Address { get; set; }
        public Location? Location { get; set; }
        public Province? Province { get; set; }
        public List<string>? PhotoPaths { get; set; }
    }
}
