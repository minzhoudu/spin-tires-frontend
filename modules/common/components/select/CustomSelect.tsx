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
    onChange: (value: string) => void;
};

export const CustomSelect = ({
    options,
    label,
    defaultValue,
    onChange,
}: CustomSelectProps) => {
    return (
        <Select onValueChange={onChange} defaultValue={defaultValue}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={label} />
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
