using BookingHomestay.Domain.Entities.RoomAggregate;
using NetTopologySuite.Utilities;

namespace BookingHomestay.Domain.Entities.Room
{
    public class Room : BaseEntity, IAggregateRoot
    {
        public Room() { }
        public Room(int userID, string description, string title, decimal price, double area)
        {
            Guard.IsNotNull(userID, nameof(userID));

            UserID = userID;
            Description = description;
            Title = title;
            Price = price;
            Area = area;
        }

        public Room(int roomID, int userID, string description, string title, decimal price, double area)
        {
            Guard.IsNotNull(userID, nameof(userID));
            Guard.IsNotNull(roomID, nameof(roomID));

            ID = roomID;
            UserID = userID;
            Description = description;
            Title = title;
            Price = price;
            Area = area;
        }

        public Room(int roomID, int userID, string description, string title, decimal price, double area, Address address, Location location)
        {
            Guard.IsNotNull(userID, nameof(userID));
            Guard.IsNotNull(roomID, nameof(roomID));

            ID = roomID;
            UserID = userID;
            Description = description;
            Title = title;
            Price = price;
            Area = area;
            Address = address;
            Location = location;
        }

        public int UserID { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public double Area { get; set; }
        public Address? Address { get; set; }
        public Location? Location { get; set; }
        public Province? Province { get; set; }
        public virtual ICollection<Category>? Categories { get; set; }
    }
}
