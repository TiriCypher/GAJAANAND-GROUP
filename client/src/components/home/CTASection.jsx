import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { COMPANY } from "../../utils/constants";

function CTASection() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/cta.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0A1F44]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          READY TO FIND YOUR
          <br />
          DREAM PROPERTY?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Discover exclusive opportunities with{" "}
          <span className="text-[#D4AF6A] font-semibold">
            {COMPANY.name}
          </span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/properties">
            <Button>Browse Properties</Button>
          </Link>

          <Link to="/contact">
            <Button className="bg-[#D4AF6A] text-[#0A1F44] hover:bg-[#c59d55]">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;