namespace BookingHomestay.Domain.Entities.RoomAggregate
{
    public class Category : BaseEntity
    {
        public Category() { }

        public Category(string label, string description, string name)
        {
            this.Label = label;
            this.Description = description;
            this.Name = name;
        }

        public string Label { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Room.Room> Rooms { get; set; }

    }
}
