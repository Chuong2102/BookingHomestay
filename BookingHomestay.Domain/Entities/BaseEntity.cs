using System.ComponentModel.DataAnnotations;

namespace BookingHomestay.Domain.Entities
{
    public class BaseEntity
    {
        [Key]
        public int ID { get; set; }
    }
}
