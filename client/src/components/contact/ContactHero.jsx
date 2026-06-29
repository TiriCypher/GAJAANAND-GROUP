import hero from "../../assets/contact/contact-hero.png";
import { motion } from "framer-motion";

function ContactHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <img
        src={hero}
        alt=""
        className="
        absolute inset-0
        w-full
        h-full
        object-cover
        scale-110
        "
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071B3B] via-black/40 to-black/40" />

      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >

            <p className="text-[#D4AF6A] tracking-[8px] uppercase mb-8">
              Contact GAJAANAND GROUP
            </p>

            <h1 className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              text-white
              leading-tight
            ">
              Let's Build
              <br />
              Your Legacy
            </h1>

            <p className="
              mt-10
              text-gray-300
              text-xl
              max-w-2xl
              leading-9
            ">
              Luxury properties, trusted investments,
              and expert guidance for every step of your
              real estate journey.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default ContactHero;