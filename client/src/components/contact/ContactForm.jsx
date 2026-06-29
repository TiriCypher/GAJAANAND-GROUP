import image from "../../assets/contact/contact-form.png";

function ContactForm() {
  return (
    <section className="py-32 bg-[#F7F8FC]">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative">

            <img
              src={image}
              alt=""
              className="
              rounded-[50px]
              h-[700px]
              object-cover
              w-full
              shadow-2xl
              "
            />

            <div className="
              absolute
              bottom-8
              left-8
              right-8
              bg-black/70
              backdrop-blur-xl
              rounded-3xl
              p-8
              text-white
            ">
              <h3 className="text-3xl font-black">
                Trusted Since 2012
              </h3>

              <p className="mt-3 text-gray-300">
                Helping families and investors build wealth.
              </p>
            </div>

          </div>

          <div className="
            bg-white
            rounded-[40px]
            shadow-2xl
            p-10
          ">

            <p className="text-[#D4AF6A] tracking-[5px] uppercase">
              Send Message
            </p>

            <h2 className="
              text-5xl
              font-black
              text-[#071B3B]
              mt-4
            ">
              Let's Talk
            </h2>

            <div className="space-y-6 mt-10">

              <input
                placeholder="Full Name"
                className="
                w-full
                border
                rounded-2xl
                p-5
                outline-none
              "
              />

              <input
                placeholder="Email"
                className="
                w-full
                border
                rounded-2xl
                p-5
              "
              />

              <input
                placeholder="Phone Number"
                className="
                w-full
                border
                rounded-2xl
                p-5
              "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                w-full
                border
                rounded-2xl
                p-5
              "
              />

              <button className="
                w-full
                py-5
                rounded-2xl
                bg-[#071B3B]
                text-white
                font-bold
                hover:bg-[#D4AF6A]
                hover:text-black
                transition
              ">
                Send Message
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;