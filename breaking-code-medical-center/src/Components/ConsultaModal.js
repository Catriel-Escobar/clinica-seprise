import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";

const ConsultaModal = ({ isOpen, onRequestClose, onSuccess, pacienteId }) => {
  const [formData, setFormData] = useState({
    fecha: "",
    medico: "",
    motivo: "",
    detalle: "",
    paciente_id: pacienteId,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setFormData((prevData) => ({
      ...prevData,
      fecha: currentDate,
    }));
  }, [pacienteId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const http = "https://670848c88e86a8d9e42e92dd.mockapi.io";
    try {
      await axios.post(`${http}/api/historia-clinica`, formData);
      onSuccess();
      onRequestClose();
    } catch (err) {
      setError("Ocurrió un error al guardar la consulta.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel={"Agregar Consulta"}
      className="bg-white p-6 rounded-md max-w-lg mx-auto mt-20 shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
    >
      <h2 className="text-xl font-semibold mb-4">{"Agregar Consulta"}</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700">Médico:</label>
          <input
            type="text"
            name="medico"
            value={formData.medico}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700">Motivo:</label>
          <input
            type="text"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700">Detalle:</label>
          <textarea
            name="detalle"
            value={formData.detalle}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onRequestClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            {"Agregar"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ConsultaModal;
