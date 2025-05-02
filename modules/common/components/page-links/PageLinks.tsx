'use client';

import Link from 'next/link';

import { LINKS } from './links';
import { usePathname } from 'next/navigation';

export const PageLinks = () => {
    const pathname = usePathname();

    console.log(pathname);

    return (
        <div className="flex gap-10">
            {LINKS.map((link) => (
                <Link
                    href={link.href}
                    key={link.href}
                    className={`${
                        pathname === link.href ? 'text-white' : 'text-gray-500'
                    } hover:text-white text-lg`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};
