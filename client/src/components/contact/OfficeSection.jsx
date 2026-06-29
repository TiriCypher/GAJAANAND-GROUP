import office from "../../assets/contact/office.png";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

function OfficeSection() {
  return (
    <section className="relative py-32 bg-[#F8F9FC] overflow-hidden">

      {/* Background Gold Blur */}

      <div
        className="
        absolute
        -top-32
        -right-32
        h-96
        w-96
        rounded-full
        bg-[#D4AF6A]/10
        blur-3xl
        "
      />

      <div
        className="
        absolute
        -bottom-32
        -left-32
        h-96
        w-96
        rounded-full
        bg-[#071B3B]/5
        blur-3xl
        "
      />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[6px] text-[#D4AF6A]">
            Experience Center
          </p>

          <h2
            className="
            text-4xl
            md:text-6xl
            font-black
            text-[#071B3B]
            mt-6
            leading-tight
            "
          >
            Visit Our Luxury
            <br />
            Real Estate Office
          </h2>

          <p className="mt-8 text-gray-500 text-lg leading-8">
            Step into a premium environment where our
            experts guide you through buying, selling
            and investing in luxury properties.
          </p>

        </div>

        {/* Main Card */}

        <div
          className="
          mt-20
          bg-white
          rounded-[40px]
          shadow-[0_40px_100px_rgba(0,0,0,0.08)]
          overflow-hidden
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative">

              <img
                src={office}
                alt=""
                className="
                h-[650px]
                w-full
                object-cover
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                to-transparent
                "
              />

              <div className="absolute bottom-10 left-10 text-white">

                <p className="uppercase tracking-[4px] text-[#D4AF6A]">
                  GAJAANAND GROUP
                </p>

                <h3 className="text-4xl font-black mt-3">
                  Premium Experience
                </h3>

              </div>

            </div>

            {/* Content */}

            <div className="p-10 lg:p-16 flex flex-col justify-center">

              <h3 className="text-4xl font-black text-[#071B3B]">
                Why Visit Us?
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                Our office is designed to provide a
                luxurious experience for clients looking
                for premium residential and commercial
                properties.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex gap-5">

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
                    <MapPin className="text-[#071B3B]" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Office Address
                    </h4>

                    <p className="text-gray-500">
                      Surat, Gujarat, India
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div
                    className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-[#071B3B]
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Phone className="text-white" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Call Us
                    </h4>

                    <p className="text-gray-500">
                      +91 98765 43210
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

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
                    <Mail className="text-[#071B3B]" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Email
                    </h4>

                    <p className="text-gray-500">
                      info@gajaanandgroup.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div
                    className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-[#071B3B]
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Clock className="text-white" />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">
                      Working Hours
                    </h4>

                    <p className="text-gray-500">
                      Monday to Saturday
                      <br />
                      9:00 AM – 7:00 PM
                    </p>
                  </div>

                </div>

              </div>

              {/* Bottom CTA */}

              <div
                className="
                mt-12
                p-6
                rounded-3xl
                bg-[#071B3B]
                text-white
                "
              >
                <p className="text-[#D4AF6A] uppercase tracking-[3px]">
                  Personal Consultation
                </p>

                <h4 className="text-2xl font-bold mt-3">
                  Schedule Your Office Visit
                </h4>

                <p className="text-gray-300 mt-3">
                  Meet our advisors and discover premium
                  investment opportunities.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OfficeSection;