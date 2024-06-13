namespace BookingHomestay.Domain.Entities.OrderAggregate
{
    public class Merchant: BaseEntity
    {
        public Merchant() { }
        public string? MerchantName { get;set; }
        public string? MerchantWeblink { get;set;}
        public string? MerchantIpnUrl { get;set; }
        public string? MerchantReturnUrl { get;set;}
        public string? SecretKey { get;set;}
        public bool? SecretSecret { get;set;}
        public int? UserID { get;set; }
        public int? LastUpdatedByUserID { get;set; }
        public DateTime? CreatedAt { get; set; } = DateTime.Now;
        public DateTime? UpdatedAt { get;set;}
    }
}
