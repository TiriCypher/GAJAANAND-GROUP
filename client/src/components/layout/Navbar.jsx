import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/90
      backdrop-blur-md
      border-b
      border-gray-200
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4 py-4 md:px-6 md:py-5
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <div className="flex-1">
          <h1
            className="
    text-sm
    sm:text-lg
    md:text-2xl
    font-bold
    text-[#0A1F44]
    truncate
    "
          >
            GAJAANAND GROUP
          </h1>
        </div>

        {/* Desktop Menu */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >
          <a href="#">
            Home
          </a>

          <a href="#">
            About
          </a>

          <a href="#">
            Properties
          </a>

          <a href="#">
            Contact
          </a>

          <button
            className="
            px-5
            py-2
            rounded
            bg-[#0A1F44]
            text-white
            hover:bg-[#D4AF6A]
            transition
            "
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Button */}

        <button
          className="
          md:hidden
          text-2xl
          "
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
          md:hidden
          bg-white
          px-6
          py-4
          flex
          flex-col
          gap-4
          "
        >
          <a href="#">
            Home
          </a>

          <a href="#">
            About
          </a>

          <a href="#">
            Properties
          </a>

          <a href="#">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;