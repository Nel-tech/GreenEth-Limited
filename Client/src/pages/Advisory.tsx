import { useEffect } from 'react';
import { useAdvisoryForm } from '../hooks/useAdvisoryForm';
import { NIGERIAN_STATES, NEEDS, SEASONS } from '../lib/constants';
import { InputField } from '../components/advisory/InputField';
import { SelectField } from '../components/advisory/SelectField';
import { NeedButton } from '../components/advisory/NeedButton';
import { SuccessScreen } from '../components/advisory/SuccessScreen';
import { FormSection } from '../components/advisory/FormSection';

export default function Advisory() {
    const {
        form,
        loading,
        submitted,
        isValid,
        setField,
        toggleNeed,
        handleSubmit
    } = useAdvisoryForm();

   
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const product = params.get('product');
        if (product) setField('crop', product);
    }, []);

    if (submitted) {
        return <SuccessScreen name={form.name} />;
    }

    return (
        <div className="min-h-screen bg-[#f7f5ef]">
            {/* Header */}
            <div className="bg-[#1B4D2E] py-8 px-6">
                {/* Top row: logo left, back button right */}
                <div className="max-w-2xl mx-auto flex items-center justify-between mb-8">
                    {/* Logo */}
                    <a href="/" className="flex flex-col items-center leading-none">
                        <div className="flex items-baseline">
                            <span className="text-2xl font-black italic tracking-tight" style={{ color: "#00D084" }}>
                                GREEN
                            </span>
                            <span className="text-2xl font-black italic tracking-tight" style={{ color: "#F4B000" }}>
                                ETH
                            </span>
                        </div>
                        <span className="text-center text-[9px] font-light tracking-[0.5em]" style={{ color: "#00D084" }}>
                            LIMITED
                        </span>
                    </a>

                    {/* Back button */}
                    <a
                        href="/"
                        className="flex items-center gap-2 text-green-200 hover:text-white text-sm font-medium transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </a>
                </div>

                {/* Title */}
                <div className="text-center">
                    <p className="text-[#F4B000] text-sm font-semibold tracking-widest uppercase mb-2">
                        Farm Advisory Request
                    </p>
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
                        Get Your Free Farm Advisory
                    </h1>
                    <p className="text-green-200 text-sm max-w-md mx-auto">
                        Fill in your details and our AI will generate a personalized report delivered to your WhatsApp.
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="max-w-2xl mx-auto px-4 py-10">
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-6">

                    {/* Personal Information */}
                    <FormSection title="Personal Information">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Full Name"
                                value={form.name}
                                onChange={(value) => setField("name", value)}
                                placeholder="e.g. Emeka Okafor"
                                required
                            />
                            <InputField
                                label="WhatsApp Number"
                                value={form.phone}
                                onChange={(value) => setField("phone", value)}
                                placeholder="e.g. 08012345678"
                                type="tel"
                                required
                            />
                        </div>
                    </FormSection>

                    {/* Farm Location */}
                    <FormSection title="Farm Location">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <SelectField
                                label="State"
                                value={form.state}
                                onChange={(value) => setField("state", value)}
                                options={NIGERIAN_STATES}
                                placeholder="Select state"
                                required
                            />
                            <InputField
                                label="LGA / Town"
                                value={form.lga}
                                onChange={(value) => setField("lga", value)}
                                placeholder="e.g. Makurdi"
                            />
                        </div>
                    </FormSection>

                    {/* Farm Details */}
                    <FormSection title="Farm Details">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Farm Size (hectares)"
                                value={form.farmSize}
                                onChange={(value) => setField("farmSize", value)}
                                placeholder="e.g. 2"
                            />
                            <SelectField
                                label="Farming Season"
                                value={form.season}
                                onChange={(value) => setField("season", value)}
                                options={SEASONS}
                                placeholder="Select season"
                            />
                        </div>
                        <div className="mt-4">
                            <InputField
                                label="Current / Planned Crop or Livestock"
                                value={form.crop}
                                onChange={(value) => setField("crop", value)}
                                placeholder="e.g. Maize, Cassava, Poultry, Catfish"
                                required
                            />
                        </div>
                    </FormSection>

                    {/* Needs */}
                    <div>
                        <h3 className="text-[#1B4D2E] font-semibold text-sm uppercase tracking-wider mb-1">
                            What Do You Need Help With? *
                        </h3>
                        <p className="text-xs text-gray-400 mb-4">Select all that apply</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {NEEDS.map((need) => (
                                <NeedButton
                                    key={need.id}
                                    id={need.id}
                                    label={need.label}
                                    isActive={form.needs.includes(need.id)}
                                    onClick={toggleNeed}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        onClick={handleSubmit}
                        disabled={!isValid || loading}
                        className=" cursor-pointer w-full py-3.5 rounded-xl bg-[#F4B000] hover:bg-[#b07d24] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm transition"
                    >
                        {loading ? "Submitting..." : "Submit Advisory Request →"}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                        Your information is private and will only be used to generate your farm advisory report.
                    </p>
                </div>
            </div>
        </div>
    );
}