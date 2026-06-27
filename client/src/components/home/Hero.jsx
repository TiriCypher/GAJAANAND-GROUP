import { motion } from "framer-motion";
import Button from "../common/Button";
import { COMPANY } from "../../utils/constants";
import { useNavigate } from "react-router-dom";


function Hero() {
    const navigate = useNavigate();

    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/hero.png')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0A1F44]/70"></div>

            {/* Content */}
            <div
                className="
    relative
    z-10
    flex
    min-h-screen
    items-center
    justify-center
    px-6
    pt-20
    md:pt-24
  "
            >
                <div className="max-w-5xl text-center text-white">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="uppercase tracking-[6px] text-[#D4AF6A] mb-6"
                    >
                        {COMPANY.tagline}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl font-bold leading-tight"
                    >
                        Luxury Real Estate
                        <br />
                        Crafted for the Future
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-8 text-lg md:text-xl text-gray-200"
                    >
                        Discover premium residential, commercial, and investment
                        opportunities with {COMPANY.name}.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Button onClick={() => navigate("/properties")}>
                            Explore Properties
                        </Button>

                        <Button onClick={() => navigate("/contact")} className="bg-[#D4AF6A] hover:bg-[#c59d55] text-[#0A1F44]">
                            Contact Us
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
                ↓
            </div>
        </section>
    );
}

export default Hero;