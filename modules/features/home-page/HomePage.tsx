import { Banner } from "./components/banner/Banner";
import { TirePicker } from "./components/tire-picker/TirePicker";

export const HomePage = () => {
    return (
        <div>
            <section className="mt-0.5">
                <Banner />

                <TirePicker
                    className="my-3 md:hidden"
                    bodyClasses="w-full"
                    backgroundColor="bg-slate-200"
                />
            </section>
        </div>
    );
};
