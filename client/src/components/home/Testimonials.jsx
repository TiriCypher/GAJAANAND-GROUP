import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Mehta",
    image: "/images/user1.png",
    review:
      "Gajaanand Group helped me find the perfect luxury apartment. Their service was exceptional and transparent.",
  },
  {
    name: "Priya Shah",
    image: "/images/user2.png",
    review:
      "Highly professional team! They guided me through every step of my investment journey.",
  },
  {
    name: "Amit Patel",
    image: "/images/user3.png",
    review:
      "Best real estate experience I've ever had. Premium properties and honest advice.",
  },
  {
    name: "Neha Desai",
    image: "/images/user4.png",
    review:
      "Their support even after purchase is amazing. Truly customer-first approach!",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#0A1F44] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.6 }}
              className="absolute max-w-2xl bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg"
            >
              {/* Profile */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#D4AF6A]"
                />

                <h3 className="text-xl font-semibold">
                  {testimonials[index].name}
                </h3>

                {/* Stars */}
                <div className="flex text-[#D4AF6A] mt-2 mb-4">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="text-gray-200 italic">
                  "{testimonials[index].review}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === i ? "bg-[#D4AF6A]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;