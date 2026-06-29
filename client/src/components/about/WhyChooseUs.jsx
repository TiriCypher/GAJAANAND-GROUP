import {
  ShieldCheck,
  Building2,
  Handshake,
  TrendingUp,
  Award,
  Gem,
} from "lucide-react";

import { motion } from "framer-motion";

function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Transactions",
      desc: "Complete transparency and secure property dealings.",
    },
    {
      icon: Building2,
      title: "Luxury Properties",
      desc: "Premium residences and investment opportunities.",
    },
    {
      icon: Handshake,
      title: "Expert Guidance",
      desc: "Professional support from inquiry to possession.",
    },
    {
      icon: TrendingUp,
      title: "Investment Growth",
      desc: "High-return opportunities for long-term wealth.",
    },
    {
      icon: Award,
      title: "Professional Service",
      desc: "Dedicated team delivering exceptional experiences.",
    },
    {
      icon: Gem,
      title: "Premium Experience",
      desc: "Luxury real estate solutions tailored for clients.",
    },
  ];

  return (
    <section className="py-32 bg-[#F8FAFD] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="
          text-[#D4AF6A]
          uppercase
          tracking-[5px]
          ">
            Why Choose Us
          </p>

          <h2 className="
          mt-5
          text-5xl
          font-black
          text-[#071B3B]
          ">
            Excellence In Every Deal
          </h2>

          <p className="
          mt-6
          text-gray-600
          text-lg
          max-w-3xl
          mx-auto
          leading-8
          ">
            Experience unmatched professionalism,
            transparency and luxury real estate services.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                group
                bg-white
                rounded-[35px]
                p-10
                shadow-xl
                border
                border-gray-100
                hover:-translate-y-3
                transition
                duration-500
                "
              >

                <div
                  className="
                  h-20
                  w-20
                  rounded-3xl
                  bg-gradient-to-r
                  from-[#D4AF6A]
                  to-yellow-300
                  flex
                  items-center
                  justify-center
                  group-hover:rotate-12
                  transition
                  duration-500
                  "
                >
                  <Icon
                    size={34}
                    className="text-[#071B3B]"
                  />
                </div>

                <h3 className="
                text-2xl
                font-black
                mt-8
                text-[#071B3B]
                ">
                  {item.title}
                </h3>

                <p className="
                mt-5
                text-gray-600
                leading-8
                text-lg
                ">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;