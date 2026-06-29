import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../../assets/about/about-hero.png";

function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <img
        src={heroImage}
        alt="GAJAANAND GROUP"
        className="
        absolute inset-0
        w-full h-full
        object-cover
        scale-105
        "
      />

      <div className="absolute inset-0 bg-black/75" />

      <div
        className="
        absolute inset-0
        bg-gradient-to-r
        from-[#071B3B]/95
        via-[#071B3B]/75
        to-transparent
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-4xl"
        >

          <div className="
          inline-flex
          items-center
          gap-3
          px-5 py-2
          rounded-full
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          text-[#D4AF6A]
          mb-8
          ">
            LUXURY REAL ESTATE COMPANY
          </div>

          <h1 className="
          text-5xl
          md:text-7xl
          font-black
          text-white
          leading-tight
          ">
            Building
            <span className="text-[#D4AF6A]">
              {" "}Dreams
            </span>
            <br />
            Creating
            <span className="text-[#D4AF6A]">
              {" "}Landmarks
            </span>
          </h1>

          <p className="
          mt-8
          text-xl
          text-gray-300
          max-w-2xl
          leading-9
          ">
            Delivering premium real estate experiences through
            trust, excellence and innovation.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/properties"
              className="
              px-8 py-4
              rounded-2xl
              bg-[#D4AF6A]
              text-[#071B3B]
              font-bold
              flex items-center gap-3
              "
            >
              Explore Properties
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/contact"
              className="
              px-8 py-4
              rounded-2xl
              border border-white
              text-white
              font-semibold
              "
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default AboutHero;