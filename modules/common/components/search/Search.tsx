type SearchProps = {
    label?: string;
    placeholder?: string;
};

export const Search = ({ label, placeholder }: SearchProps) => {
    return (
        <div className="flex items-center gap-2">
            {label && <h2 className="font-bold">{label}:</h2>}
            <input
                type="text"
                placeholder={placeholder}
                className="w-60 rounded-md border border-gray-300 px-2 py-1"
            />
        </div>
    );
};
