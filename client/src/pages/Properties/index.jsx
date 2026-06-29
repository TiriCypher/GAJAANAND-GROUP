import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import PropertyCard from "../../components/property/PropertyCard";
import FilterBar from "../../components/property/FilterBar";
import { getProperties } from "../../services/property.service";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHome,
  FaMapMarkerAlt,
} from "react-icons/fa";

function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async (filters = {}) => {
    try {
      setLoading(true);

      const res = await getProperties(filters);

      setProperties(
        res?.data?.properties || []
      );
    } catch (err) {
      console.error(err);
      setProperties([]);
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
      <section className="relative h-[550px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">

            <p className="text-[#D4AF6A] uppercase tracking-[5px] mb-4">
              Premium Real Estate
            </p>

            <h1 className="text-6xl font-bold mb-6">
              Discover Luxury Properties
            </h1>

            <p className="text-xl text-gray-200">
              Exclusive villas, apartments and investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <FilterBar onFilter={fetchProperties} />
      </div>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <FaHome className="mx-auto text-4xl text-[#D4AF6A]" />
            <h3 className="text-3xl font-bold mt-4">
              {properties.length}+
            </h3>
            <p className="text-gray-500">
              Properties
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <FaBuilding className="mx-auto text-4xl text-[#D4AF6A]" />
            <h3 className="text-3xl font-bold mt-4">
              Luxury
            </h3>
            <p className="text-gray-500">
              Premium Projects
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <FaMapMarkerAlt className="mx-auto text-4xl text-[#D4AF6A]" />
            <h3 className="text-3xl font-bold mt-4">
              Multiple Cities
            </h3>
            <p className="text-gray-500">
              Prime Locations
            </p>
          </div>

        </div>
      </section>

      {/* PROPERTIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-[#D4AF6A] uppercase tracking-widest">
                Collection
              </p>

              <h2 className="text-5xl font-bold text-[#0A1F44]">
                Featured Properties
              </h2>
            </div>

            <p className="text-gray-500">
              {properties.length} Results Found
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-96 rounded-3xl bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          ) : properties.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-xl p-16 text-center">
              <h2 className="text-3xl font-bold text-[#0A1F44]">
                No Properties Found
              </h2>

              <p className="text-gray-500 mt-3">
                Try changing your filters.
              </p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {properties.map((property) => (
                <motion.div
                  key={property._id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 40,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

    </MainLayout>
  );
}

export default PropertiesPage;