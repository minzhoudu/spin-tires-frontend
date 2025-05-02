import Image from "next/image";

import { Product } from "@/modules/common/models/product/product";
import { Tooltip } from "@/modules/common/components/tooltip/Tooltip";

type ProductProps = {
    product: Product;
};
export const SingleProduct = ({ product }: ProductProps) => {
    return (
        <div className="flex flex-col justify-between gap-2 rounded-md border border-gray-300">
            <div className="flex flex-col gap-2">
                <div className="flex h-50 w-full justify-center">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={500}
                    />
                </div>
                <Tooltip content={product.title}>
                    <h2 className="w-full overflow-hidden px-4 text-center text-xl font-bold text-nowrap overflow-ellipsis">
                        {product.title}
                    </h2>
                </Tooltip>
            </div>

            <div className="">
                <p className="px-3">{product.description.slice(0, 100)}...</p>
                <p className="px-3 text-right">${product.price}</p>
            </div>
        </div>
    );
};
