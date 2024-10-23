"use client";
import { useState } from "react";
import Encabezado from "@/Components/Encabezado";
import FechaFiltrada from "@/Components/FechaFiltrada";

const Agenda = () => {
  const [resultados, setResultados] = useState(null);
  const [selectedMedico, setSelectedMedico] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = async (searchText) => {
    try {
      const response = await fetch(`/api/agenda?name=${searchText}`);
      if (response.ok) {
        const data = await response.json();
        setResultados(data);
      } else {
        console.error("Error en la respuesta de la API");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCheckAvailability = async () => {
    if (!selectedMedico || !selectedDate) {
      console.error("Faltan el médico o la fecha");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/turno?medicoId=${selectedMedico[1]}&fecha=${selectedDate}`
      );
      if (response.ok) {
        const data = await response.json();
      } else {
        console.error("Error en la respuesta de la API");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };
  console.log(selectedMedico)
  return (
    <div>
      <Encabezado
        titulo="Buscar Médico"
        consigna="Ingrese el nombre del médico"
        onSearch={handleSearch}
        setResultados={setResultados}
        resultados={resultados}
        setSelectedMedico={setSelectedMedico}
      />

      {selectedMedico && <p>{selectedMedico}</p>}
      {selectedMedico[0] && (
        <div>
          <FechaFiltrada onDateChange={handleDateChange} />
          <button onClick={handleCheckAvailability}>
            Verificar Disponibilidad
          </button>
        </div>
      )}
    </div>
  );
};

export default Agenda;
