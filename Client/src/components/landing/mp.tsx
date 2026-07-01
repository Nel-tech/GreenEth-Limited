import {
    MdAgriculture,
    MdFactory,
    MdSchool,
    MdOutlineImportExport,
    MdPhone,
    MdEmail,
    MdLocationOn
} from "react-icons/md";

export const services = [
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