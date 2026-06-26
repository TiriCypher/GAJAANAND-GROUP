import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      "
        >
            {/* Background */}

            <div
                className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#0A1F44]
        via-[#102B5E]
        to-[#0A1F44]
        "
            />

            {/* Overlay */}

            <div
                className="
        absolute
        inset-0
        bg-black/20
        "
            />

            {/* Content */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="
  relative
  z-10
  max-w-6xl
  mx-auto
  px-6
  text-center
  text-white
  "
            >
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    className="
  uppercase
  tracking-[6px]
  text-[#D4AF6A]
  text-sm
  md:text-base
  mb-6
  "
                >
                    Luxury Real Estate & Investments
                </motion.p>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 50
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.2
                    }}
                    className="
  text-5xl
  md:text-7xl
  lg:text-8xl
  font-bold
  leading-tight
  "
                >
                    Building The Future
                    <br />
                    Of Real Estate
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.4
                    }}
                    className="
  mt-8
  text-lg
  md:text-xl
  max-w-3xl
  mx-auto
  text-gray-200
  "
                >
                    Premium residential,
                    commercial and investment
                    opportunities curated by
                    GAJAANAND GROUP.
                </motion.p>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.6
                    }}
                    className="
  mt-10
  flex
  flex-col
  sm:flex-row
  gap-4
  justify-center
  "
                >
                    <button
                        className="
            px-8
            py-4
            bg-[#D4AF6A]
            text-[#0A1F44]
            font-semibold
            rounded-md
            hover:scale-105
            transition
            "
                    >
                        Explore Properties
                    </button>

                    <button
                        className="
            px-8
            py-4
            border
            border-white
            text-white
            rounded-md
            hover:bg-white
            hover:text-[#0A1F44]
            transition
            "
                    >
                        Contact Us
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );

    
}

export default Hero;