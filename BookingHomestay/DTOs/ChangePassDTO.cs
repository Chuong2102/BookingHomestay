namespace BookingHomestay.API.DTOs
{
    public class ChangePassDTO
    {
        public string Email { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }

    }
}
