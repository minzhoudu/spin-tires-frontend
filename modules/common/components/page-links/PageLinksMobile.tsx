"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useWindowWidth } from "../../hooks/useWindowWidth";
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
                    className="absolute top-16 left-0 w-full bg-white"
                >
                    {LINKS.map((link) => {
                        if (!link.subLinks?.length) {
                            return (
                                <AccordionItem
                                    value={link.href}
                                    key={link.href}
                                    className="px-2"
                                >
                                    <Link
                                        href={link.href}
                                        key={link.href}
                                        className="block w-full py-2 text-sm hover:underline"
                                    >
                                        {link.label}
                                    </Link>
                                </AccordionItem>
                            );
                        }

                        return (
                            <AccordionItem
                                value={link.href}
                                key={link.href}
                                className="px-2"
                            >
                                <AccordionTrigger className="cursor-pointer">
                                    {link.label}
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2 px-5">
                                    {link.subLinks?.map((subLink) => (
                                        <Link
                                            href={subLink.href}
                                            key={subLink.href}
                                            className="text-sm"
                                        >
                                            {subLink.label}
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}

                    <Link
                        href="/login"
                        className="mx-auto mt-5 block w-1/3 min-w-30 border py-2 text-center text-sm"
                    >
                        Login
                    </Link>
                </Accordion>
            )}
        </div>
    );
};
