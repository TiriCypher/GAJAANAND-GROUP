import { MapPin, Building2, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

import officeImage from "../../assets/about/office.png";

function OfficeSection() {
  const features = [
    {
      icon: <Building2 size={22} />,
      title: "Luxury Workspace",
      description:
        "Modern interiors designed to provide a premium experience for every client.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Trusted Consultation",
      description:
        "Professional guidance and transparent property advice from our experts.",
    },
    {
      icon: <Users size={22} />,
      title: "Client Experience",
      description:
        "Dedicated relationship managers ensuring seamless support at every stage.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF6A] font-semibold">
            Our Headquarters
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-black text-[#071B3B]">
            Where Trust Meets Luxury
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Our office is more than a workspace. It is where property dreams
            become reality, investments are planned, and lifelong relationships
            with our clients begin.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-[#D4AF6A]/20 blur-3xl" />

            <div className="absolute -bottom-8 -right-8 h-52 w-52 rounded-full bg-[#071B3B]/10 blur-3xl" />

            <img
              src={officeImage}
              alt="GAJAANAND GROUP Office"
              className="
                rounded-[40px]
                shadow-[0_40px_80px_rgba(0,0,0,0.18)]
                w-full
                h-[550px]
                object-cover
              "
            />

            {/* Floating Card */}

            <div
              className="
                absolute
                bottom-8
                left-8
                bg-white
                rounded-3xl
                p-5
                shadow-2xl
                max-w-xs
              "
            >
              <div className="flex items-center gap-3 text-[#D4AF6A]">
                <MapPin size={20} />

                <span className="font-semibold">
                  Surat, Gujarat, India
                </span>
              </div>

              <p className="mt-3 text-gray-600 text-sm leading-6">
                Serving clients with integrity, professionalism and excellence.
              </p>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-4xl font-black text-[#071B3B] leading-tight">
              A Premium Environment
              <br />
              Built For Real Estate Excellence
            </h3>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              Every meeting, investment discussion, and property consultation
              happens within an environment that reflects our commitment to
              luxury, transparency, and customer satisfaction.
            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              Our corporate office combines modern design, professional
              expertise, and personalized service to create an exceptional
              experience for every client.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    gap-5
                    p-5
                    rounded-3xl
                    bg-[#F7F8FC]
                    hover:shadow-lg
                    transition
                  "
                >
                  <div
                    className="
                      h-14
                      w-14
                      rounded-2xl
                      bg-[#D4AF6A]
                      text-[#071B3B]
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-[#071B3B] text-lg">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Card */}

            <div
              className="
                mt-10
                rounded-3xl
                bg-gradient-to-r
                from-[#071B3B]
                to-[#123D82]
                p-8
                text-white
              "
            >
              <h4 className="text-2xl font-bold">
                Visit Our Office
              </h4>

              <p className="mt-4 text-gray-300 leading-7">
                Experience our commitment to excellence firsthand and discuss
                your real estate goals with our expert team.
              </p>

              <button
                className="
                  mt-6
                  bg-[#D4AF6A]
                  text-[#071B3B]
                  px-8
                  py-3
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Schedule Appointment
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OfficeSection;