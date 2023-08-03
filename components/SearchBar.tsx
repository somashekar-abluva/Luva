

export const SearchBar = () => {
    return (
        <div className="flex items-center bg-white rounded-md shadow-md">
            <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-2 py-1 rounded focus:outline-none"
            />
        </div>
    );
};

