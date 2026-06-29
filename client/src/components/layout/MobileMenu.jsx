import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  LogIn,
  UserPlus,
  User,
  LogOut,
} from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function MobileMenu({ open, close }) {
  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    close();
    navigate("/");
  };
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={close}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              right-0
              top-0
              z-50
              h-full
              w-72
              bg-white
              shadow-2xl
              flex
              flex-col
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="font-bold text-[#0A1F44] text-xl">
                Menu
              </h2>

              <button
                onClick={close}
                className="
                  h-10
                  w-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-gray-100
                  hover:bg-gray-200
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <div className="p-6 flex-1">
              <NavLinks
                dark
                mobile
                onClick={close}
              />
            </div>

            {/* Bottom Buttons */}
            <div className="border-t p-5 space-y-3">

              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      close();
                    }}
                    className="
        flex items-center justify-center gap-2
        w-full rounded-xl
        bg-[#0A1F44]
        py-3 text-white
        font-semibold
        "
                  >
                    <User size={18} />
                    {user?.firstName}
                  </button>

                  <button
                    onClick={handleLogout}
                    className="
        flex items-center justify-center gap-2
        w-full rounded-xl
        bg-red-500
        py-3 text-white
        font-semibold
        "
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={close}
                    className="
        flex items-center justify-center gap-2
        w-full rounded-xl border
        border-[#0A1F44]
        py-3 font-semibold
        text-[#0A1F44]
        "
                  >
                    <LogIn size={18} />
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={close}
                    className="
        flex items-center justify-center gap-2
        w-full rounded-xl
        bg-[#0A1F44]
        py-3 text-white
        font-semibold
        "
                  >
                    <UserPlus size={18} />
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;