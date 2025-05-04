import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

import { Link as LinkType } from "../links";

type SubAccordionLinkProps = {
    link: LinkType;
};

export const SubAccordionLink = ({ link }: SubAccordionLinkProps) => {
    return (
        <AccordionItem value={link.href} key={link.href} className="px-2">
            <AccordionTrigger className="cursor-pointer">
                {link.label}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
                {link.subLinks?.map((sublink) => (
                    <Link
                        href={sublink.href}
                        key={sublink.href}
                        className="flex items-center gap-2 px-5 py-2 text-sm transition-colors duration-300 hover:bg-gray-100"
                    >
                        {sublink.icon && (
                            <sublink.icon size={20} color={sublink.iconColor} />
                        )}
                        {sublink.label}
                    </Link>
                ))}
            </AccordionContent>
        </AccordionItem>
    );
};
