import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";



function Hero() {
    return (
        <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1B4D2E]/85 to-[#0A1E12]/60 mix-blend-multiply" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center text-white mt-16">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-tight"
                >
                    From Farm to Market — Powering Nigeria's Agricultural Future
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 text-lg md:text-xl font-light max-w-2xl mx-auto text-white/90"
                >
                    Delivering premium crop & livestock production, value-chain excellence, expert consultancy, and global import-export solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button
                        asChild
                        size="lg"
                        className="
      bg-[#00D084]
      text-white
      rounded-none
      border-none
      px-8
      h-14
      text-base
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

export default Hero