namespace BookingHomestay.Domain.Entities.RoomAggregate
{
    public class Comment : BaseEntity
    {
        public int? UserID { get; set; }
        public string? CommentIDTo { get; set; }
        public string? CommentText { get; set; }
        = string.Empty;
        public DateTime? CreatedDateTime { get; set; }
        public DateTime? EditedDateTime { get; set;}
        public Room.Room? Room { get; set; }
    }
}
