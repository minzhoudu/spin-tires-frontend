import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type TireType = "all" | "summer" | "winter" | "all-season";

type TireTypeProps = {
    type: TireType;
    isSelected: boolean;
    onSelect: (tireType: TireType) => void;
    Icon: LucideIcon;
    color: string;
};

export const TireType = ({
    type,
    isSelected,
    onSelect,
    Icon,
    color,
}: TireTypeProps) => {
    return (
        <div
            className={cn(
                "cursor-pointer rounded-lg border border-slate-300 bg-white p-2",
                isSelected && "border-2",
                isSelected && type === "summer" && "border-white bg-orange-500",
                isSelected && type === "winter" && "border-white bg-blue-500",
                isSelected &&
                    type === "all-season" &&
                    "border-white bg-red-500",
            )}
            onClick={() => onSelect(type)}
        >
            <Icon color={!isSelected ? color : "white"} size={36} />
        </div>
    );
};
