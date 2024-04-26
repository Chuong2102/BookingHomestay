using System.Drawing;
using NetTopologySuite.Geometries;

namespace BookingHomestay.Domain.Entities.RoomAggregate
{
    public class Location : ValueObject // Value object
    {
        private Location() { }
        public Location(string? placeID, double latitude, double longitude)
        {
            PlaceID = placeID;
            Latitude = latitude;
            Longitude = longitude;

            var gf = NetTopologySuite.NtsGeometryServices.Instance.CreateGeometryFactory(4326);
            var point = gf.CreatePoint(new NetTopologySuite.Geometries.Coordinate(latitude, latitude));
            this.LocationPoint = point;
        }

        public string? PlaceID { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
        public NetTopologySuite.Geometries.Point? LocationPoint { get; set; }
    }
}
