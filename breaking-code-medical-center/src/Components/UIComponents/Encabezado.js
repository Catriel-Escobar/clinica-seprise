"use client";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const Encabezado = ({ titulo, consigna, onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
    if (onSearch) {
      onSearch("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (onSearch) {
      onSearch(searchText); 
    }
  };

  return (
    <div className="relative flex flex-col justify-center">
      <h2 className="bg-cyan-100 text-center text-3xl font-bold h-[60px] py-7">
        {titulo}
      </h2>
      <div className="flex justify-center items-center h-[80px] bg-cyan-100">
        <div className="w-[320px] font-medium text-xl text-end">
          {consigna}:
        </div>

        <form onSubmit={handleSubmit} className="flex relative w-96 m-0 px-6 h-[48px] rounded-xl">
          <input
            className="w-72 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="search"
            placeholder="Buscar..."
            value={searchText}
            onChange={handleSearchChange}
            style={{
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none",
            }}
          />
          {searchText && (
            <button
              type="button"
              className="absolute right-[79px] top-[calc(50%-3px)] transform -translate-y-[50%] pointer rounded-full p-2"
              onClick={handleClearSearch}
            >
              <FaTimes className="text-black" />
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
