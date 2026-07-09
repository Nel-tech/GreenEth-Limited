// components/NeedButton.tsx
type NeedButtonProps = {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
};

export const NeedButton = ({ id, label, isActive, onClick }: NeedButtonProps) => {
    return (
        <button
            type="button"
            onClick={() => onClick(id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition text-left ${isActive
                    ? "border-[#1B4D2E] bg-[#1B4D2E] text-white"
                    : "border-gray-200 text-gray-600 hover:border-[#1B4D2E] hover:text-[#1B4D2E]"
                }`}
        >
            <span
                className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${isActive ? "border-white bg-white" : "border-gray-300"
                    }`}
            >
                {isActive && <span className="text-[#1B4D2E] text-xs font-bold">✓</span>}
            </span>
            {label}
        </button>
    );
};