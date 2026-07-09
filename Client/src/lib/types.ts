// types.ts
export type FormData = {
    name: string;
    phone: string;
    state: string;
    lga: string;
    farmSize: string;
    crop: string;
    season: string;
    needs: string[];
};

export const initialFormData: FormData = {
    name: "", phone: "", state: "", lga: "",
    farmSize: "", crop: "", season: "", needs: [],
};