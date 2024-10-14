"use client";

import ConsultaModal from "@/Components/ConsultaModal";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useState } from "react";

const HistoriaClinica = () => {
  const [dni, setDni] = useState("");
  const [paciente, setPaciente] = useState(null);
  const [historiaClinica, setHistoriaClinica] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [expandedConsultas, setExpandedConsultas] = useState(new Set());
  const http = "https://670848c88e86a8d9e42e92dd.mockapi.io/api";

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
      const respuestaPaciente = await axios.get(`${http}/pacientes?dni=${dni}`);
      const pacienteData = respuestaPaciente.data[0];
      setPaciente(pacienteData);

      try {
        // Obtener registros clínica por ID paciente
        const respuestaHistoria = await axios.get(
          `${http}/historia-clinica?paciente_id=${pacienteData.paciente_id}`,
        );

        const historiaData = respuestaHistoria.data;

        const registrosOrdenados = ordenarRegistros(historiaData);

        setHistoriaClinica(registrosOrdenados);
      } catch (historiaError) {
        if (historiaError.response && historiaError.response.status === 404) {
          setHistoriaClinica([]);
        } else {
          setMensaje("Ocurrió un error al buscar la historia clínica.");
        }
      }
    } catch (error) {
      setMensaje("Paciente no encontrado");
    } finally {
      setLoading(false);
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
        const respuesta = await axios.get(
          `${http}/historia-clinica?paciente_id=${paciente.paciente_id}`,
        );
        const registrosOrdenados = ordenarRegistros(respuesta.data);

        setHistoriaClinica(registrosOrdenados);
      } catch (error) {
        setMensaje("Ocurrió un error al actualizar la historia clínica.");
      }
    }
  };

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row p-6 bg-white min-h-screen">
      {/* Columna izquierda - Datos del paciente */}
      <div className="md:w-1/3 md:pr-6 border-r border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Historia Clínica</h2>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">DNI del paciente:</label>
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Introduce el DNI"
          />
          <button
            onClick={buscarPaciente}
            className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </div>

        {mensaje && <p className="text-red-500 mt-2">{mensaje}</p>}

        {paciente && (
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-4">Datos del Paciente</h3>
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
              <strong>Obra Social:</strong> {paciente.obraSocial ? "Sí" : "No"}
            </p>
            <p className="text-gray-800">
              <strong>Sexo:</strong>{" "}
              {paciente.sexo === "M" ? "Masculino" : "Femenino"}
            </p>
            <p className="text-gray-800">
              <strong>Tipo de Sangre:</strong> {paciente.tipoSangre}
            </p>
          </div>
        )}
      </div>

      {/* Columna derecha - Consultas históricas */}
      <div className="md:w-2/3 md:pl-6 mt-6 md:mt-0">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Consultas Históricas</h3>
          {historiaClinica && (
            <button
              onClick={agregarConsulta}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Agregar Consulta
            </button>
          )}
        </div>

        {historiaClinica ? (
          historiaClinica.length > 0 ? (
            <div className="overflow-x-auto">
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
                      key={registro.registro_id}
                      className="hover:bg-gray-100"
                    >
                      <td className="px-4 py-2 border-b text-gray-800">
                        {formatDate(registro.fecha)}
                      </td>
                      <td className="px-4 py-2 border-b text-gray-800">
                        {registro.medico}
                      </td>
                      <td className="px-4 py-2 border-b text-gray-800">
                        {registro.motivo}
                      </td>
                      <td className="px-4 py-2 border-b text-gray-800">
                        <div className="flex items-center">
                          <span
                            onClick={() => toggleExpand(registro.registro_id)}
                            className="cursor-pointer text-blue-600 hover:underline flex-grow"
                          >
                            {expandedConsultas.has(registro.registro_id)
                              ? registro.detalle
                              : truncateText(registro.detalle, 100)}
                          </span>
                          <button
                            onClick={() => toggleExpand(registro.registro_id)}
                            className="ml-2 focus:outline-none"
                          >
                            {expandedConsultas.has(registro.registro_id) ? (
                              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
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
            <p className="text-gray-600">
              No hay consultas registradas para este paciente.
            </p>
          )
        ) : (
          <p className="text-gray-600">
            Introduce el DNI para buscar al paciente y ver su historia clínica.
          </p>
        )}
      </div>
      {/* Modal para Agregar una consulta */}
      {modalOpen && (
        <ConsultaModal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          onSuccess={refrescarHistoriaClinica}
          historiaClinicaId={historiaClinica.id}
          pacienteId={paciente.paciente_id}
        />
      )}
    </div>
  );
};

export default HistoriaClinica;
