import { ReactNode } from 'react';

import Link from 'next/link';

import { PageLinks } from '../components/page-links/PageLinks';
import { SignIn } from '../components/sign-in-button/SignIn';

type AppLayoutProps = {
    children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <header className="flex justify-between items-center p-4 gap-4 h-16">
                <Link href="/" className="font-bold tracking-wider text-xl">
                    SPINTIRES
                </Link>

                <PageLinks />

                <div>
                    <SignIn />
                </div>
            </header>
            <main className="flex-1">{children}</main>
        </div>
    );
};
