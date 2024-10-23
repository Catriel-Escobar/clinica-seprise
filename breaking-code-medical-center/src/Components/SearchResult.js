
const SearchResult = ({ nombre, setSelectedMedico, id }) => {
    const handleSearch = () => {
         setSelectedMedico([nombre]);
    };
      
    return (
        <div 
            className="py-[10px] px-[20px] hover:[#efefef] hover:bg-gray-200 hover:cursor-pointer hover:rounded-xl hover:bold"
            onClick={handleSearch}
        >
            Dr. {nombre}
        </div>
    );
};

export default SearchResult;
