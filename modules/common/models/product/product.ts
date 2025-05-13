export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: "summer" | "winter" | "all-season";
    brand: string;
    width: number;
    height: number;
    diameter: number;
    speedIndex: string;
    weight: number;
    loadIndex: string;
    countryOfOrigin: string;
    ean: string;
    quantity: number;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};
