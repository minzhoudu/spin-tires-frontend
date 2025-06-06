import Image from "next/image";

import { cn } from "@/lib/utils";
import { Product } from "@/modules/common/models/product/product";
import { Snowflake, Sun, SunSnow } from "lucide-react";

type ProductProps = {
    product: Product;
};

export const SingleProduct = ({ product }: ProductProps) => {
    return (
        <div className="bg-background flex h-fit flex-col items-center rounded-lg border shadow-sm lg:max-w-80">
            <div className="h-48 w-48">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="w-full bg-orange-400">
                <div className="mx-auto w-11/12">
                    <h3 className="h-16 p-3 text-lg font-medium text-white">
                        {product.title}
                    </h3>
                </div>

                <div className="flex items-center justify-between px-6 py-3">
                    <p className="text-muted text-center text-sm">
                        {product.brand}
                    </p>
                    <p className="text-muted text-center text-sm">
                        {product.width}/{product.height} R{product.diameter}
                    </p>
                </div>
            </div>

            <div className="bg-secondary flex w-full items-center justify-between p-3">
                <h3 className="font-bold">RASPOLOŽIVOST</h3>
                <div
                    className={cn(
                        "rounded-full px-3 py-1 font-bold text-white",
                        product.quantity <= 0 ? "bg-red-500" : "bg-green-500",
                    )}
                >
                    {product.quantity}
                </div>
            </div>

            <div className="h-[1px] w-[95%] bg-black/30" />

            <div className="bg-secondary flex w-full items-center justify-between p-3">
                <div>
                    {product.category === "summer" && (
                        <Sun color="orange" size={30} />
                    )}
                    {product.category === "winter" && (
                        <Snowflake color="#99c4ce" size={30} />
                    )}
                    {product.category === "all-season" && (
                        <SunSnow color="#FF4437" size={30} />
                    )}
                </div>

                <div className="text-right">
                    <h2 className="text-2xl font-bold">
                        {product.price.toLocaleString("de-DE")} RSD
                    </h2>
                    <p className="text-muted-foreground text-sm">sa PDV-om</p>
                </div>
            </div>
        </div>
    );
};
