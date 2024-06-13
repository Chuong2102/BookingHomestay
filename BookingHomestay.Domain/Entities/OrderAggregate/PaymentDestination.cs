namespace BookingHomestay.Domain.Entities.OrderAggregate
{
    public class PaymentDestination: BaseEntity
    {
        public PaymentDestination() { }
        
        public string? Deslogo { get; set; }
        public string? DesShortName { get; set; }
        public string? DesName { get; set; }
        public int? DesSortIndex { get; set; }
        //
        public int? ParentID { get; set; }
        public bool? IsActive { get; set; }
    }
}
