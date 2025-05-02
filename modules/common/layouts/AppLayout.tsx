import { ReactNode } from "react";

import Link from "next/link";

import { PageLinks } from "../components/page-links/PageLinks";
import { SignIn } from "../components/sign-in-button/SignIn";

type AppLayoutProps = {
    children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="flex h-screen flex-col">
            <header className="flex h-16 items-center justify-between border-b border-gray-500 p-4">
                <Link href="/" className="text-xl font-bold tracking-wider">
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
