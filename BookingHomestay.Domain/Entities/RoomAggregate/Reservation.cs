namespace BookingHomestay.Domain.Entities.RoomAggregate
{
    public class Reservation : BaseEntity
    {
        public Reservation() { }
        public int? UserID { get; set; }
        public Room.Room Room { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public decimal? Price { get; set; }
        public decimal? Total { get; set;}
        public int CreatedDateTime { get; set; }
        public int? UpdatedDateTime { get; set; }
        public DateTime? CancelDate { get; set; }
        public decimal? RefundPaid { get; set; }

    }
}
