import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ModalHeader from "./ModalHeader";
import ModalFormFields from "./ModalFormFields";
import ModalActionButtons from "./ModalActionButtons";

const ModalTurno = ({ active, setActive, turno, medicoId, date, update, handleTurnoClick }) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [turnoId, setTurnoId] = useState("");
  const [drName, setDrName] = useState("");

  useEffect(() => {
    if (active && turno) {
      setName(turno.patientName || "");
      setLastName(turno.patientLastName || "");
      setDni(turno.pacienteDni || "");
      setTurnoId(turno?.turnoId || "");
      setDrName(turno?.drName || "");
    }
  }, [active, turno]);

  const time = turno?.time;
  const fecha = date;

  const handleAddTurno = async () => {
    if (dni === "") {
      Swal.fire("Error", "El DNI no puede estar vacío", "error");
      return;
    }
  
    update(); 
    setLoading(true);
    setError(null);
  
    const data = {
      dni,
      medicoId,
      fecha,
      hora: time,
    };
  
    try {
      const response = await fetch("/api/turnos/createAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al agregar el turno");
      }
  
      const result = await response.json();
      setTurnoId(result.turnoId);
      Swal.fire("Éxito", "Turno agregado correctamente", "success");
      
      handleClose()
    } catch (error) {
      setError(error.message);
      Swal.fire("Error", error.message, "error");
    } finally {
      setLoading(false);
    }
  };
  
  const handleDeleteTurno = async () => {
    if (!turnoId) {
      Swal.fire("Error", "No se encontró el ID del turno para eliminar", "error");
      return;
    }
  
    const result = await Swal.fire({
      title: "¿Estás por cancelar el turno?",
      text: `Con el Dr. ${drName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    });
  
    if (result.isConfirmed) {
      update();
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetch(`/api/turnos/cancelAppointment?id=${turnoId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Error al eliminar el turno");
        }
  
        const result = await response.json();
  
        if (result.message) {
          Swal.fire("Éxito", result.message, "success");
        }
        handleClose()
       } catch (error) {
        console.error("Error en el cliente:", error);
        setError(error.message);
        Swal.fire("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    }
  };
  

  const handleDniChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setDni(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && dni.length === 8) {
      fetchPacienteByDni(dni);
    }
  };

  const fetchPacienteByDni = async (dni) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/paciente?dni=${dni}`
      );
      if (!response.ok) {
        throw new Error("Error al buscar paciente");
      }
      const data = await response.json();
      if (data && data.nombre && data.apellido) {
        setName(data.nombre);
        setLastName(data.apellido);
      } else {
        setError("Paciente no encontrado");
        setName("");
        setLastName("");
      }
    } catch (error) {
      setError(error.message);
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleClose = () => {
    setName("");
    setLastName("");
    setDni("");
    setActive(false);
    update();
  };

  if (!active) return null;

  return (
    <>
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>
          <div className="relative flex justify-center flex-col items-center bg-white rounded-xl shadow-xl transform transition-all sm:max-w-lg w-[600px] p-4">
            <ModalHeader
              handleClose={handleClose}
              name={name}
              lastName={lastName}
              dni={dni}
            />
            <ModalFormFields
              name={name}
              lastName={lastName}
              dni={dni}
              handleDniChange={handleDniChange}
              handleKeyDown={handleKeyDown}
              time={time}
              medicoId={medicoId}
            />
            <ModalActionButtons
              handleAddTurno={handleAddTurno}
              handleDeleteTurno={handleDeleteTurno}
              loading={loading}
              turnoId={turnoId}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalTurno;
