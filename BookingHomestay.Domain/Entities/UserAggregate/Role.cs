namespace BookingHomestay.Domain.Entities.UserAggregate
{
    public class Role : BaseEntity
    {
        public Role() { }

        public Role(string name, string des) { this.RoleName = name; this.Description = des; }
        public string RoleName { get; set; }
        public string Description { get; set; }

    }
}
