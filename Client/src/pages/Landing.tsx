import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion";
import { 
  RiMenuLine, 
  RiCloseLine 
} from "react-icons/ri";
import { 
  MdAgriculture, 
  MdFactory, 
  MdSchool, 
  MdOutlineImportExport,
  MdPhone,
  MdEmail,
  MdLocationOn
} from "react-icons/md";
import { 
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter
} from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link } from "wouter";

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-[#1B4D2E]/90 py-4 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col">
         <img src="/Img/Logo.png" alt="" className="w-15 h-1 5" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-white hover:text-[#C8922A] text-sm font-medium transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="bg-[#C8922A] text-white hover:bg-[#A67822] rounded-none px-6">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#1B4D2E] shadow-xl md:hidden border-t border-white/10"
        >
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name} className="py-3 border-b border-white/10 last:border-0">
                <a 
                  href={link.href} 
                  className="text-white text-lg block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="py-4">
              <Button className="w-full bg-[#C8922A] text-white hover:bg-[#A67822] rounded-none">
                Get a Quote
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

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
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild size="lg" className="bg-[#1B4D2E] text-white border border-[#C8922A] hover:bg-[#153a22] rounded-none px-8 text-base h-14">
            <a href="#services">Explore Our Services</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#1B4D2E] rounded-none px-8 text-base h-14">
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#about" className="text-white opacity-80 hover:opacity-100 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21L12 3M12 21L5 14M12 21L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

function Counter({ end, label }: { end: number, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-serif text-4xl md:text-5xl font-bold text-[#C8922A]">{count}+</span>
      <span className="text-[#1B4D2E] font-medium mt-2">{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F5EF] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="border-l-8 border-[#C8922A] pl-6 py-4">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80" 
                alt="Agricultural fields" 
                className="w-full h-auto object-cover rounded-sm shadow-xl"
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
            <span className="text-[#C8922A] text-sm font-bold uppercase tracking-[0.2em]">Who We Are</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B4D2E] mt-4 mb-6 leading-tight font-bold">Nigeria's Trusted Agricultural Partner</h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Since 2010, AgroNigeria Allied Services has stood at the intersection of local farming excellence and global market demands. We partner with local farmers to elevate crop yields while managing a robust supply chain that delivers Nigeria's finest produce to over twenty countries worldwide. Our commitment is rooted in enriching the land, empowering the people, and delivering uncompromised quality.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {['Integrity', 'Quality', 'Sustainability'].map(pill => (
                <span key={pill} className="bg-[#1B4D2E]/10 text-[#C8922A] font-semibold px-5 py-2 rounded-full text-sm border border-[#1B4D2E]/20">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
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

function Services() {
  const services = [
    {
      title: "Crop & Livestock Production",
      desc: "We cultivate premium crops and manage world-class livestock for local and export markets.",
      icon: <MdAgriculture size={40} />
    },
    {
      title: "Agricultural Value-Chain",
      desc: "End-to-end processing, packaging, and distribution ensuring maximum value from farm to consumer.",
      icon: <MdFactory size={40} />
    },
    {
      title: "Consultancy & Training",
      desc: "Expert-led programs empowering farmers with modern techniques, best practices, and market insights.",
      icon: <MdSchool size={40} />
    },
    {
      title: "Import & Export",
      desc: "Connecting Nigeria's finest agricultural produce to global markets across 20+ countries.",
      icon: <MdOutlineImportExport size={40} />
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#1B4D2E] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8922A] text-sm font-bold uppercase tracking-[0.2em]">What We Do</span>
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
              <div className="text-[#C8922A] mb-6 group-hover:scale-110 transition-transform origin-left">
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

function Products() {
  const products = [
    {
      title: "Maize",
      desc: "Premium yellow maize harvested fresh from Nigeria's fertile heartlands.",
      img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80"
    },
    {
      title: "Cassava",
      desc: "High-starch cassava roots ideal for industrial processing and export.",
      img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80"
    },
    {
      title: "Palm Oil",
      desc: "Refined and crude palm oil sourced from our estates in southern Nigeria.",
      img: "https://images.unsplash.com/photo-1620053996030-3dfc7f60e4a9?w=400&q=80"
    },
    {
      title: "Livestock Feed",
      desc: "Nutritionally balanced animal feed for poultry, cattle, and swine.",
      img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=400&q=80"
    },
    {
      title: "Seedlings",
      desc: "Certified, disease-resistant seedlings for high-yield farming seasons.",
      img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80"
    },
    {
      title: "Agro-Chemicals",
      desc: "Approved fertilizers, pesticides, and growth enhancers for optimal yield.",
      img: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=400&q=80"
    }
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-[#F7F5EF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C8922A] text-sm font-bold uppercase tracking-[0.2em]">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1B4D2E] mt-4 font-bold">Our Products</h2>
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

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    toast({
      title: "Inquiry Sent!",
      description: "Your inquiry has been received. We'll be in touch shortly.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <section id="contact" className="bg-[#1B4D2E]">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Info */}
          <div className="w-full lg:w-5/12 text-white">
            <span className="text-[#C8922A] text-sm font-bold uppercase tracking-[0.2em]">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 font-bold">Let's Work Together</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MdPhone size={24} className="text-[#C8922A] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-white/80">+234 (0) 800 AGRONIG</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MdEmail size={24} className="text-[#C8922A] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-white/80">info@agronigeriaallied.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MdLocationOn size={24} className="text-[#C8922A] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-white/80">12 Agricultural Plaza, Abuja FCT, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <FaWhatsapp size={24} className="text-[#C8922A] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer" className="inline-block bg-[#25D366] text-white text-sm font-bold px-4 py-2 rounded-full mt-2 hover:bg-[#20bd5a] transition-colors">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8922A] hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8922A] hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8922A] hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8922A] hover:text-white transition-colors">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#153a22] p-8 md:p-10 rounded-sm shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-none focus-visible:ring-[#C8922A]" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-none focus-visible:ring-[#C8922A]" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+234 XXX XXX XXXX" className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-none focus-visible:ring-[#C8922A]" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Service of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/5 border-white/20 text-white rounded-none focus:ring-[#C8922A]">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none border-[#1B4D2E] bg-white">
                              <SelectItem value="crop">Crop & Livestock</SelectItem>
                              <SelectItem value="value-chain">Value-Chain Activities</SelectItem>
                              <SelectItem value="consultancy">Consultancy & Training</SelectItem>
                              <SelectItem value="import-export">Import & Export</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your needs..." 
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/40 rounded-none min-h-[120px] focus-visible:ring-[#C8922A]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full bg-[#C8922A] text-white hover:bg-[#A67822] rounded-none h-14 text-base font-bold uppercase tracking-wider">
                    Send Inquiry
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
      
      {/* Map */}
      <div className="w-full h-[350px] border-t-4 border-[#C8922A]">
        <iframe 
          src="https://maps.google.com/maps?q=Abuja%2C%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Location Map"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0A1A10] text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <a href="#" className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-bold text-[#C8922A] tracking-wide">AgroNigeria</span>
              <span className="text-[0.6rem] font-sans text-white/80 tracking-[0.2em] uppercase">Allied Services</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Bridging the gap between fertile Nigerian farmlands and the global marketplace with uncompromised quality and integrity.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map(link => (
                <li key={link}>
                  <a href={link === 'Home' ? '#' : `#${link.toLowerCase()}`} className="text-white/60 hover:text-[#C8922A] transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {['Crop & Livestock', 'Value-Chain', 'Consultancy', 'Import & Export'].map(srv => (
                <li key={srv}>
                  <a href="#services" className="text-white/60 hover:text-[#C8922A] transition-colors text-sm">
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-3">
                <MdPhone className="text-[#C8922A] shrink-0 mt-1" />
                <span>+234 (0) 800 AGRONIG</span>
              </li>
              <li className="flex gap-3">
                <MdEmail className="text-[#C8922A] shrink-0 mt-1" />
                <span>info@agronigeriaallied.com</span>
              </li>
              <li className="flex gap-3">
                <MdLocationOn className="text-[#C8922A] shrink-0 mt-1" />
                <span>12 Agricultural Plaza, Abuja FCT, Nigeria</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#C8922A]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © 2025 AgroNigeria Allied Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/50 hover:text-white transition-colors"><FaFacebook /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><FaInstagram /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><FaLinkedin /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppBtn() {
  return (
    <a 
      href="https://wa.me/2348001234567" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      <FaWhatsapp size={32} className="text-white relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        Chat on WhatsApp
      </span>
    </a>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#F7F5EF] font-sans selection:bg-[#C8922A] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
}
