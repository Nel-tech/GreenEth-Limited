import { services } from "./mp";
import { motion } from "framer-motion";
export default function Services() {
    

    return (
        <section id="services" className="py-24 md:py-32 bg-[#1B4D2E] text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#F4B000] text-sm font-bold uppercase tracking-[0.2em]">What We Do</span>
                    <h2 className="font-serif text-4xl md:text-5xl mt-4 font-bold">Our Core Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-[#153a22] p-8 md:p-12 rounded-sm border border-transparent hover:border-[#C8922A] transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
                        >
                            <div className="text-[#F4B000] mb-6 group-hover:scale-110 transition-transform origin-left">
                                {srv.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-4">{srv.title}</h3>
                            <p className="text-white/80 leading-relaxed flex-grow">{srv.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

