"use client";

import { Button } from "@/components/ui/button";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { ArrowRight } from "lucide-react";

export const SiderTrigger = () => {
    const { isMobile, setOpenMobile, openMobile } = useSidebar();

    if (isMobile) {
        return (
            <Button
                variant="ghost"
                onClick={() => setOpenMobile(!openMobile)}
                className="bg-secondary hover:bg-secondary/70 absolute bottom-5 left-5 cursor-pointer"
            >
                <ArrowRight />
            </Button>
        );
    }

    return null;
};
