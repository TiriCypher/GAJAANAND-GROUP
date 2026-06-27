import { motion } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Handshake,
  TrendingUp,
  FileCheck,
  House,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Experts",
    description:
      "Years of experience delivering transparent and trustworthy real estate solutions.",
  },
  {
    icon: Building2,
    title: "Premium Properties",
    description:
      "Carefully verified luxury residential and commercial developments.",
  },
  {
    icon: Handshake,
    title: "Customer First",
    description:
      "Personalized guidance from your first inquiry to final possession.",
  },
  {
    icon: TrendingUp,
    title: "Investment Guidance",
    description:
      "Helping clients make profitable real estate investments with confidence.",
  },
  {
    icon: FileCheck,
    title: "Legal Assistance",
    description:
      "Complete legal verification, documentation, and hassle-free transactions.",
  },
  {
    icon: House,
    title: "Luxury Lifestyle",
    description:
      "Exclusive homes in premium locations designed for modern living.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-[#D4AF6A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0A1F44]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#D4AF6A] font-semibold mb-3">
            Excellence • Trust • Legacy
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44]">
            Why Choose GAJAANAND GROUP
          </h2>

          <div className="w-24 h-1 bg-[#D4AF6A] mx-auto rounded-full mt-6"></div>

          <p className="mt-8 max-w-3xl mx-auto text-gray-600 text-lg">
            We combine market expertise, premium properties, and complete
            transparency to help clients make confident real estate decisions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/30
                bg-white/40
                backdrop-blur-xl
                p-8
                shadow-xl
                transition-all
                duration-500
                hover:shadow-[0_20px_60px_rgba(10,31,68,0.15)]
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF6A]/0 via-transparent to-[#D4AF6A]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div
                  className="
                  relative
                  w-20
                  h-20
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-[#D4AF6A]/15
                  mb-8
                  transition-all
                  duration-500
                  group-hover:bg-[#D4AF6A]
                "
                >
                  <Icon
                    size={38}
                    className="
                    text-[#D4AF6A]
                    group-hover:text-white
                    transition-colors
                    duration-500
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold text-[#0A1F44] mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 leading-8">
                  {feature.description}
                </p>

                {/* Bottom Gold Line */}
                <div
                  className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  bg-[#D4AF6A]
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-500
                  "
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;