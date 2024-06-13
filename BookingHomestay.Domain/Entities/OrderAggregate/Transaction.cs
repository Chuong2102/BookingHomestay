namespace BookingHomestay.Domain.Entities.OrderAggregate
{
    public class Transaction: BaseEntity
    {
        public Transaction() { }

        public string? TranMessage { get; set; }
        public string? TranPayload { get; set; }
        public string? TranStatus { get; set; }
        public decimal? TranAmount { get; set; }
        public DateTime? TranDate { get; set; }
        public Payment? Payment { get; set; }
        public int? RoomID { get; set; }
        public int? ReservationID { get; set; }
    }
}
