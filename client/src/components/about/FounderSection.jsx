import {
    Mail,
    Award,
    Building2,
} from "lucide-react";

import { motion } from "framer-motion";

import aditya from "../../assets/about/aditya.png";
import kishan from "../../assets/about/kishan.jpg";

function FoundersSection() {
    const founders = [
        {
            name: "Aditya Goyal",
            role: "Co-Founder",
            image: aditya,
            desc:
                "Driving innovation, growth and premium real estate experiences with vision and leadership.",
        },
        {
            name: "Kishan Gujjar",
            role: "Co-Founder",
            image: kishan,
            desc:
                "Committed to trust, excellence and delivering exceptional value to every client.",
        },
    ];

    return (
        <section className="py-32 bg-[#F8FAFD] overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >

                    <div className="
          inline-flex
          items-center
          gap-3
          px-5
          py-2
          rounded-full
          bg-[#D4AF6A]/10
          text-[#D4AF6A]
          font-semibold
          ">
                        <Award size={18} />
                        Leadership Team
                    </div>

                    <h2 className="
          text-4xl
          md:text-6xl
          font-black
          text-[#071B3B]
          mt-8
          ">
                        Meet Our Founders
                    </h2>

                    <p className="
          mt-6
          max-w-3xl
          mx-auto
          text-lg
          text-gray-600
          leading-8
          ">
                        Visionary leaders dedicated to building trust,
                        innovation and excellence in real estate.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="grid lg:grid-cols-2 gap-12">

                    {founders.map((founder, index) => (

                        <motion.div
                            key={founder.name}
                            initial={{
                                opacity: 0,
                                y: 80,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.7,
                            }}
                            viewport={{ once: true }}
                            className="
              group
              relative
              rounded-[40px]
              overflow-hidden
              bg-white
              before:absolute
before:-top-32
before:-right-32
before:h-72
before:w-72
before:rounded-full
before:bg-[#D4AF6A]/10
before:blur-3xl
before:content-['']
              shadow-[0_30px_80px_rgba(0,0,0,0.08)]
              hover:-translate-y-4
              transition-all
              duration-500
              "
                        >

                            {/* Gold Top Border */}

                            <div className="
              h-2
              w-full
              bg-gradient-to-r
              from-[#D4AF6A]
              to-yellow-300
              " />

                            {/* Image */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="
                  h-[520px]
                  w-full
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-700
                  "
                                />

                                {/* Overlay */}

                                <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
                " />

                                {/* Floating Badge */}

                                <div className="
                absolute
                bottom-6
                left-6
                px-5
                py-3
                rounded-2xl
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                text-white
                flex
                items-center
                gap-2
                ">
                                    <Building2 size={18} />
                                    GAJAANAND GROUP
                                </div>

                            </div>

                            {/* Content */}

                            <div className="p-10">

                                <p className="
                uppercase
                tracking-[4px]
                text-[#D4AF6A]
                font-semibold
                text-sm
                ">
                                    {founder.role}
                                </p>

                                <h3 className="
                text-4xl
                font-black
                text-[#071B3B]
                mt-4
                ">
                                    {founder.name}
                                </h3>

                                <div className="
                w-20
                h-1
                rounded-full
                bg-[#D4AF6A]
                mt-5
                " />

                                <p className="
                mt-6
                text-gray-600
                leading-8
                text-lg
                ">
                                    {founder.desc}
                                </p>

                                {/* Footer */}

                                <div className="
                flex
                items-center
                justify-between
                mt-10
                pt-8
                border-t
                ">

                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Leadership
                                        </p>

                                        <h4 className="font-bold text-[#071B3B]">
                                            Executive Director
                                        </h4>
                                    </div>

                                    <button
                                        className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-[#071B3B]
                    text-white
                    flex
                    items-center
                    justify-center
                    hover:bg-[#D4AF6A]
                    hover:text-[#071B3B]
                    transition
                    "
                                    >
                                        <Mail size={22} />
                                    </button>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default FoundersSection;