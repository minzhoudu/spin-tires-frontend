"use client";

import { ReactNode, useState } from "react";

type TooltipProps = {
    content: ReactNode;
    children: ReactNode;
};

export const Tooltip = ({ content, children }: TooltipProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative cursor-default">
            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute bottom-full z-10 translate-x-1/2 rounded-md bg-gray-800 p-2 text-center text-white"
                >
                    {content}
                </div>
            )}

            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {children}
            </div>
        </div>
    );
};
