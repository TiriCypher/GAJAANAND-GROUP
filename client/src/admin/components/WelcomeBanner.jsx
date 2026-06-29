import {
  Plus,
  Users,
  Building2,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function WelcomeBanner() {
  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .6,
      }}
      className="
      relative
      overflow-hidden
      rounded-[32px]
      bg-gradient-to-r
      from-[#071B3B]
      via-[#0A1F44]
      to-[#123D82]
      p-5
      md:p-10
      text-white
      shadow-[0_30px_70px_rgba(0,0,0,0.18)]
    "
    >

      {/* Decorative Circle */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-72
        w-72
        rounded-full
        bg-[#D4AF6A]/10
        blur-3xl
      "
      />

      <div
        className="
        absolute
        -bottom-28
        left-0
        h-80
        w-80
        rounded-full
        bg-white/5
        blur-3xl
      "
      />

      {/* Floating Sparkles */}

      <Sparkles
        className="
        absolute
        top-10
        right-12
        text-[#D4AF6A]
        opacity-70
      "
        size={28}
      />

      <div className="relative z-10">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between gap-10">

          <div>

            <p className="uppercase tracking-[5px] text-[#D4AF6A] text-sm">
              Admin Dashboard
            </p>

            <h1 className="
mt-4
text-3xl
md:text-5xl
font-black
leading-tight
">
              Welcome Back,
              <br />
              {user?.firstName}
            </h1>

            <p className="
mt-4
text-sm
md:text-lg
text-gray-300
leading-7
">
              Manage properties, users, inquiries,
              leads and monitor your business
              performance from one powerful dashboard.
            </p>

          </div>

          {/* KPI Box */}

          <div
            className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            p-8
            w-full
            lg:w-[330px]
          "
          >

            <p className="text-gray-300">
              Portfolio Value
            </p>

            <h2 className="text-5xl font-black mt-3">
              ₹12.8Cr
            </h2>

            <div className="mt-6 h-2 rounded-full bg-white/20 overflow-hidden">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "82%",
                }}
                transition={{
                  duration: 1.4,
                }}
                className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#D4AF6A]
                to-yellow-300
                "
              />

            </div>

            <p className="mt-4 text-sm text-green-300">
              ▲ +18% from last month
            </p>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="
grid
grid-cols-1
md:grid-cols-3
gap-5
mt-8
">

          <Link
            to="/admin/properties"
            className="
            group
            rounded-3xl
            bg-white/10
            border
            border-white/10
            p-6
            hover:bg-white/20
            transition
            "
          >

            <div className="flex justify-between">

              <div
                className="
                h-14
                w-14
                rounded-2xl
                bg-[#D4AF6A]
                flex
                items-center
                justify-center
              "
              >
                <Building2 className="text-[#071B3B]" />
              </div>

              <ArrowRight
                className="
                group-hover:translate-x-1
                transition
              "
              />

            </div>

            <h3 className="mt-6 text-xl font-bold">
              Manage Properties
            </h3>

            <p className="mt-2 text-gray-300">
              Add, edit and manage listings.
            </p>

          </Link>

          <Link
            to="/admin/users"
            className="
            group
            rounded-3xl
            bg-white/10
            border
            border-white/10
            p-6
            hover:bg-white/20
            transition
          "
          >

            <div className="flex justify-between">

              <div
                className="
                h-14
                w-14
                rounded-2xl
                bg-green-500
                flex
                items-center
                justify-center
              "
              >
                <Users />
              </div>

              <ArrowRight className="group-hover:translate-x-1 transition" />

            </div>

            <h3 className="mt-6 text-xl font-bold">
              Manage Users
            </h3>

            <p className="mt-2 text-gray-300">
              Control customer accounts.
            </p>

          </Link>

          <Link
            to="/admin/leads"
            className="
            group
            rounded-3xl
            bg-white/10
            border
            border-white/10
            p-6
            hover:bg-white/20
            transition
          "
          >

            <div className="flex justify-between">

              <div
                className="
                h-14
                w-14
                rounded-2xl
                bg-orange-500
                flex
                items-center
                justify-center"
              >
                <Phone />
              </div>

              <ArrowRight className="group-hover:translate-x-1 transition" />

            </div>

            <h3 className="mt-6 text-xl font-bold">
              View Leads
            </h3>

            <p className="mt-2 text-gray-300">
              Follow up with potential clients.
            </p>

          </Link>

        </div>

      </div>

    </motion.section>
  );
}

export default WelcomeBanner;