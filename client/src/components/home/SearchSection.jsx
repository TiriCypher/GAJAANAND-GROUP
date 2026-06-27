import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../common/Button";

function SearchSection() {
  const navigate = useNavigate();

  const [purpose, setPurpose] = useState("sale");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (purpose) params.append("purpose", purpose);
    if (type) params.append("type", type);
    if (city) params.append("city", city);

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative z-20 -mt-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-[#D4AF6A] text-sm mb-2">
            Find Your Dream Property
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
            Search Luxury Properties
          </h2>
        </div>

        {/* Search Form */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Purpose */}
          <div>
            <label className="block mb-2 font-semibold text-[#0A1F44]">
              Purpose
            </label>

            <select
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF6A]"
            >
              <option value="sale">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label className="block mb-2 font-semibold text-[#0A1F44]">
              Property Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF6A]"
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="office">Office</option>
              <option value="shop">Shop</option>
              <option value="land">Land</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 font-semibold text-[#0A1F44]">
              City
            </label>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4AF6A]"
            >
              <option value="">All Cities</option>
              <option value="Surat">Surat</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button
              onClick={handleSearch}
              className="w-full bg-[#D4AF6A] hover:bg-[#C89A4B] text-[#0A1F44] font-bold py-3 rounded-xl transition"
            >
              Search Properties
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default SearchSection;