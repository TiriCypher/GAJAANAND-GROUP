import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <section
      className="
      py-32
      bg-[#071B3B]
      relative
      overflow-hidden
      "
    >

      {/* Blur Circle */}

      <div
        className="
        absolute
        top-0
        right-0
        h-96
        w-96
        rounded-full
        bg-[#D4AF6A]/10
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        h-80
        w-80
        rounded-full
        bg-white/5
        blur-3xl
        "
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
          text-[#D4AF6A]
          uppercase
          tracking-[5px]
          "
        >
          Start Your Journey
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
          mt-6
          text-4xl
          md:text-6xl
          font-black
          text-white
          leading-tight
          "
        >
          Let's Build
          <br />
          Your Future Together
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="
          mt-8
          text-lg
          text-gray-300
          leading-9
          max-w-3xl
          mx-auto
          "
        >
          Whether you are buying, selling or investing,
          GAJAANAND GROUP is committed to helping you
          achieve your real estate goals with confidence.
        </motion.p>

        <div
          className="
          mt-12
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-5
          "
        >

          <Link
            to="/properties"
            className="
            px-8
            py-5
            rounded-2xl
            bg-[#D4AF6A]
            text-[#071B3B]
            font-bold
            flex
            items-center
            justify-center
            gap-3
            hover:scale-105
            transition
            duration-300
            "
          >
            Explore Properties
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/contact"
            className="
            px-8
            py-5
            rounded-2xl
            border
            border-white
            text-white
            font-bold
            hover:bg-white
            hover:text-[#071B3B]
            hover:scale-105
            transition
            duration-300
            "
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTASection;