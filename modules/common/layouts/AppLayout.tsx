import { ReactNode } from "react";

import Link from "next/link";

import { SignIn } from "../components/sign-in-button/SignIn";
import { PageLinks } from "../components/page-links/PageLinks";

type AppLayoutProps = {
    children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="flex flex-col" id="app-layout">
            <header className="flex h-16 items-center justify-between p-4 shadow">
                <Link href="/" className="text-xl font-bold tracking-wider">
                    SPINTIRES
                </Link>

                <PageLinks />

                <div className="hidden md:block">
                    <SignIn />
                </div>
            </header>

            <main className="flex-1">{children}</main>
        </div>
    );
};
