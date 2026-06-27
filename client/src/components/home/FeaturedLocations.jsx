import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

import surat from "../../assets/locations/surat.png";
import ahmedabad from "../../assets/locations/ahmedabad.png";
import mumbai from "../../assets/locations/mumbai.png";
import delhi from "../../assets/locations/delhi.png";
import bangalore from "../../assets/locations/bangalore.png";

function FeaturedLocations() {
  const navigate = useNavigate();

  const locations = [
    {
      city: "Surat",
      image: surat,
      properties: 120,
    },
    {
      city: "Ahmedabad",
      image: ahmedabad,
      properties: 95,
    },
    {
      city: "Mumbai",
      image: mumbai,
      properties: 180,
    },
    {
      city: "Delhi",
      image: delhi,
      properties: 140,
    },
    {
      city: "Bangalore",
      image: bangalore,
      properties: 110,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF6A] font-semibold">
            Explore Cities
          </p>

          <h2 className="text-4xl font-bold text-[#0A1F44] mt-4">
            Featured Locations
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Discover premium residential and commercial opportunities
            across India's fastest-growing cities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {locations.map((location, index) => (

            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() =>
                navigate(`/properties?city=${location.city}`)
              }
              className="relative h-[420px] rounded-3xl overflow-hidden cursor-pointer group shadow-xl"
            >

              <img
                src={location.image}
                alt={location.city}
                className="w-full h-full object-cover duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07162d] via-[#07162d70] to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">

                <div className="flex items-center gap-2 text-[#D4AF6A] mb-3">

                  <MapPin size={18} />

                  <span className="uppercase tracking-widest text-sm">
                    Prime Location
                  </span>

                </div>

                <h3 className="text-3xl font-bold mb-2">

                  {location.city}

                </h3>

                <p className="text-gray-300">

                  {location.properties} Premium Properties

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedLocations;