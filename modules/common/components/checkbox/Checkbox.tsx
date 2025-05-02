import { CheckedIcon } from "@/public/svgs/checked-icon";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    onChange,
    label,
    className = "",
}) => {
    return (
        <label
            className={`flex cursor-pointer items-center gap-5 select-none ${className}`}
        >
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="sr-only"
                />
                <div
                    className={`h-5 w-5 rounded border-2 transition-colors ${
                        checked
                            ? "border-white bg-black"
                            : "border-gray-500 bg-transparent"
                    }`}
                >
                    {checked && <CheckedIcon />}
                </div>
            </div>
            {label && <span className="text-sm">{label}</span>}
        </label>
    );
};
