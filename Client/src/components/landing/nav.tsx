
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "bg-[#1B4D2E]/90 py-4 shadow-md backdrop-blur-md"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex items-center justify-between md:grid md:grid-cols-3">
                    {/* Logo */}
                    <div className="flex justify-start">
                        <a href="#" className="flex flex-col items-center leading-none">
                            <div className="flex items-baseline">
                                <span
                                    className="text-3xl font-black italic tracking-tight md:text-5xl lg:text-4xl"
                                    style={{ color: "#00D084" }}
                                >
                                    GREEN
                                </span>

                                <span
                                    className="text-3xl font-black italic tracking-tight md:text-5xl lg:text-4xl"
                                    style={{ color: "#F4B000" }}
                                >
                                    ETH
                                </span>
                            </div>

                            <span
                                className="text-center text-[10px] font-light tracking-[0.5em] md:text-xs"
                                style={{ color: "#00D084" }}
                            >
                                LIMITED
                            </span>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center justify-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-white transition-colors hover:text-[#F4B000]"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <div className="flex justify-end">
                        <Button
                            className="
                                bg-[#F4B000]
                                text-black
                                border-none
                                rounded-none
                                px-6
                                cursor-pointer
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;