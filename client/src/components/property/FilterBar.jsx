import { useState } from "react";

function FilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-5 grid grid-cols-1 md:grid-cols-5 gap-4">
      <input
        name="city"
        placeholder="City"
        onChange={handleChange}
        className="border p-2 rounded-lg"
      />

      <select name="type" onChange={handleChange} className="border p-2 rounded-lg">
        <option value="">Type</option>
        <option value="villa">Villa</option>
        <option value="apartment">Apartment</option>
      </select>

      <input
        name="minPrice"
        placeholder="Min Price"
        onChange={handleChange}
        className="border p-2 rounded-lg"
      />

      <input
        name="maxPrice"
        placeholder="Max Price"
        onChange={handleChange}
        className="border p-2 rounded-lg"
      />

      <button
        onClick={applyFilters}
        className="bg-[#D4AF6A] text-white rounded-lg"
      >
        Apply
      </button>

      <button
        onClick={() => {
          setFilters({
            city: "",
            type: "",
            minPrice: "",
            maxPrice: "",
            bedrooms: "",
          });
          onFilter({});
        }}
        className="bg-gray-200 rounded-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default FilterBar;