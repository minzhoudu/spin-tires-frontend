import { Product } from "@/modules/common/models/product/product";
import { ProductsList } from "./products-list/ProductsList";
import { Search } from "@/modules/common/components/search/Search";

export const Products = async () => {
    const products = await fetch("https://fakestoreapi.com/products");
    const data = (await products.json()) as Product[];

    return (
        <div className="flex flex-col gap-4 px-4">
            <div className="flex items-center justify-between">
                <div></div>

                <Search label="PRETRAGA" placeholder="unesite ključnu reč..." />
            </div>

            <ProductsList products={data} />
        </div>
    );
};
