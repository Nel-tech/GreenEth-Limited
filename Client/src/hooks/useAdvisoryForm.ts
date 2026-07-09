// hooks/useAdvisoryForm.ts
import { useState } from 'react';
import { FormData, initialFormData } from '../lib/types';
import { submitAdvisoryRequest } from '../services/advisoryService';

export const useAdvisoryForm = () => {
    const [form, setForm] = useState<FormData>(initialFormData);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const setField = (field: keyof FormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const toggleNeed = (id: string) => {
        setForm((prev) => ({
            ...prev,
            needs: prev.needs.includes(id)
                ? prev.needs.filter((n) => n !== id)
                : [...prev.needs, id],
        }));
    };

    const isValid =
        form.name &&
        form.phone &&
        form.state &&
        form.crop &&
        form.needs.length > 0;

    const handleSubmit = async () => {
        if (!isValid) return;

        setLoading(true);
        try {
            await submitAdvisoryRequest(form);
            setSubmitted(true);
        } catch (error) {
            console.error('Failed to submit advisory request:', error);
            // Handle error state if needed
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setForm(initialFormData);
        setSubmitted(false);
    };

    return {
        form,
        loading,
        submitted,
        isValid,
        setField,
        toggleNeed,
        handleSubmit,
        resetForm,
    };
};