// services/advisoryService.ts
import { FormData } from '../lib/types';

const MAKE_WEBHOOK_URL = "YOUR_MAKE_WEBHOOK_URL"; // Move to env variable

export const submitAdvisoryRequest = async (formData: FormData): Promise<void> => {
    // TODO: POST to Make.com webhook
    // const response = await fetch(MAKE_WEBHOOK_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1200));
};