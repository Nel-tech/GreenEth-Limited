import React from "react";
import { motion } from "framer-motion";
import Counter from "../ui/counter";

function About() {
    return (
        <section
            id="about"
            className="overflow-hidden bg-[#F7F5EF] py-24 md:py-32"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-16 lg:flex-row">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full lg:w-1/2"
                    >
                        <div className="border-l-8 border-[#F4B000] py-4 pl-6">
                            <img
                                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                                alt="Agricultural fields"
                                className="h-auto w-full rounded-sm object-cover shadow-xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#00D084]">
                            Who We Are
                        </span>

                        <h2 className="mt-4 mb-6 font-serif text-4xl font-bold leading-tight text-[#00D084] md:text-5xl">
                            Nigeria&apos;s Trusted Agricultural Partner
                        </h2>

                        <p className="mb-8 text-lg leading-relaxed text-gray-600">
                            Since 2010, AgroNigeria Allied Services has stood at the
                            intersection of local farming excellence and global market
                            demands. We partner with local farmers to elevate crop yields
                            while managing a robust supply chain that delivers Nigeria&apos;s
                            finest produce to over twenty countries worldwide. Our commitment
                            is rooted in enriching the land, empowering the people, and
                            delivering uncompromised quality.
                        </p>

                        <div className="mb-12 flex flex-wrap gap-3">
                            {["Integrity", "Quality", "Sustainability"].map((pill) => (
                                <span
                                    key={pill}
                                    className="
                    rounded-full
                    border border-[#00D084]/20
                    bg-[#00D084]/10
                    px-5 py-2
                    text-sm
                    font-semibold
                    text-[#F4B000]
                  "
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8 md:grid-cols-3">
                            <Counter end={10} label="Years Experience" />
                            <Counter end={500} label="Farmers Served" />
                            <Counter end={20} label="Export Destinations" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;