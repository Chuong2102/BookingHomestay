namespace BookingHomestay.Domain.Entities.UserAggregate
{
    public class User : BaseEntity, IAggregateRoot
    {
        public User() { }

        public User(string userName, string fullName, string email)
        {
            UserName = userName;
            FullName = fullName;
            Email = email;
            RegistrationDate = DateTime.UtcNow;
        }

        public User(string userName, string fullName, string email,DateTime dateTime, string phoneNumber)
        {
            UserName = userName;
            FullName = fullName;
            Email = email;
            RegistrationDate = DateTime.UtcNow;
            PhoneNumber = phoneNumber;
        }

        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public bool? EmailConfirmed { get; set; }
        public DateTime RegistrationDate { get; set; }
        public string? PhoneNumber { get; set; }
        public bool? PhoneNumberConfirmed { get; set; }
        public string? ProfileImage { get; set; }
        public bool? LockoutEnalbe { get; set; }
        public bool? SuperHost { get; set; } = false;
        public string? Password { get; set; }
        public string? PasswordHash { get; set; }
        public Role? Role { get; set; }
    }
}
