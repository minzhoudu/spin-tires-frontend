import { Product } from "@/modules/common/models/product/product";
import { SingleProduct } from "../single-product/Product";

type ProductsListProps = {
    products: Product[];
};
export const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <div className="grid h-[calc(100vh-150px)] grid-cols-1 gap-4 overflow-y-scroll sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
                <SingleProduct key={product.id} product={product} />
            ))}
        </div>
    );
};
