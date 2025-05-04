import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Link } from "../links";

type SingleLinkProps = {
    link: Link;
};

export const SingleLink = ({ link }: SingleLinkProps) => {
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
};
