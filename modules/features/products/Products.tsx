import {
    SidebarProvider,
    SidebarTrigger,
    useSidebar,
} from "@/components/ui/sidebar";
import { Sider } from "@/modules/common/components/sider/Sider";
import { ProductsList } from "./products-list/ProductsList";
import { Product } from "@/modules/common/models/product/product";
import { SiderTrigger } from "@/modules/common/components/sider/sider-trigger/SiderTrigger";
import { MaxWidthWrapper } from "@/modules/common/components/max-width-wrapper/MaxWidthWrapper";

export const Products = async () => {
    const products: Product[] = [
        {
            id: 1,
            title: "SAVA 155/65 R13 Perfecta 73T",
            price: 2030,
            description: "Description 1",
            category: "summer",
            brand: "SAVA",
            width: 155,
            height: 65,
            diameter: 13,
            speedIndex: "T",
            weight: 4.91,
            loadIndex: "73",
            countryOfOrigin: "Poland",
            ean: "5452000805539",
            image: "/images/tires1.png",
            quantity: 0,
            rating: {
                rate: 4.2,
                count: 24,
            },
        },
        {
            id: 2,
            title: "SAILUN 165/70 R13 Atrezzo Eco 79T",
            price: 3710,
            description: "Description 2",
            category: "summer",
            brand: "SAILUN",
            width: 165,
            height: 70,
            diameter: 13,
            speedIndex: "T",
            weight: 6.4,
            loadIndex: "79",
            countryOfOrigin: "Slovakia",
            ean: "1234567890",
            image: "/images/tires2.png",
            quantity: 21,
            rating: {
                rate: 4.5,
                count: 11,
            },
        },
        {
            id: 3,
            title: "WESTLAKE 155/65 R14 Z-107 ZuperEco 75T",
            price: 3836,
            description: "Description 3",
            category: "winter",
            brand: "WESTLAKE",
            width: 155,
            height: 65,
            diameter: 14,
            speedIndex: "T",
            weight: 5.9,
            loadIndex: "75",
            countryOfOrigin: "Slovakia",
            ean: "1234567890",
            image: "/images/tires1.png",
            quantity: 10,
            rating: {
                rate: 3.8,
                count: 4,
            },
        },
        {
            id: 4,
            title: "PETLAS 155/80 R12 ELEGANT PT311 77T",
            price: 3930,
            description: "Description 4",
            category: "all-season",
            brand: "PETLAS",
            width: 155,
            height: 80,
            diameter: 12,
            speedIndex: "T",
            weight: 5.4,
            loadIndex: "77",
            countryOfOrigin: "Belgium",
            ean: "1234567890",
            image: "/images/tires2.png",
            quantity: 17,
            rating: {
                rate: 4.8,
                count: 43,
            },
        },
        {
            id: 5,
            title: "SAVA 155/65 R13 Perfecta 73T",
            price: 2030,
            description: "Description 1",
            category: "summer",
            brand: "SAVA",
            width: 155,
            height: 65,
            diameter: 13,
            speedIndex: "T",
            weight: 4.91,
            loadIndex: "73",
            countryOfOrigin: "Poland",
            ean: "5452000805539",
            image: "/images/tires1.png",
            quantity: 0,
            rating: {
                rate: 4.2,
                count: 24,
            },
        },
        {
            id: 6,
            title: "SAILUN 165/70 R13 Atrezzo Eco 79T",
            price: 3710,
            description: "Description 2",
            category: "summer",
            brand: "SAILUN",
            width: 165,
            height: 70,
            diameter: 13,
            speedIndex: "T",
            weight: 6.4,
            loadIndex: "79",
            countryOfOrigin: "Slovakia",
            ean: "1234567890",
            image: "/images/tires2.png",
            quantity: 21,
            rating: {
                rate: 4.5,
                count: 11,
            },
        },
    ];

    return (
        <div>
            <SidebarProvider>
                <Sider />

                <SiderTrigger />

                <ProductsList products={products} />
            </SidebarProvider>
        </div>
    );
};
