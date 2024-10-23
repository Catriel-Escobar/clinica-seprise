// agendaLogic.js
import { useState, useEffect } from "react";

const useAgendaLogic = () => {
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [resultados, setResultados] = useState(null);
  const [turnos, setTurnos] = useState(null);
  const [normalSchedule, setNormalSchedule] = useState([]);
  const [extraSchedule, setExtraSchedule] = useState([]);
  const [selectedTurno, setSelectedTurno] = useState(null);
  const [active, setActive] = useState(false);

  const handleSearch = async (searchText) => {
    if (!searchText.trim()) {
      setResultados(null);
      return;
    }

    try {
      const response = await fetch(`/api/agenda/getDoctorByName?name=${searchText}`);
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
        `/api/agenda/getTurnosByDoctorIdAndDate?medicoId=${selectedMedico.medicoId}&fecha=${selectedDate}`
      );
      if (response.ok) {
        const data = await response.json();
        setTurnos(data);
      } else {
        console.error("Error en la respuesta de la API");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  const generateSchedules = () => {
    if (!selectedMedico || !turnos) return;

    const startHour = 9;
    const endHour = 12;
    const timeSlot = selectedMedico.tiempoConsulta;
    const normalSchedule = [];
    const extraSchedule = [];

    const turnosOcupados = turnos.map((turno) => {
      const timeParts = turno.hora.split(":");
      const time = parseInt(timeParts[0], 10) * 60 + parseInt(timeParts[1], 10);
      return {
        time,
        ...turno,
      };
    });

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += timeSlot) {
        const time = hour * 60 + minute;
        const occupiedTurn = turnosOcupados.find((turno) => turno.time === time);

        if (occupiedTurn) {
          const scheduleEntry = {
            time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
            occupied: true,
            ...occupiedTurn,
          };

          if (!occupiedTurn.esSobreTurno) {
            normalSchedule.push(scheduleEntry);
          } else {
            if (!extraSchedule.some(turno => turno.time === occupiedTurn.time)) {
              extraSchedule.push(scheduleEntry);
            }
          }
        } else {
          normalSchedule.push({
            time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
            occupied: false,
            patientName: null,
            patientLastName: null,
            confirmed: false,
            pacienteDni: null,
            medicoId: null,
            turnoId: null,
            drName: null,
          });
        }
      }
    }

    const sobreTurnosEspecificos = [9, 10, 11].map((hour) => {
      const minute = 50;
      const time = hour * 60 + minute;
      const occupiedTurn = turnosOcupados.find((turno) => turno.time === time);

      if (!extraSchedule.some(turno => turno.time === `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`)) {
        return {
          time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
          occupied: !!occupiedTurn,
          ...occupiedTurn,
        };
      }

      return null;
    }).filter(turno => turno !== null);

    extraSchedule.push(...sobreTurnosEspecificos);

    setNormalSchedule(normalSchedule);
    setExtraSchedule(extraSchedule);
  };

  useEffect(() => {
    if (turnos) {
      generateSchedules();
    }
  }, [selectedDate, turnos]);

  const handleTurnoClick = (turno) => {
    setSelectedTurno(turno);
    setActive(true);
  };

  return {
    selectedMedico,
    setSelectedMedico,
    selectedDate,
    handleDateChange,
    resultados,
    handleSearch,
    turnos,
    normalSchedule,
    extraSchedule,
    selectedTurno,
    handleTurnoClick,
    active,
    setActive,
    handleCheckAvailability,
  };
};

export default useAgendaLogic;
