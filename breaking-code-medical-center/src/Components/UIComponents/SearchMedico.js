"use client";
import { useState, useEffect, useCallback } from "react";
import { FaSearch, FaTimes, FaSpinner } from "react-icons/fa";
import { usePathname } from "next/navigation";

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const SearchAgenda = ({ onSearch, setSelectedMedico, setResultados, resultados, titulo, handleHonorarios }) => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false); 
  const pathname = usePathname();

  const debouncedSearch = useCallback(
    debounce(async (text) => {
      setLoading(true); 
      await onSearch?.(text);
    }, 1000),
    [onSearch]
  );

  useEffect(() => {
    if (searchText.length >= 3) {
      debouncedSearch(searchText);
    } else {
      setLoading(false); 
      setResultados(null);
    }
  }, [searchText, debouncedSearch, setResultados]);

  const handleSearchChange = (e) => setSearchText(e.target.value);

  const handleClearSearch = () => {
    setSearchText("");
    setResultados(null);
    onSearch?.("");
  };

  const handleSearch = (resultado) => {
 
    setSelectedMedico(resultado);
    if (pathname === "/liquidacion"){
      handleHonorarios()    
     }
      setSearchText("");
    setResultados(null);  
  };

  return (
    <div className="relative flex flex-col justify-center">
      <h2 className="bg-cyan-100 text-center text-3xl font-bold h-[60px] py-7">
        {titulo}
      </h2>
      <div className="flex justify-center items-center h-[80px] bg-cyan-100">
        <span className="w-[320px] font-medium text-xl text-end">
          Ingrese el nombre del médico:
        </span>

        <form onSubmit={(e) => e.preventDefault()} className="flex relative w-96 m-0 px-6 h-[48px] rounded-xl">
          <input
            className="w-72 px-3 py-2 mr-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={handleSearchChange}
          />
          {searchText && (
            <button
              type="button"
              className="absolute right-[79px] top-[calc(50%-3px)] transform -translate-y-[50%] rounded-full p-2"
              onClick={handleClearSearch}
            >
              <FaTimes className="text-black" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-[16px] rounded-lg bg-[#87b9a5] px-3 py-3 text-white"
            disabled={loading} 
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaSearch />}
          </button>
        </form>
      </div>
      {resultados?.length > 0 && (
        <div className="absolute top-[120px] ml-[270px] self-center w-72 text-center">
          <div className="z-50 p-2 absolute w-72 bg-gray-100 rounded-xl">
            {resultados.map((resultado, index) => (
              <div
                key={index}
                className="py-[10px] px-[20px] hover:bg-gray-200 hover:cursor-pointer hover:rounded-xl font-bold"
                onClick={() => handleSearch(resultado)} 
              >
                Dr. {resultado.nombre}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAgenda;
