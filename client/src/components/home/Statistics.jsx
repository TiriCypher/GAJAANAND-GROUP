import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    Building2,
    Users,
    MapPinned,
    Star,
} from "lucide-react";

const stats = [
    {
        id: 1,
        icon: Building2,
        value: 500,
        suffix: "+",
        title: "Properties",
        description: "Premium Residential & Commercial Listings",
    },
    {
        id: 2,
        icon: Users,
        value: 1200,
        suffix: "+",
        title: "Happy Clients",
        description: "Families & Investors Served Successfully",
    },
    {
        id: 3,
        icon: MapPinned,
        value: 10,
        suffix: "+",
        title: "Cities",
        description: "Growing Presence Across India",
    },
    {
        id: 4,
        icon: Star,
        value: 98,
        suffix: "%",
        title: "Client Satisfaction",
        description: "Trusted Service & Long-Term Relationships",
    },
];

function StatsSection() {
    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="uppercase tracking-[5px] text-[#D4AF6A] font-semibold mb-3">
                        OUR ACHIEVEMENTS
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44]">
                        Trusted by Thousands
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
                        GAJAANAND GROUP has built a reputation based on trust,
                        transparency, premium properties, and long-term relationships.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 60 }}
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
                                className="bg-white rounded-3xl shadow-xl p-8 text-center border border-gray-100 transition-all"
                            >
                                {/* Icon */}

                                <div className="w-20 h-20 rounded-full bg-[#D4AF6A] flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <Icon
                                        size={38}
                                        className="text-[#0A1F44]"
                                    />
                                </div>

                                {/* Counter */}

                                <h3 className="text-5xl font-bold text-[#0A1F44]">
                                    {item.value}
                                    {item.suffix}
                                </h3>

                                {/* Title */}

                                <h4 className="mt-4 text-xl font-semibold text-[#0A1F44]">
                                    {item.title}
                                </h4>

                                {/* Description */}

                                <p className="mt-3 text-gray-600 text-sm leading-6">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}

export default StatsSection;