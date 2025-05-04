import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Link } from "../links";
import { cn } from "@/lib/utils";

type SingleLinkProps = {
    link: Link;
};

export const SingleLink = ({ link }: SingleLinkProps) => {
    return (
        <NavigationMenuItem key={link.id}>
            <NavigationMenuLink
                href={link.href}
                className={cn(navigationMenuTriggerStyle(), "text-lg")}
            >
                {link.label}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};
