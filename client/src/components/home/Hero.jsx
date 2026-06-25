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

      <div
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
        <p
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
        </p>

        <h1
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
        </h1>

        <p
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
          commercial, and investment
          opportunities curated by
          GAJAANAND GROUP.
        </p>

        <div
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
        </div>
      </div>
    </section>
  );
}

export default Hero;