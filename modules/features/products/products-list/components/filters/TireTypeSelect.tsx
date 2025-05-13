"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { CustomSelect } from "@/modules/common/components/select/CustomSelect";
import { tireTypeOptions } from "@/modules/common/components/select/data/tire-type-options";

export const TireTypeSelect = () => {
    const { push } = useRouter();
    const params = useSearchParams();

    const tireType = params.get("tireType");

    const defaultValue = tireTypeOptions.find(
        (option) => option.value === tireType,
    )?.value;

    const onChange = (value: string) => {
        const previousParams = new URLSearchParams(params);
        previousParams.set("tireType", value);
        push(`?${previousParams.toString()}`);
    };

    return (
        <CustomSelect
            options={tireTypeOptions}
            defaultValue={defaultValue ?? tireTypeOptions[0].value}
            onChange={onChange}
        />
    );
};
