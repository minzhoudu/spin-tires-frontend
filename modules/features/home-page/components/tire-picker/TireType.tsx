import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type TireType = "all" | "summer" | "winter" | "all-season";

type TireTypeProps = {
    type: TireType;
    isSelected: boolean;
    onSelect: (tireType: TireType) => void;
    icon: ReactNode;
};

export const TireType = ({
    type,
    isSelected,
    onSelect,
    icon,
}: TireTypeProps) => {
    return (
        <div
            className={cn(
                "cursor-pointer rounded-lg border border-slate-300 bg-slate-100 p-2",
                isSelected && "border-2",
                isSelected && type === "summer" && "border-orange-500 bg-white",
                isSelected && type === "winter" && "border-blue-500 bg-white",
                isSelected &&
                    type === "all-season" &&
                    "border-red-500 bg-white",
            )}
            onClick={() => onSelect(type)}
        >
            {icon}
        </div>
    );
};
