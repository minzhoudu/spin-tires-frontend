import { Product } from "@/modules/common/models/product/product";
import { SingleProduct } from "../single-product/SingleProduct";

type ProductsListProps = {
    products: Product[];
};

export const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <div className="grid w-full grid-cols-1 gap-x-3 gap-y-10 p-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <SingleProduct key={product.id} product={product} />
            ))}
        </div>
    );
};
