"use client";

import { cn } from "@/lib/utils";
import { Search, Snowflake, Sun, SunSnow } from "lucide-react";
import { useState } from "react";
import { TireType } from "./TireType";

type TirePickerProps = {
    className?: string;
    bodyClasses?: string;
    backgroundColor?: string;
};

export const TirePicker = ({
    className,
    bodyClasses,
    backgroundColor,
}: TirePickerProps) => {
    const [selectedTireType, setSelectedTireType] = useState<string>("summer");

    return (
        <div className={cn("flex flex-col gap-0.5", className)}>
            <h3
                className={cn(
                    "flex w-fit px-5 py-2 text-xl font-bold",
                    backgroundColor,
                )}
            >
                Pretraga guma
            </h3>

            <div className={cn("px-5 py-2", bodyClasses, backgroundColor)}>
                <div className="flex justify-center gap-5 px-5 md:justify-normal">
                    <TireType
                        type="summer"
                        isSelected={selectedTireType === "summer"}
                        onSelect={setSelectedTireType}
                        Icon={Sun}
                        color="orange"
                    />

                    <TireType
                        type="winter"
                        isSelected={selectedTireType === "winter"}
                        onSelect={setSelectedTireType}
                        Icon={Snowflake}
                        color="#99c4ce"
                    />

                    <TireType
                        type="all-season"
                        isSelected={selectedTireType === "all-season"}
                        onSelect={setSelectedTireType}
                        Icon={SunSnow}
                        color="#FF4437"
                    />
                </div>

                <div className="my-2 h-0.5 w-full bg-slate-100" />

                <div className="flex flex-col items-center gap-2">
                    <h2 className="px-5 py-2 text-center text-lg font-bold">
                        DIMENZIJE
                    </h2>

                    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-black py-2 sm:flex-row">
                        <div className="flex flex-col items-center gap-2">
                            <label htmlFor="width">Širina</label>
                            <input
                                id="width"
                                type="text"
                                placeholder="205"
                                className="py-1.5 text-center outline-none"
                            />
                        </div>

                        <div className="h-[1px] w-2/3 bg-black sm:h-10 sm:w-[1px]" />

                        <div className="flex flex-col items-center gap-2">
                            <label htmlFor="height">Visina</label>
                            <input
                                id="height"
                                type="text"
                                placeholder="55"
                                className="py-1.5 text-center outline-none"
                            />
                        </div>

                        <div className="h-[1px] w-2/3 bg-black sm:h-10 sm:w-[1px]" />

                        <div className="flex flex-col items-center gap-2">
                            <label htmlFor="diameter">Prečnik</label>
                            <input
                                id="diameter"
                                type="text"
                                placeholder="R17"
                                className="py-1.5 text-center outline-none"
                            />
                        </div>
                    </div>

                    <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-2 text-center text-lg font-bold text-white">
                        Pronađi gumu
                        <Search />
                    </button>
                </div>
            </div>
        </div>
    );
};
