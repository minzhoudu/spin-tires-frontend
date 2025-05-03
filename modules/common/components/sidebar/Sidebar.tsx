import { Category } from "./sidebar-category/Category";

export const Sidebar = () => {
    return (
        <div className="bg-sidebar flex h-full flex-col items-center gap-6 border-r border-gray-500 py-4">
            <h3 className="text-lg font-bold tracking-widest">FILTERI</h3>

            <div className="flex w-full flex-col items-center px-4">
                <h4>CENA</h4>
                <div className="flex items-center gap-2">
                    <p>Min</p>
                    <input type="range" min={0} max={100} />
                    <p>Max</p>
                </div>
            </div>

            <div className="h-0.5 w-full bg-gray-500"></div>

            <Category label="Kategorija 1" />

            <div className="h-0.5 w-full bg-gray-500"></div>

            <Category label="Kategorija 2" />

            <div className="h-0.5 w-full bg-gray-500"></div>

            <Category label="Kategorija 3" />
        </div>
    );
};
