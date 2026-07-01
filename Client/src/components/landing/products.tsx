import { products } from "@/lib/constants";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
function Products() {
  

    return (
        <section id="products" className="py-24 md:py-32 bg-[#F7F5EF]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#F4B000] text-sm font-bold uppercase tracking-[0.2em]">What We Offer</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#00D084] mt-4 font-bold">Our Products</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((prod, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={prod.img}
                                    alt={prod.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-serif text-xl font-bold text-[#1B4D2E] mb-3">{prod.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{prod.desc}</p>
                                <Button variant="outline" className="w-full text-[#C8922A] border-[#C8922A] hover:bg-[#C8922A] hover:text-white rounded-none">
                                    Request Quote
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Products
