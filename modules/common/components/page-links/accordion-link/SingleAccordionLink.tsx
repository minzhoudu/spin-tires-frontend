import { AccordionItem } from "@/components/ui/accordion";
import Link from "next/link";

import { Link as LinkType } from "../links";

type SingleAccordionLinkProps = {
    link: LinkType;
};

export const SingleAccordionLink = ({ link }: SingleAccordionLinkProps) => {
    return (
        <AccordionItem value={link.href} key={link.href} className="px-2">
            <Link
                href={link.href}
                key={link.href}
                className="block w-full py-2 text-sm hover:underline"
            >
                {link.label}
            </Link>
        </AccordionItem>
    );
};
