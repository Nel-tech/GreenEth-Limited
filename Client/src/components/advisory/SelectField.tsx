// components/SelectField.tsx
import { ChangeEvent } from 'react';

type SelectFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
    required?: boolean;
};

export const SelectField = ({
    label,
    value,
    onChange,
    options,
    placeholder = 'Select option',
    required = false,
}: SelectFieldProps) => {
    return (
        <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
                {label} {required && '*'}
            </label>
            <select
                value={value}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#1B4D2E] transition text-gray-700"
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};