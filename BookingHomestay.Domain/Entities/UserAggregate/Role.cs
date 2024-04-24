namespace BookingHomestay.Domain.Entities.UserAggregate
{
    public class Role : BaseEntity
    {
        public Role() { }

        public string RoleName { get; set; }
        public string Description { get; set; }

    }
}
