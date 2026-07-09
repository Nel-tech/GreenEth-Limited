// components/FormSection.tsx
import { ReactNode } from 'react';

type FormSectionProps = {
    title: string;
    children: ReactNode;
};

export const FormSection = ({ title, children }: FormSectionProps) => {
    return (
        <div>
            <h3 className="text-[#1B4D2E] font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
            </h3>
            {children}
        </div>
    );
};