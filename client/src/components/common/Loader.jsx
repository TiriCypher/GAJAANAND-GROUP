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
      overflow-hidden
      bg-[#0A1F44]
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#D4AF6A]/10
        blur-[150px]
        animate-pulse
        "
      />

      {/* Floating Gold Particles */}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
          }}
          className="
          absolute
          w-1
          h-1
          rounded-full
          bg-[#D4AF6A]
          "
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Main Content */}

      <div className="relative text-center z-20">
        {/* Top Label */}

        <motion.p
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          uppercase
          tracking-[8px]
          text-[#D4AF6A]
          text-xs
          md:text-sm
          mb-6
          "
        >
          Luxury Real Estate
        </motion.p>

        {/* Logo */}

        <motion.h1
          initial={{
            opacity: 0,
            letterSpacing: "0.8em",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "0.05em",
          }}
          transition={{
            duration: 1.4,
          }}
          className="
          text-white
          text-4xl
          md:text-7xl
          font-bold
          tracking-wide
          "
        >
          GAJAANAND
        </motion.h1>

        {/* Group */}

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
          text-[#D4AF6A]
          text-lg
          md:text-2xl
          tracking-[12px]
          mt-2
          "
        >
          GROUP
        </motion.h2>

        {/* Animated Gold Line */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "180px",
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
          h-[2px]
          bg-[#D4AF6A]
          mx-auto
          mt-8
          shadow-[0_0_20px_#D4AF6A]
          "
        />

        {/* Tagline */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="
          mt-8
          text-white/80
          text-xs
          md:text-sm
          tracking-[5px]
          uppercase
          "
        >
          Building Trust. Creating Value.
        </motion.p>

        {/* Loading Bar */}

        <div
          className="
          w-52
          h-[2px]
          bg-white/10
          mx-auto
          mt-10
          overflow-hidden
          rounded-full
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            h-full
            w-20
            bg-[#D4AF6A]
            "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;