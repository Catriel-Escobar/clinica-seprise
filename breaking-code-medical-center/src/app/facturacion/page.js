"use client";
import AcreditarTurnoForm from "@/Components/facturacion/AcreditarTurnoForm";
import Encabezado from "@/Components/UIComponents/Encabezado";
import Factura from "@/Components/facturacion/Factura";
import Message from "@/Components/UIComponents/Message";
import { useState } from "react";
import Swal from "sweetalert2";

const Facturacion = () => {
  const [turnoData, setTurnoData] = useState(null);
  const [numeroFactura, setNumeroFactura] = useState(1687);
  const [open, setOpen] = useState(false);
  const [formaDePago, setFormaDePago] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const obrasSociales = [
    "MediFe",
    "OSDE",
    "Galeno",
    "Swiss Medical",
    "Federación Patronal",
    "Medicus",
    "UOM",
    "OSECAC",
  ];

  const getRandomObraSocial = () => {
    const randomIndex = Math.floor(Math.random() * obrasSociales.length);
    return obrasSociales[randomIndex];
  };

  const handleSearch = async (dni) => {
    if (dni) {
      try {
        const response = await fetch(
          `/api/facturacion/getPatientByDni?dni=${dni}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Error en la petición: ${response.status} ${response.statusText}. ${
              errorData.error || "No se pudo obtener información del paciente."
            }`
          );
        }

        const data = await response.json();
        const obraSocialAleatoria = getRandomObraSocial();

        const updatedTurnoData = {
          ...data,
          obraSocial: obraSocialAleatoria,
          numeroFactura: numeroFactura,
        };

        setNumeroFactura((prev) => prev + 1);
        setTurnoData(updatedTurnoData);

        if (updatedTurnoData.acreditado) {
          Swal.fire({
            icon: "info",
            title: "Información",
            text: "Turno confirmado y Facturado",
          });
        } else {
          setOpen(true);
        }
      } catch (error) {
        console.error("Error al buscar turno:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "Error al buscar el turno",
        });
      }
    }
  };

  const handleFormaDePagoChange = (event) => {
    setFormaDePago(event.target.value);
  };

  const handleAcreditarTurno = async () => {
    if (!formaDePago) {
      Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: "Selecciona una forma de pago",
      });
      return;
    }
    setIsLoading(true);
  
    try {
      const response = await fetch(
        `/api/facturacion/accreditMedicalAppointment?turnoId=${turnoData.turnoId}&formaDePago=${formaDePago}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        setMensaje("Turno acreditado correctamente");
        setTurnoData((prevData) => ({
          ...prevData,
          acreditado: true,
        }));
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Turno acreditado correctamente",
        });
        setOpen(false);
      } else {
        throw new Error("Error al acreditar el turno");
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Hubo un error al acreditar el turno");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al acreditar el turno",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-[calc(100vh-170px)]">
      <Encabezado
        titulo={"Facturacion de Atención Medica"}
        consigna={"Ingrese DNI de Paciente"}
        onSearch={handleSearch}
      />
      {!turnoData && (
        <Message message={"Introduzca el DNI para Acreditar Turno"} />
      )}
      {turnoData && !turnoData.acreditado && open && (
        <AcreditarTurnoForm
          turnoData={turnoData}
          handleFormaDePagoChange={handleFormaDePagoChange}
          handleAcreditarTurno={handleAcreditarTurno}
          isLoading={isLoading}
          mensaje={mensaje}
          formaDePago={formaDePago}
        />
      )}
      {turnoData && turnoData.acreditado && <Factura turnoData={turnoData} formaDePago={formaDePago} />}
    </div>
  );
};

export default Facturacion;
