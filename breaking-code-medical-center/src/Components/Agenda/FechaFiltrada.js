"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";
import { addDays, isWeekend, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const FechaFiltrada = ({ onDateChange, onSearch }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  registerLocale("es", es);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date ? format(date, "yyyy-MM-dd") : null);
  };

  return (
    <div className="flex justify-center items-center h-[80px]">
      <div className="relative flex justify-center items-center">
        <label
          htmlFor="date"
          className="w-[320px] mb-1 pr-2 font-medium text-xl text-gray-700 text-end"
        >
          Seleccione una fecha:
        </label>
        <div className="flex relative w-96 m-0 px-6 h-[48px]">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            isClearable
            placeholderText="Selecciona una fecha"
            locale="es"
            minDate={new Date()}
            maxDate={addDays(new Date(), 15)}
            filterDate={(date) => !isWeekend(date)}
            dateFormat="dd/MM/yyyy"
            className={`w-72 h-[42px] mr-[-10px] border-2 px-[10px] border-gray-200 text-[#404e4e] bg-white rounded-xl text-lg focus:outline-none focus:ring focus:border-blue-300 ${
              selectedDate ? "pl-[85px]" : "pl-[20px]"
            }`}
          />
          <button
            onClick={onSearch}
            className="absolute right-[16px] rounded-lg bg-[#87b9a5] px-3 py-3 text-white"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
export default FechaFiltrada;