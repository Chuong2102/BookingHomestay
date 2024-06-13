namespace BookingHomestay.Domain.Entities.OrderAggregate
{
    public class Payment: BaseEntity, IAggregateRoot
    {
        public Payment() { }
        public string? PaymentContent { get; set; }
        public string? PaymentCurrency { get; set; }
        //
        public string? PaymentRefID { get; set; }
        public decimal? RequiredAmount { get; set; }
        public DateTime? PaymentDate { get; set; }
        public DateTime? ExpireDate { get; set; }
        public string? PaymentLanguages { get; set; }
        //
        public Merchant? Merchant { get; set; }
        //
        public PaymentDestination? PaymentDesination { get; set; }
        public decimal? PaidAmount { get; set; }
        public string? PaymentStatus { get; set; }
        public string? PaymentLastMessage { get; set; }

    }
}
