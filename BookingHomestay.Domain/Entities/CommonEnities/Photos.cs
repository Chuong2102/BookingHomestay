namespace BookingHomestay.Domain.Entities.CommonEnities
{
    public class Photos : BaseEntity
    {
        public Photos() { }
        public Room.Room? Room { get; set; }
        public string? Path { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? CreatedTime { get; set; }
    }
}
