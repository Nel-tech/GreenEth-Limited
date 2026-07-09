// components/InputField.tsx
import { ChangeEvent } from 'react';

type InputFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
    required?: boolean;
};

export const InputField = ({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    required = false,
}: InputFieldProps) => {
    return (
        <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
                {label} {required && '*'}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4D2E] transition"
            />
        </div>
    );
};