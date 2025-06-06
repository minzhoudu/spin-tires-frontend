import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TireTypeSelect } from "@/modules/features/products/products-list/components/filters/TireTypeSelect";

export const Sider = () => {
    return (
        <Sidebar>
            <SidebarHeader className="border-b py-4.5">
                <h1 className="text-xl font-bold tracking-wide">SPINTIRES</h1>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="mb-2 text-lg">
                        Filteri
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className="hover:bg-slate-200">
                                <TireTypeSelect />

                                {/* <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label> */}
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};
