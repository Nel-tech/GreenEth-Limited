
import { FaWhatsapp } from "react-icons/fa6";
export default function WhatsAppBtn() {
    return (
        <a
            href="https://wa.me/2349056278922"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Chat on WhatsApp"
        >
            <span className="absolute inset-0 rounded-full bg-[#00D084] animate-ping opacity-75"></span>
            <FaWhatsapp size={32} className="text-white relative z-10" />

            {/* Tooltip */}
            <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                Chat on WhatsApp
            </span>
        </a>
    );
}

