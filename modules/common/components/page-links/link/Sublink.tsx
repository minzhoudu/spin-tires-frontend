import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";

import { Link } from "../links";

type SublinkProps = {
    link: Link;
};

export const Sublink = ({ link }: SublinkProps) => {
    return (
        <NavigationMenuItem key={link.id}>
            <NavigationMenuTrigger className="text-lg">
                {link.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className="flex w-[400px] flex-col gap-2">
                    {link.subLabel && (
                        <div className="flex items-center gap-2 rounded-lg bg-orange-500 px-2 py-1 font-semibold text-white uppercase">
                            <ChevronRight size={16} />
                            <h3 className="text-center">{link.subLabel}</h3>
                        </div>
                    )}
                    {link.subLinks?.map((sublink) => {
                        return (
                            <NavigationMenuLink
                                key={sublink.id}
                                href={sublink.href}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {sublink.icon && (
                                            <sublink.icon
                                                size={20}
                                                color={sublink.iconColor}
                                            />
                                        )}
                                        {sublink.label}
                                    </div>

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
};
