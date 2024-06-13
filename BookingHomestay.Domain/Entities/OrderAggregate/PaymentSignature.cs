namespace BookingHomestay.Domain.Entities.OrderAggregate
{
    public class PaymentSignature: BaseEntity
    {
        public PaymentSignature() { }

        public string? SignValue { get; set; }
        public string? SignAglo { get; set; }
        public DateTime? SignDate { get; set; } = DateTime.Now;
        public string? SignOwn { get; set; }
        public Payment? Payment { get; set; }

    }
}
