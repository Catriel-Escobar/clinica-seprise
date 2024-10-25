"use client";
import { useState, useEffect } from "react";
import SearchAgenda from "@/Components/Agenda/SearchAgenda";
import FechaFiltrada from "@/Components/Agenda/FechaFiltrada";
import TurnoTable from "@/Components/Agenda/TurnoTable";
import ModalTurno from "@/Components/Agenda/ModalTurno";
import Footer from "@/Components/UIComponents/Footer";

const Agenda = () => {
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [resultados, setResultados] = useState(null);
  const [turnos, setTurnos] = useState(null);
  const [normalSchedule, setNormalSchedule] = useState([]);
  const [extraSchedule, setExtraSchedule] = useState([]);
  const [selectedTurno, setSelectedTurno] = useState(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchText) => {
    if (!searchText.trim()) {
      setResultados(null);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `/api/agenda/getDoctorByName?name=${searchText}`
      );
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

    const turnosOcupados =
      turnos?.map((turno) => {
        const timeParts = turno.hora.split(":");
        const time =
          parseInt(timeParts[0], 10) * 60 + parseInt(timeParts[1], 10);
        const patientName = turno.pacienteName;
        const patientLastName = turno.pacienteApellido;
        const confirmed = turno.acreditado;
        const esSobreTurno = turno.esSobreTurno;
        const pacienteDni = turno.pacienteDni;
        const medicoId = turno.medicoId;
        const turnoId = turno.turnoId;
        const drName = turno.medicoNombre;

        return {
          time,
          patientName,
          patientLastName,
          confirmed,
          esSobreTurno,
          pacienteDni,
          medicoId,
          turnoId,
          drName,
        };
      }) || [];

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += timeSlot) {
        const time = hour * 60 + minute;
        const occupiedTurn = turnosOcupados.find(
          (turno) => turno.time === time
        );

        if (occupiedTurn) {
          if (!occupiedTurn.esSobreTurno) {
            normalSchedule.push({
              time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
                2,
                "0"
              )}`,
              occupied: true,
              patientName: occupiedTurn.patientName,
              patientLastName: occupiedTurn.patientLastName,
              confirmed: occupiedTurn.confirmed,
              pacienteDni: occupiedTurn.pacienteDni,
              medicoId: occupiedTurn.medicoId,
              turnoId: occupiedTurn.turnoId,
              drName: occupiedTurn.drName,
            });
          } else {
            if (
              !extraSchedule.some((turno) => turno.time === occupiedTurn.time)
            ) {
              extraSchedule.push({
                time: `${String(hour).padStart(2, "0")}:${String(
                  minute
                ).padStart(2, "0")}`,
                occupied: true,
                patientName: occupiedTurn.patientName,
                patientLastName: occupiedTurn.patientLastName,
                confirmed: occupiedTurn.confirmed,
                pacienteDni: occupiedTurn.pacienteDni,
                medicoId: occupiedTurn.medicoId,
                turnoId: occupiedTurn.turnoId,
                drName: occupiedTurn.drName,
              });
            }
          }
        } else {
          normalSchedule.push({
            time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
              2,
              "0"
            )}`,
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

    const sobreTurnosEspecificos = [9, 10, 11]
      .map((hour) => {
        const minute = 50;
        const time = hour * 60 + minute;
        const occupiedTurn = turnosOcupados.find(
          (turno) => turno.time === time
        );

        if (
          !extraSchedule.some(
            (turno) =>
              turno.time ===
              `${String(hour).padStart(2, "0")}:${String(minute).padStart(
                2,
                "0"
              )}`
          )
        ) {
          return {
            time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
              2,
              "0"
            )}`,
            occupied: !!occupiedTurn,
            patientName: occupiedTurn ? occupiedTurn.patientName : null,
            patientLastName: occupiedTurn ? occupiedTurn.patientLastName : null,
            confirmed: occupiedTurn ? occupiedTurn.confirmed : false,
            pacienteDni: occupiedTurn ? occupiedTurn.pacienteDni : null,
            medicoId: occupiedTurn ? occupiedTurn.medicoId : null,
            turnoId: occupiedTurn ? occupiedTurn.turnoId : null,
            drName: occupiedTurn ? occupiedTurn.drName : null,
          };
        }

        return null;
      })
      .filter((turno) => turno !== null);

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

  return (
    <div>
      <SearchAgenda
        titulo="Buscar Médico"
        consigna="Ingrese el nombre del médico"
        onSearch={handleSearch}
        setSelectedMedico={setSelectedMedico}
        setResultados={setResultados}
        resultados={resultados}
        loading={loading}
        setLoading={setLoading}
      />
      {selectedMedico ? (
        <div className="flex justify-center items-center">
          <FechaFiltrada
            onDateChange={handleDateChange}
            onSearch={handleCheckAvailability}
          />
        </div>
      ) : (
        <div className="h-[calc(100vh-310px)] grid place-content-center">
          <p className="font-2xl">No hay búsquedas vigentes</p>
        </div>
      )}
      {selectedMedico && (
        <h2 className={`text-center text-2xl font-medium my-6 ${!turnos?"h-[calc(100vh-435px)]":""}`}>
          Turnos del Dr. {selectedMedico?.nombre}
        </h2>
      )}
      {turnos && (
        <>
          <h2 className="text-center text-xl font-medium mb-4">
            Turnos del día {selectedDate?.split("-").reverse().join("-")}
          </h2>
          <div className="flex justify-center max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16 space-x-20 mb-20">
            <TurnoTable
              title="Turnos"
              schedule={normalSchedule}
              onActionClick={handleTurnoClick}
            />
            <TurnoTable
              title="Sobre Turnos"
              schedule={extraSchedule}
              onActionClick={handleTurnoClick}
            />
          </div>
        </>
      )}
      <ModalTurno
        active={active}
        setActive={setActive}
        turno={selectedTurno}
        medicoId={selectedMedico?.medicoId}
        date={selectedDate}
        update={handleCheckAvailability}
      />
     
      
    
    </div>
  );
};

export default Agenda;
