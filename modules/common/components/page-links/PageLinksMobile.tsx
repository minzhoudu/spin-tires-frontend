"use client";

import { Accordion } from "@/components/ui/accordion";
import { MenuIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useWindowWidth } from "../../hooks/useWindowWidth";
import { SingleAccordionLink } from "./accordion-link/SingleAccordionLink";
import { SubAccordionLink } from "./accordion-link/SubAccordionLink";
import { LINKS } from "./links";

export const PageLinksMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (windowWidth > 768) {
            setIsOpen(false);
        }
    }, [windowWidth]);

    return (
        <div className="flex items-center justify-center md:hidden">
            <button
                className="cursor-pointer text-gray-500 hover:text-black"
                onClick={() => setIsOpen(!isOpen)}
            >
                <MenuIcon />
            </button>

            {isOpen && (
                <Accordion
                    type="single"
                    collapsible
                    className="absolute top-15 left-0 z-50 h-full w-full bg-white"
                >
                    {LINKS.map((link) => {
                        if (!link.subLinks?.length) {
                            return (
                                <SingleAccordionLink
                                    key={link.id}
                                    link={link}
                                />
                            );
                        }

                        return <SubAccordionLink key={link.id} link={link} />;
                    })}

                    <Link
                        href="/login"
                        className="mx-auto mt-5 flex w-1/3 min-w-30 items-center justify-center gap-2 border py-2 text-center text-sm"
                    >
                        <UserIcon size={18} />
                        Prijava
                    </Link>
                </Accordion>
            )}
        </div>
    );
};
