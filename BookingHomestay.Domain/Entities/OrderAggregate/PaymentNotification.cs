namespace BookingHomestay.Domain.Entities.OrderAggregate
{
    public class PaymentNotification: BaseEntity
    {
        public PaymentNotification() { }

        public string? PaymentRefID { get; set; }
        public string? NotiAmount { get; set; }
        public DateTime? NotiDate { get; set;}
        public string? NotiContent { get; set; }
        public string? NotiMessege { get; set; }
        public string? NotiSignature { get; set; }
        public Payment? Payment { get; set; }
        public Merchant? Merchant { get; set; }
        public string? NotiStatus { get; set; }
        public DateTime? NotiResDate { get; set;}

    }
}
