import {
  COMPANY,
} from "../../utils/constants";

function Home() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-white
      "
    >
      <div
        className="
        text-center
        px-6
        "
      >
        <h1
          className="
          text-5xl
          md:text-7xl
          font-bold
          tracking-wider
          text-[#0A1F44]
          "
        >
          {COMPANY.NAME}
        </h1>

        <p
          className="
          mt-6
          text-lg
          md:text-2xl
          tracking-[4px]
          text-[#D4AF6A]
          "
        >
          {COMPANY.TAGLINE}
        </p>
      </div>
    </section>
  );
}

export default Home;