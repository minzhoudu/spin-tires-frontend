export const Sidebar = () => {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h3>Filteri</h3>
            <div>
                <h4>Cena</h4>
                <div>
                    <input type="range" />
                </div>
            </div>
            <div>
                <h4>Kategorija</h4>
                <div>
                    <input type="checkbox" />
                </div>
            </div>
            <div>
                <h4>Kategorija</h4>
                <div>
                    <input type="checkbox" />
                </div>
            </div>
        </div>
    );
};
