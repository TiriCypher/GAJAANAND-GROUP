import {
  Bell,
  Search,
  ChevronDown,
  CalendarDays,
  Sun,
  Menu
} from "lucide-react";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Topbar() {
  const { user } = useSelector(
    (state) => state.auth
  );

  const [time, setTime] =
    useState(new Date());

  useEffect(() => {
    const timer =
      setInterval(() => {
        setTime(new Date());
      }, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  const hour =
    new Date().getHours();

  let greeting =
    "Good Evening";

  if (hour < 12)
    greeting = "Good Morning";

  else if (hour < 18)
    greeting = "Good Afternoon";

  return (
    <motion.header
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: .5,
      }}
      className="
      sticky
      top-0
      z-30
      bg-white/80
      backdrop-blur-xl
      border-b
      border-gray-200
      px-4 md:px-8 py-4
      flex
      justify-between
      items-center
      shadow-sm
    "
    >
      {/* LEFT */}

      <div>

        <h2 className="
text-xl
md:text-3xl
font-bold
text-[#071B3B]">
          {greeting},
          {" "}
          {user?.firstName}
          👋
        </h2>

        <p className="text-gray-500 mt-1">
          Welcome back to
          {" "}
          <span className="font-semibold text-[#D4AF6A]">
            GAJAANAND GROUP
          </span>
        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-3">

        {/* Search */}

        <div
          className="
hidden
lg:flex
items-center
gap-3
bg-[#F5F7FB]
rounded-2xl
px-5
py-3
w-[320px]
"
        >
          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            placeholder="Search..."
            className="
            bg-transparent
            outline-none
            flex-1
          "
          />
        </div>

        {/* Date */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-2
          text-gray-600
        "
        >
          <CalendarDays size={18} />

          <span>
            {time.toLocaleDateString()}
          </span>
        </div>

        {/* Time */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-2
          text-gray-600
        "
        >
          <Sun size={18} />

          <span>
            {time.toLocaleTimeString()}
          </span>
        </div>

        {/* Notification */}

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: .9,
          }}
          className="
          relative
          h-12
          w-12
          rounded-full
          bg-[#F5F7FB]
          flex
          items-center
          justify-center
        "
        >
          <Bell />

          <span
            className="
            absolute
            top-2
            right-2
            h-3
            w-3
            rounded-full
            bg-red-500
            animate-ping
          "
          />

          <span
            className="
            absolute
            top-2
            right-2
            h-3
            w-3
            rounded-full
            bg-red-500
          "
          />
        </motion.button>

        {/* Profile */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="
          flex
          items-center
          gap-3
          bg-[#F5F7FB]
          rounded-full
          px-3
          py-2
          cursor-pointer
        "
        >
          <div
            className="
            h-12
            w-12
            rounded-full
            bg-gradient-to-r
            from-[#D4AF6A]
            to-yellow-300
            flex
            items-center
            justify-center
            font-bold
            text-[#071B3B]
            text-lg
          "
          >
            {user?.firstName
              ?.charAt(0)}
          </div>

          <div className="hidden lg:block">

            <h4 className="font-semibold">
              {user?.firstName}
              {" "}
              {user?.lastName}
            </h4>

            <p className="text-sm text-gray-500 capitalize">
              {user?.role}
            </p>

          </div>

          <ChevronDown
            className="text-gray-500"
            size={18}
          />
        </motion.div>

      </div>

    </motion.header>
  );
}

export default Topbar;