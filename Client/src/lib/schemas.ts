import * as z from "zod";

export const contactFormSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(6, "Phone number is required"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(
        10,
        "Message must be at least 10 characters"
    ),
});

export type ContactFormValues = z.infer<
    typeof contactFormSchema
>;