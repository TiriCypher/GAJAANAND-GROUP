import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-[#0A1F44]
      "
    >
      <div className="text-center">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
          text-4xl
          md:text-6xl
          font-bold
          text-white
          "
        >
          GAJAANAND
        </motion.h1>

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "120px",
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
          h-[2px]
          bg-[#D4AF6A]
          mx-auto
          mt-4
          "
        />

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="
          mt-4
          text-[#D4AF6A]
          tracking-[4px]
          text-sm
          "
        >
          BUILDING TRUST.
          CREATING VALUE.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;