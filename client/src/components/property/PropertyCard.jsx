import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

function PropertyCard({ property }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={
            property.images?.[0]?.url ||
            "https://placehold.co/600x400?text=No+Image"
          }
          alt={property.title}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {property.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-[#D4AF6A] px-4 py-1 text-sm font-semibold text-[#0A1F44]">
            Featured
          </span>
        )}

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110">
          <FaHeart className="text-red-500" />
        </button>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-bold text-[#0A1F44]">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500">
          <FaMapMarkerAlt />
          <span>
            {property.location.city}, {property.location.state}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaBed />
            {property.details.bedrooms} Beds
          </div>

          <div className="flex items-center gap-2">
            <FaBath />
            {property.details.bathrooms} Baths
          </div>

          <div className="flex items-center gap-2">
            <FaRulerCombined />
            {property.details.area} sq.ft
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <p className="text-3xl font-bold text-[#D4AF6A]">
            ₹ {property.price.toLocaleString("en-IN")}
          </p>

          <button className="rounded-lg bg-[#0A1F44] px-5 py-3 text-white transition hover:bg-[#D4AF6A] hover:text-[#0A1F44]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;