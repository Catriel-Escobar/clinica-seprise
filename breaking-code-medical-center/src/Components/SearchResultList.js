import SearchResult from "./SearchResult";

const SearchResultsList = ({ resultados, setResultados, setSelectedMedico }) => {
    // console.log(resultados);

    return (
        <div className="z-50 p-2 absolute  w-72 bg-gray-100 rounded-xl">
            {resultados.map((resultado, index) => (
                <SearchResult 
                    key={index}
                    nombre={resultado.nombre} 
                    setSelectedMedico={setSelectedMedico}
                    setResultados={setResultados}
                    id={resultado.id}                   
                />
            ))}
        </div>
    );
};

export default SearchResultsList;
