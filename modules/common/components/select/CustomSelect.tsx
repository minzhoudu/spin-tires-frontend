"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TireType } from "@/modules/features/home-page/components/tire-picker/TireType";

export type Option = {
    value: TireType;
    label: string;
};

type CustomSelectProps = {
    options: Option[];
    label?: string;
    defaultValue?: string;
};

export const CustomSelect = ({
    options,
    label,
    defaultValue,
}: CustomSelectProps) => {
    const onChange = (value: string) => {
        console.log(value);
    };

    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={label} defaultValue={defaultValue} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
