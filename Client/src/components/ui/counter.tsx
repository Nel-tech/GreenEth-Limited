import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
    end: number;
    label: string;
}

export default function Counter({
    end,
    label,
}: CounterProps) {
    const [count, setCount] = useState(0);

    const ref = useRef(null);

    const inView = useInView(ref, {
        once: true,
        margin: "-50px",
    });

    useEffect(() => {
        if (!inView) return;

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
    }, [inView, end]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            <span className="font-serif text-4xl font-bold text-[#00D084] md:text-5xl">
                {count}+
            </span>

            <span className="mt-2 font-medium text-[#00000]">
                {label}
            </span>
        </div>
    );
}