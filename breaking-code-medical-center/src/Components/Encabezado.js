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
      <div className="bg-cyan-100 text-center text-4xl font-bold h-[100px] py-7">
        {titulo}
      </div>

      <div className="flex justify-center items-center h-[80px] bg-cyan-100">
        <div className="pr-6 font-semibold text-xl">{consigna}:</div>

        <form
          onSubmit={handleSearchSubmit}
          className="flex relative w-96 m-0 px-6 h-[48px] rounded-xl bg-white"
        >
          <input
            className="no-clear w-60 border-none bg-transparent py-4 text-gray-400 outline-none focus:outline-none"
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
              className="absolute right-[40px] rounded-lg p-2 top-[8px] text-gray-400"
            >
              <FaTimes />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-[8px] rounded-lg bg-blue-600 p-2 top-[8px] text-white"
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Encabezado;