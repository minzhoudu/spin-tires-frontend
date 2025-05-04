import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SingleLink } from "./link/SingleLink";
import { Sublink } from "./link/Sublink";
import { LINKS } from "./links";
import { PageLinksMobile } from "./PageLinksMobile";

export const PageLinks = () => {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList className="hidden gap-10 md:flex">
                    {LINKS.map((link) => {
                        if (!link.subLinks?.length) {
                            return <SingleLink link={link} key={link.id} />;
                        }

                        return <Sublink link={link} key={link.id} />;
                    })}
                </NavigationMenuList>
            </NavigationMenu>

            <PageLinksMobile />
        </>
    );
};
