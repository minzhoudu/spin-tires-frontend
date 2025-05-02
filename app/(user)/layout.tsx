import { Sidebar } from "@/modules/common/components/sidebar/Sidebar";

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            <div className="flex-1">
                <Sidebar />
            </div>
            <div className="mt-7 flex-5">{children}</div>
        </div>
    );
}
