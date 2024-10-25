"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import PacienteForm from "@/Components/RP/PacienteForm";

const RegistroPaciente = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    obraSocial: false,
    sexo: "",
    tipoSangre: "",
    fechaNacimiento: "",
  });
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value: rawValue, type, checked } = e.target;

    let value = rawValue;

    if (name === "tipoSangre") {
      value = value.toUpperCase();
    }

    if (name === "fechaNacimiento") {
      const formattedDate = new Date(value).toISOString().split("T")[0];
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/paciente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Éxito",
          text: "Paciente registrado con éxito",
        });
        setFormData({
          nombre: "",
          apellido: "",
          dni: "",
          obraSocial: false,
          sexo: "",
          tipoSangre: "",
          fechaNacimiento: "",
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error",
          html: `${errorData.error || "Error del Servidor"}`,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al conectar con el servidor",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="flex justify-center items-center bg-cyan-100 text-center text-3xl font-bold  py-7 h-[140px]">
        <h2>Registrar paciente</h2>
      </div>
      <div className="grid place-content-center h-[calc(100vh-230px)]">
        <PacienteForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />
      </div>
    </div>
  );
};

export default RegistroPaciente;
