// components/SuccessScreen.tsx
import { useLocation } from 'wouter';

type SuccessScreenProps = {
    name: string;
};

export const SuccessScreen = ({ name }: SuccessScreenProps) => {
    const [, navigate] = useLocation();

    return (
        <div className="min-h-screen bg-[#f7f5ef] flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌱</span>
                </div>
                <h2 className="text-2xl font-bold text-[#1B4D2E] mb-2">Request Received!</h2>
                <p className="text-gray-500 text-sm mb-6">
                    Thank you <span className="font-semibold text-[#1B4D2E]">{name}</span>. Our AI advisory
                    system is compiling your personalized farm report. You'll receive it on WhatsApp shortly.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="w-full py-3 rounded-xl bg-[#1B4D2E] text-white font-semibold text-sm hover:bg-[#14532d] transition"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};