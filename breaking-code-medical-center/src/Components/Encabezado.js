"use client";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const Encabezado = ({ titulo, consigna, onSearch }) => {
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
    }
  };

  return (
    <div>
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
    </div>
  );
};
export default Encabezado;