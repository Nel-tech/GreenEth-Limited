import React from "react";

import {
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
import { contactFormSchema } from "@/lib/schemas";

export default function Contact() {
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
                        <span className="text-[#F4B000] text-sm font-bold uppercase tracking-[0.2em]">Get In Touch</span>
                        <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 font-bold">Let's Work Together</h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <MdPhone size={24} className="text-[#F4B000] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                                    <p className="text-white/80">+234 813 223 8080</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MdEmail size={24} className="text-[#F4B000] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Email</h4>
                                    <p className="text-white/80">info@agronigeriaallied.com</p>
                                </div>
                            </div>

                            {/* <div className="flex items-start gap-4">
                                <MdLocationOn size={24} className="text-[#F4B000] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Address</h4>
                                    <p className="text-white/80">12 Agricultural Plaza, Abuja FCT, Nigeria</p>
                                </div>
                            </div> */}

                            {/* <div className="flex items-start gap-4">
                                <FaWhatsapp size={24} className="text-[#F4B000] mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                                    <a href="https://wa.me/2348001234567" target="_blank" rel="noreferrer" className="inline-block bg-[#25D366] text-white text-sm font-bold px-4 py-2 rounded-full mt-2 hover:bg-[#20bd5a] transition-colors">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div> */}
                        </div>

                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/share/1an4nKy1Uf/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8922A] hover:text-white transition-colors">
                                <FaFacebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/greeneth_limited?igsh=MXhiajJxbjQ2NHlqOA==
" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8922A] hover:text-white transition-colors">
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

                                    <Button type="submit" size="lg" className="w-full bg-[#F4B000] text-black hover:bg-[#A67822] rounded-none h-14 text-base font-bold uppercase tracking-wider">
                                        Send Inquiry
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Map */}
            {/* <div className="w-full h-[350px] border-t-4 border-[#C8922A]">
                <iframe
                    src="https://maps.google.com/maps?q=Abuja%2C%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location Map"
                />
            </div> */}
        </section>
    );
}
