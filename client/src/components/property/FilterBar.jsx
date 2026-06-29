import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaHome,
  FaRupeeSign,
  FaBed,
  FaSearch,
  FaRedo,
} from "react-icons/fa";

function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  const resetFilters = () => {
    const reset = {
      city: "",
      type: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
    };

    setFilters(reset);
    onFilter({});
  };

  return (
    <div className="relative z-20">
      <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-gray-100">

        {/* TOP TITLE */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-[#0A1F44]">
              Find Your Dream Property
            </h3>
            <p className="text-gray-500 text-sm">
              Search luxury homes, villas and apartments
            </p>
          </div>

          <div className="hidden md:flex h-12 w-12 rounded-2xl bg-[#D4AF6A]/10 items-center justify-center">
            <FaSearch className="text-[#D4AF6A] text-xl" />
          </div>
        </div>

        {/* FILTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

          {/* CITY */}
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-4 top-4 text-[#D4AF6A]" />

            <input
              type="text"
              name="city"
              value={filters.city}
              onChange={handleChange}
              placeholder="Enter City"
              className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4AF6A] outline-none transition"
            />
          </div>

          {/* TYPE */}
          <div className="relative">
            <FaHome className="absolute left-4 top-4 text-[#D4AF6A]" />

            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4AF6A] outline-none appearance-none"
            >
              <option value="">Property Type</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          {/* MIN PRICE */}
          <div className="relative">
            <FaRupeeSign className="absolute left-4 top-4 text-[#D4AF6A]" />

            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min Price"
              className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4AF6A] outline-none"
            />
          </div>

          {/* MAX PRICE */}
          <div className="relative">
            <FaRupeeSign className="absolute left-4 top-4 text-[#D4AF6A]" />

            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max Price"
              className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4AF6A] outline-none"
            />
          </div>

          {/* BEDROOMS */}
          <div className="relative">
            <FaBed className="absolute left-4 top-4 text-[#D4AF6A]" />

            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-[#D4AF6A] outline-none appearance-none"
            >
              <option value="">Bedrooms</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
              <option value="5">5+ BHK</option>
            </select>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <button
            onClick={applyFilters}
            className="flex-1 bg-gradient-to-r from-[#D4AF6A] to-[#c59d4c]
            text-white py-4 rounded-2xl font-semibold text-lg
            shadow-lg hover:shadow-2xl hover:scale-[1.02]
            transition duration-300 flex items-center justify-center gap-3"
          >
            <FaSearch />
            Search Properties
          </button>

          <button
            onClick={resetFilters}
            className="px-8 py-4 rounded-2xl border border-gray-300
            hover:bg-gray-100 transition flex items-center
            justify-center gap-3 font-medium"
          >
            <FaRedo />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;