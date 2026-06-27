import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "../common/Button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
          }`}
      > */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isHome
            ? scrolled
              ? "bg-white/90 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
            : "bg-white shadow-lg"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <Logo dark={scrolled || !isHome} />

            <NavLinks dark={scrolled || !isHome} />

            <div className="hidden lg:block">
              <Button>
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden text-3xl ${scrolled || !isHome ? "text-[#0A1F44]" : "text-white"
                }`}
            >
              <HiOutlineMenuAlt3 />
            </button>

          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        close={() => setMobileOpen(false)}
      />
    </>
  );
}

export default Navbar;