import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import { LINKS } from "./links";
import { PageLinksMobile } from "./PageLinksMobile";

export const PageLinks = () => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList className="hidden gap-10 md:flex">
                    {LINKS.map((link) => {
                        if (!link.subLinks?.length) {
                            return (
                                <NavigationMenuItem key={link.id}>
                                    <NavigationMenuLink
                                        href={link.href}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        {link.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            );
                        }

                        return (
                            <NavigationMenuItem key={link.id}>
                                <NavigationMenuTrigger>
                                    {link.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex w-[400px] flex-col gap-2">
                                        {link.subLabel && (
                                            <div className="flex items-center gap-2">
                                                <ChevronRight size={16} />
                                                <h3>{link.subLabel}</h3>
                                            </div>
                                        )}
                                        {link.subLinks.map((sublink) => {
                                            return (
                                                <NavigationMenuLink
                                                    key={sublink.id}
                                                    href={sublink.href}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        {sublink.label}

                                                        <div className="flex items-center gap-2">
                                                            <ChevronRight />
                                                        </div>
                                                    </div>
                                                </NavigationMenuLink>
                                            );
                                        })}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>

            <PageLinksMobile />
        </>
    );
};
