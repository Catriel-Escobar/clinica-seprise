"use client";

import hc from "@/assets/hc.png";
import ConsultaModal from "@/Components/ConsultaModal";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

const HistoriaClinica = () => {
  const [dni, setDni] = useState("");
  const [paciente, setPaciente] = useState(null);
  const [historiaClinica, setHistoriaClinica] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [expandedConsultas, setExpandedConsultas] = useState(new Set());
  const { user } = useAuth();
  const http = "http://localhost:8080/api/";

  // Formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Fecha inválida";
    return format(date, "dd/MM/yyyy", { locale: es });
  };

  // Función para buscar paciente por DNI
  const buscarPaciente = async () => {
    if (!dni.trim()) {
      setMensaje("Por favor, introduce un DNI.");
      return;
    }

    setLoading(true);
    setMensaje("");
    setPaciente(null);
    setHistoriaClinica(null);

    try {
      // Buscar paciente por DNI
      const respuestaPaciente = await axios.get(`${http}paciente?dni=${dni}`);
      const pacienteData = respuestaPaciente.data;
      setPaciente(pacienteData);

      const historiaData = pacienteData.registrosClinicos;
      const registrosOrdenados = ordenarRegistros(historiaData);
      setHistoriaClinica(registrosOrdenados);
    } catch (error) {
      if (error.response) {
        setMensaje("¡Paciente no encontrado!");
      } else if (error.request) {
        setMensaje("Error de conexión. Por favor, verifica tu red.");
      } else {
        setMensaje("Error inesperado. Inténtalo nuevamente más tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar el envío con Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buscarPaciente();
    }
  };

  // Función para abrir el modal para agregar una nueva consulta
  const agregarConsulta = () => {
    setModalOpen(true);
  };

  // Función para expansión de una consulta
  const toggleExpand = (registroId) => {
    const newExpanded = new Set(expandedConsultas);
    if (newExpanded.has(registroId)) {
      newExpanded.delete(registroId);
    } else {
      newExpanded.add(registroId);
    }
    setExpandedConsultas(newExpanded);
  };

  // Función para truncar texto
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Función para ordenar historia clinica
  const ordenarRegistros = (data) => {
    return [...data].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  };

  // Función para refrescar la historia clínica
  const refrescarHistoriaClinica = async () => {
    if (paciente) {
      try {
        const respuestaPaciente = await axios.get(
          `${http}paciente?dni=${paciente.dni}`,
        );

        const pacienteData = respuestaPaciente.data;

        const historiaData = pacienteData.registrosClinicos;
        const registrosOrdenados = ordenarRegistros(historiaData);

        setHistoriaClinica(registrosOrdenados);
      } catch (error) {
        setMensaje("Ocurrió un error al actualizar la historia clínica.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="bg-cyan-100 text-center text-4xl font-bold h-[50px] py-7">
        <h2>Historia Clínica</h2>
      </div>
      <div className="flex justify-center py-4 mb-6 bg-cyan-100">
        <div>
          <label className="pr-8 font-medium text-xl">DNI del paciente:</label>
          <input
            type="search"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Buscar..."
          />
          <button
            type="submit"
            onClick={buscarPaciente}
            className="m-2 rounded-lg bg-[#87b9a5] p-3 text-white"
            disabled={loading}
          >
            {loading ? "" : ""}
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        {mensaje ? (
          <p className="font-bold text-red-500 text-center text-lg my-2">
            {mensaje}
          </p>
        ) : (
          <p className="my-2 text-white">//</p>
        )}

        {paciente ? (
          <div className="flex flex-col lg:flex-row justify-center gap-3">
            {/* Columna izquierda - Datos del paciente */}
            <div className="min-w-60 mt-4 md:mt-0 px-4">
              <h3 className="text-xl font-bold mb-4">Datos del Paciente</h3>
              <p className="text-gray-800">
                <strong>Nombre:</strong> {paciente.nombre}
              </p>
              <p className="text-gray-800">
                <strong>Apellido:</strong> {paciente.apellido}
              </p>
              <p className="text-gray-800">
                <strong>DNI:</strong> {paciente.dni}
              </p>
              <p className="text-gray-800">
                <strong>Fecha de Nac:</strong>{" "}
                {formatDate(paciente.fechaNacimiento)}
              </p>
              <p className="text-gray-800">
                <strong>Obra Social:</strong>{" "}
                {paciente.obraSocial ? "Sí" : "No"}
              </p>
              <p className="text-gray-800">
                <strong>Sexo:</strong>{" "}
                {paciente.sexo === "M" ? "Masculino" : "Femenino"}
              </p>
              <p className="text-gray-800">
                <strong>Tipo de Sangre:</strong> {paciente.tipoSangre}
              </p>
            </div>

            <div className="border-r border-gray-300 mx-5"></div>

            {/* Columna derecha - Consultas históricas */}
            <div className="mt-4 md:mt-0 px-4 ">
              {historiaClinica && (
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Consultas Históricas</h3>
                  <div className="me-4 mb-3">
                    <button
                      onClick={agregarConsulta}
                      className="bg-[#87b9a5] text-white px-4 py-2 rounded-md hover:bg-[#4b665b] transition-colors"
                    >
                      Agregar Consulta
                    </button>{" "}
                  </div>
                </div>
              )}

              {historiaClinica.length > 0 ? (
                <div className="overflow-x-auto pr-5">
                  <table className="min-w-full bg-white border">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border-b text-left text-gray-700">
                          Fecha
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-700">
                          Médico
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-700">
                          Motivo
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-700">
                          Detalle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {historiaClinica.map((registro) => (
                        <tr
                          key={registro.registroClinicoId}
                          className="hover:bg-gray-100"
                        >
                          <td className="px-4 py-2 border-b text-gray-800">
                            {formatDate(registro.fecha)}
                          </td>
                          <td className="px-4 py-2 border-b text-gray-800">
                            {registro.medicoNombre}
                          </td>
                          <td className="px-4 py-2 border-b text-gray-800">
                            {registro.motivo}
                          </td>
                          <td className="px-4 py-2 border-b text-gray-800">
                            <div className="flex items-center">
                              <span
                                onClick={() =>
                                  toggleExpand(registro.registroClinicoId)
                                }
                                className="cursor-pointer text-blue-600 hover:underline flex-grow"
                              >
                                {expandedConsultas.has(
                                  registro.registroClinicoId,
                                )
                                  ? registro.informe
                                  : truncateText(registro.informe, 80)}
                              </span>
                              <button
                                onClick={() =>
                                  toggleExpand(registro.registroClinicoId)
                                }
                                className="ml-2 focus:outline-none"
                              >
                                {expandedConsultas.has(
                                  registro.registroClinicoId,
                                ) ? (
                                  <FaChevronUp className="h-5 w-5 text-gray-500" />
                                ) : (
                                  <FaChevronDown className="h-5 w-5 text-gray-500" />
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600 font-bold">
                  No hay consultas registradas para este paciente.
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <Image src={hc} alt="hc" className="max-w-xs mb-4" />
            <h2 className="text-gray-600 font-bold text-lg text-center">
              Introduce el DNI para ver la historia clínica del paciente
            </h2>
          </div>
        )}
        {/* Modal para Agregar una consulta */}
        {modalOpen && (
          <ConsultaModal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            onSuccess={refrescarHistoriaClinica}
            historiaClinicaId={historiaClinica.id}
            pacienteId={paciente.pacienteId}
            medicoId={user?.usuarioId}
            medicoNombre={user?.nombre}
          />
        )}
      </div>
    </>
  );
};

export default HistoriaClinica;
