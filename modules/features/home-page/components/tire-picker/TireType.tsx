import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TireType = "summer" | "winter" | "all-season";

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
                "cursor-pointer rounded-lg border border-slate-200 bg-white p-2",
                isSelected && "border-2",
                isSelected && type === "summer" && "border-orange-500",
                isSelected && type === "winter" && "border-blue-500",
                isSelected && type === "all-season" && "border-red-500",
            )}
            onClick={() => onSelect(type)}
        >
            {icon}
        </div>
    );
};
