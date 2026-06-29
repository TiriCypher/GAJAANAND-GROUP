import { motion } from "framer-motion";
import companyImage from "../../assets/about/company.png";

function CompanyStory() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src={companyImage}
              alt=""
              className="
              rounded-[40px]
              shadow-2xl
              h-[650px]
              w-full
              object-cover
              "
            />

            <div className="
            absolute
            -bottom-8
            -right-8
            bg-[#071B3B]
            p-8
            rounded-3xl
            shadow-2xl
            ">
              <h2 className="text-5xl font-black text-[#D4AF6A]">
                12+
              </h2>

              <p className="text-white mt-2">
                Years Experience
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-[#D4AF6A] tracking-[5px] uppercase">
              Our Story
            </p>

            <h2 className="
            text-5xl
            font-black
            text-[#071B3B]
            mt-5
            leading-tight
            ">
              A Trusted Name
              <br />
              In Real Estate
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              GAJAANAND GROUP was founded with a vision to redefine
              real estate through trust, transparency and excellence.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-9">
              From luxury residences to premium investments,
              we help families and investors make confident decisions.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h3 className="text-4xl font-black text-[#071B3B]">
                  500+
                </h3>

                <p className="text-gray-500 mt-2">
                  Happy Families
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-[#071B3B]">
                  150+
                </h3>

                <p className="text-gray-500 mt-2">
                  Properties Sold
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default CompanyStory;