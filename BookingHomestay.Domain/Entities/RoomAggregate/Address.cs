namespace BookingHomestay.Domain.Entities.Room
{
    public class Address : ValueObject // Value Object
    {
        private Address() { }
        public Address(string addressLine1, string? addressLine2, string? postalCare, string city)
        {
            AddressLine1 = addressLine1;
            AddressLine2 = addressLine2;
            PostalCare = postalCare;
            City = city;
        }

        public string? AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string? PostalCare { get; set; }
        public string? City { get; set; }
        
    }
}
