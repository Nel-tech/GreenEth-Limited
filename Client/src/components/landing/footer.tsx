
import {
    MdPhone,
    MdEmail,
} from "react-icons/md";
import {
  
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaXTwitter
} from "react-icons/fa6";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#0A1A10] text-white pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div>
                        <a href="#" className="flex flex-col items-center leading-none -ml-3">
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
                        <p className="text-white/60 text-sm leading-relaxed">
                            Bridging the gap between fertile Nigerian farmlands and the global marketplace with uncompromised quality and integrity.
                        </p>
                    </div>

                    <div>
                        <h4 className=" text-lg font-bold mb-6 text-white">Quick Links</h4>
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
                                <MdPhone className="text-[#F4B000] shrink-0 mt-1" />
                                <span>+234 813 223 8080</span>
                            </li>
                            <li className="flex gap-3">
                                <MdEmail className="text-[#F4B000] shrink-0 mt-1" />
                                <span>info@agronigeriaallied.com</span>
                            </li>
                    
                        </ul>
                    </div>

                </div>

                <div className="border-t border-[#C8922A]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm text-center md:text-left">
                        © {currentYear} GreenEth Limited. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/share/1an4nKy1Uf/" className="text-white/50 hover:text-white transition-colors"><FaFacebook /></a>
                        <a href="https://www.instagram.com/greeneth_limited?igsh=MXhiajJxbjQ2NHlqOA==" className="text-white/50 hover:text-white transition-colors"><FaInstagram /></a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors"><FaLinkedin /></a>
                        <a href="#" className="text-white/50 hover:text-white transition-colors"><FaXTwitter /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
