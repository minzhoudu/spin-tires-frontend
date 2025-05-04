import { UserIcon } from "lucide-react";

export const SignIn = () => {
    return (
        <div className="flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-1 transition-colors duration-500 hover:bg-white hover:text-black">
            <UserIcon size={18} />
            Prijava
        </div>
    );
};
