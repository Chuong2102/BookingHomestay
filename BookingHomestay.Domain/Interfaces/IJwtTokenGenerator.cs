namespace BookingHomestay.Domain.Interfaces
{
    public interface IJwtTokenGenerator
    {
        string GenerateToken(int UserID, string email, string fullName, string password);
    }
}
