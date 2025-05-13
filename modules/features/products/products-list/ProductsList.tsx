import { Product } from "@/modules/common/models/product/product";
import { SingleProduct } from "../single-product/Product";

type ProductsListProps = {
    products: Product[];
};
export const ProductsList = ({ products }: ProductsListProps) => {
    return <div>Products</div>;
};
