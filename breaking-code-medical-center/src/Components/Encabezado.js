"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResultsList from "@/Components/SearchResultList";
const Encabezado = ({ titulo, consigna, onSearch, resultados, setResultado, setSelectedMedico }) => {
    const [searchText, setSearchText] = useState(""); 

    const handleSearchChange = (e) => {
        setSearchText(e.target.value); 
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault(); 
        if (onSearch) {
            onSearch(searchText); 
        }
    };

    const handleClearSearch = () => {
        setSearchText("");
        if (onSearch) {
            onSearch("");
            setResultado(null)
        }
    };

    return (
        <div className="relative flex flex-col justify-center">
            <div className="bg-cyan-100 text-center text-4xl font-bold h-[60px] py-7">
                {titulo}
            </div>

            <div className="flex justify-center items-center h-[80px] bg-cyan-100">
                <div className="pr-2 font-medium text-xl">{consigna}:</div>

                <form
                    onSubmit={handleSearchSubmit}
                    className="flex relative w-96 m-0 px-6 h-[48px] rounded-xl"
                >
                    <input
                        className="w-72 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        type="search"
                        name="search"
                        placeholder="Buscar..."
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    {searchText && (
                        <button
                            type="button"
                            onClick={handleClearSearch}
                        >
                        </button>
                    )}
                    <button
                        type="submit"
                        className="absolute right-[16px] rounded-lg bg-[#87b9a5] px-3 py-3 text-white"
                    >
                        <FaSearch />
                    </button>
                </form>              
            </div>
            <div className="absolute top-[120px] ml-[270px] self-center w-72 text-center">
              {resultados && resultados.length > 0 && (
                      <SearchResultsList resultados={resultados} setResultados={setResultado} setSelectedMedico={setSelectedMedico} selectedMedico={setSelectedMedico} />
                  )}
            </div>
        </div>
    );
};

export default Encabezado;
