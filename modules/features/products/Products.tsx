import {
    Sidebar,
    SidebarHeader,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { ProductsList } from "./products-list/ProductsList";
import { Sider } from "@/modules/common/components/sider/Sider";

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
