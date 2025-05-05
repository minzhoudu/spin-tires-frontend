import { MaxWidthWrapper } from "@/modules/common/components/max-width-wrapper/MaxWidthWrapper";
import { Banner } from "./components/banner/Banner";
import { TirePicker } from "./components/tire-picker/TirePicker";

export const HomePage = () => {
    return (
        <div>
            <section className="mt-0.5 mb-2 bg-slate-50">
                <Banner />

                <TirePicker
                    className="md:hidden"
                    bodyClasses="w-full"
                    backgroundColor="bg-slate-200"
                />

                <MaxWidthWrapper>
                    <div className="mt-2 flex gap-5">
                        <div className="flex h-52 grow items-center justify-center rounded-lg bg-slate-200">
                            Card 1
                        </div>
                        <div className="flex h-52 grow items-center justify-center rounded-lg bg-slate-200">
                            Card 2
                        </div>
                        <div className="flex h-52 grow items-center justify-center rounded-lg bg-slate-200">
                            Card 3
                        </div>
                        <div className="flex h-52 grow items-center justify-center rounded-lg bg-slate-200">
                            Card 4
                        </div>
                        <div className="flex h-52 grow items-center justify-center rounded-lg bg-slate-200">
                            Card 5
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </div>
    );
};
