import { Link } from "react-router-dom";

function ContactCTA() {
  return (
    <section className="py-32 bg-[#071B3B] relative overflow-hidden">

      <div className="
        absolute
        h-96
        w-96
        bg-[#D4AF6A]/10
        rounded-full
        blur-3xl
        -top-20
        -right-20
      " />

      <div className="
        max-w-5xl
        mx-auto
        text-center
        relative
        z-10
        px-5
      ">

        <p className="
          text-[#D4AF6A]
          tracking-[6px]
          uppercase
        ">
          Begin Your Journey
        </p>

        <h2 className="
          text-5xl
          md:text-7xl
          font-black
          text-white
          mt-8
        ">
          Your Dream Property
          <br />
          Awaits You
        </h2>

        <p className="
          text-gray-300
          mt-8
          text-xl
        ">
          Connect with our advisors and discover premium opportunities.
        </p>

        <Link
          to="/properties"
          className="
          inline-block
          mt-12
          px-12
          py-5
          rounded-2xl
          bg-[#D4AF6A]
          text-[#071B3B]
          font-bold
          hover:scale-105
          transition
          "
        >
          Explore Properties
        </Link>

      </div>

    </section>
  );
}

export default ContactCTA;