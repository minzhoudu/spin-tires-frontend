"use client";

import { useState } from "react";

import { Checkbox } from "../../checkbox/Checkbox";

type CategoryProps = {
    label?: string;
};

export const Category = ({ label }: CategoryProps) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (checked: boolean) => {
        setChecked(checked);
    };

    return <Checkbox checked={checked} onChange={handleChange} label={label} />;
};
