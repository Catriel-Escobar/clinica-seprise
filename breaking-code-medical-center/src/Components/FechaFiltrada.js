"use client";
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale"; 
import { addDays, isWeekend } from "date-fns"; 

const FechaFiltrada = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  
  registerLocale("es", es);
  
  const formatFecha = (fecha) => {
    const opciones = { year: 'numeric',  month: '2-digit', day: 'numeric' };
    return fecha.toLocaleDateString('es-AR', opciones);
  };
 
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = formatFecha(date);
      console.log(formattedDate);
      onDateChange(date);
    } else {
      onDateChange(null);
    }
  };
  
  const isSelectableDate = (date) => {    
    return !isWeekend(date);
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex justify-center items-center gap-x-4">
        <label htmlFor="date" className="mb-1 text-gray-700">
          Seleccione una fecha:
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          isClearable
          placeholderText="Selecciona una fecha"
          locale="es"
          minDate={new Date()} 
          maxDate={addDays(new Date(), 15)} 
          filterDate={isSelectableDate} 
          dateFormat="dd/MM/yyyy"
          className={`w-60 p-2 mr-[-5px] border-2 border-gray-200 text-[#404e4e] bg-white rounded-xl text-lg outline-none focus:border-[#847C78 ${selectedDate? "pl-[60px]" : "pl-[20px]"}`}
          style={{ transition: "border-color 0.3s" }}
        />
      </div>
    </div>
  );
};

export default FechaFiltrada;
