namespace BookingHomestay.Domain.Entities.RoomAggregate
{
    public class Reservation : BaseEntity
    {
        public int? UserID { get; set; }
        public Room.Room Room { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Price { get; set; }
        public int? Total { get; set;}
        public int CreateDateTime { get; set; }
        public int? UpdateDateTime { get; set; }

    }
}
