namespace BookingHomestay.API.DTOs
{
    public class RoomAddDTO
    {
        public int UserID { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public double Area { get; set; }
        public string AddressLine1 { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string? PlaceID { get; set; }
    }
}
