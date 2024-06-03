namespace BookingHomestay.API.DTOs
{
    public class RoomSearchDTO
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string CategoryName { get; set; }
        public int GuestNumber { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
