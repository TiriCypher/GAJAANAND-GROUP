import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

function StatCard({
  title,
  value,
  icon,
  color,
  change = "+12%",
  positive = true,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        bg-white
        p-5
        md:p-7
        shadow-lg
        border
        border-gray-100
        hover:shadow-2xl
        transition-all
      "
    >
      {/* Background Glow */}

      <div
        className={`
        absolute
        -right-10
        -top-10
        h-40
        w-40
        rounded-full
        opacity-10
        blur-3xl
        ${color}
      `}
      />

      {/* Header */}

      <div className="flex items-center justify-between">

        <div
          className={`
          h-16
          w-16
          rounded-2xl
          flex
          items-center
          justify-center
          text-white
          shadow-lg
          ${color}
        `}
        >
          {icon}
        </div>

        <div
          className={`
          flex
          items-center
          gap-1
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          ${positive
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
            }
        `}
        >
          {positive ? (
            <ArrowUpRight size={15} />
          ) : (
            <ArrowDownRight size={15} />
          )}

          {change}
        </div>

      </div>

      {/* Value */}

      <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#071B3B]">
        {value}
      </h2>

      <p className="mt-2 text-gray-500 text-lg">
        {title}
      </p>

      {/* Progress */}

      <div className="mt-7">

        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Monthly Progress</span>

          <span>84%</span>
        </div>

        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "84%",
            }}
            transition={{
              duration: 1.2,
            }}
            className={`
              h-full
              rounded-full
              ${color}
            `}
          />

        </div>

      </div>

    </motion.div>
  );
}

export default StatCard;