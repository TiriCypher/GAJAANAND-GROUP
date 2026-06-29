import {
  LayoutDashboard,
  Building2,
  Users,
  Phone,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  UserCircle2,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] =
    useState(false);

  const { user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      title: "Properties",
      icon: Building2,
      path: "/admin/properties",
    },
    {
      title: "Users",
      icon: Users,
      path: "/admin/users",
    },
    {
      title: "Leads",
      icon: Phone,
      path: "/admin/leads",
    },
    {
      title: "Inquiries",
      icon: MessageSquare,
      path: "/admin/inquiries",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/admin/settings",
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <motion.aside
      animate={{
        width: collapsed ? 95 : 285,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
      sticky
      top-0
      h-screen
      bg-[#071B3B]
      border-r
      border-white/10
      text-white
      shadow-2xl
      flex
      flex-col
      justify-between
      overflow-y-auto
    "
    >
      {/* TOP */}

      <div>

        {/* Logo */}

        <div
          className="
          h-24
          flex
          items-center
          justify-between
          px-6
          border-b
          border-white/10
        "
        >
          {!collapsed && (
            <div>

              <h2 className="font-black text-2xl tracking-wide">
                GAJAANAND
              </h2>

              <p className="text-xs text-[#D4AF6A] tracking-[3px] uppercase">
                GROUP
              </p>

            </div>
          )}

          <button
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }
            className="
            h-11
            w-11
            rounded-xl
            bg-white/10
            flex
            items-center
            justify-center
            hover:bg-[#D4AF6A]
            hover:text-black
            transition
          "
          >
            {collapsed ? (
              <ChevronRight />
            ) : (
              <ChevronLeft />
            )}
          </button>

        </div>

        {/* Profile */}

        <div
          className="
          p-6
          border-b
          border-white/10
        "
        >
          <div className="flex items-center gap-4">

            <div
              className="
              h-14
              w-14
              rounded-full
              bg-gradient-to-r
              from-[#D4AF6A]
              to-yellow-300
              flex
              items-center
              justify-center
            "
            >
              <UserCircle2
                size={32}
                className="text-[#071B3B]"
              />
            </div>

            {!collapsed && (
              <div>

                <h3 className="font-bold">
                  {user?.firstName}
                </h3>

                <p className="text-sm text-gray-300 capitalize">
                  {user?.role}
                </p>

              </div>
            )}

          </div>
        </div>

        {/* MENU */}

        <nav className="mt-5 px-3">

          {menu.map((item) => {

            const Icon =
              item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={
                  item.path ===
                  "/admin"
                }
                className={({
                  isActive,
                }) =>
                  `
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-4
                  py-4
                  mb-2
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#D4AF6A] to-yellow-300 text-[#071B3B] shadow-lg"
                      : "hover:bg-white/10"
                  }
                `
                }
              >
                <Icon size={22} />

                {!collapsed && (
                  <span className="font-medium">
                    {item.title}
                  </span>
                )}
              </NavLink>
            );
          })}

        </nav>

      </div>

      {/* FOOTER */}

      <div
        className="
        p-5
        border-t
        border-white/10
      "
      >
        <button
          onClick={
            handleLogout
          }
          className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-red-500
          py-3
          hover:bg-red-600
          transition
        "
        >
          <LogOut size={20} />

          {!collapsed &&
            "Logout"}
        </button>
      </div>
    </motion.aside>
  );
}

export default Sidebar;