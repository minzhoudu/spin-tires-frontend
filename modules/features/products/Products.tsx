import { SidebarProvider } from "@/components/ui/sidebar";
import { Sider } from "@/modules/common/components/sider/Sider";
import { ProductsList } from "./products-list/ProductsList";

export const Products = async () => {
    return (
        <div>
            <SidebarProvider>
                <Sider />

                <ProductsList products={[]} />
            </SidebarProvider>
        </div>
    );
};
