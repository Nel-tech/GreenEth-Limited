import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Hero() {
    return (
        <section className="relative flex h-[100dvh] w-full items-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1B4D2E]/85 to-[#0A1E12]/60 mix-blend-multiply" />
            </div>

            <div className="container relative z-10 mx-auto mt-16 px-6 text-left text-white md:text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl text-4xl font-bold leading-tight md:mx-auto md:text-7xl"
                >
                    The Engine Behind Smarter Agriculture
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 max-w-2xl text-base font-light text-white/90 md:mx-auto md:text-xl"
                >
                    Delivering premium crop & livestock production, value-chain
                    excellence, expert consultancy, and global import-export solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex justify-start md:justify-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="
              h-14
              border-none
              rounded-none
              bg-[#00D084]
              px-8
              text-base
              text-black
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
                    >
                        <a href="#services">Explore Our Services</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;