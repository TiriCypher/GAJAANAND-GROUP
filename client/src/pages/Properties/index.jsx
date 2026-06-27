import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import PropertyCard from "../../components/property/PropertyCard";
import FilterBar from "../../components/property/FilterBar";
import { getProperties } from "../../services/property.service";
import { motion } from "framer-motion";

function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async (filters = {}) => {
    try {
      setLoading(true);

      const res = await getProperties(filters);

      setProperties(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <MainLayout>
      {/* HERO */}
      <div className="bg-[#0A1F44] text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Explore Properties</h1>
        <p className="mt-2 text-gray-300">
          Find your perfect investment opportunity
        </p>
      </div>

      {/* FILTER */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <FilterBar onFilter={fetchProperties} />
      </div>

      {/* LIST */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-80 bg-gray-200 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : properties.length === 0 ? (
          <p className="text-center">No properties found</p>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {properties.map((property) => (
              <motion.div
                key={property._id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
}

export default PropertiesPage;