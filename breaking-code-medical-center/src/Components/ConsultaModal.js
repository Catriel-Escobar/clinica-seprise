import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Modal from "react-modal";

const fechaActual = () => {
  const today = new Date();
  return format(today, "dd/MM/yyyy");
};

const ConsultaModal = ({
  isOpen,
  onRequestClose,
  onSuccess,
  pacienteId,
  medicoId,
  medicoNombre,
}) => {
  const [formData, setFormData] = useState({
    motivo: "",
    informe: "",
    usuarioId: medicoId,
    pacienteId: pacienteId,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
    }));
  }, [pacienteId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const http = "http://localhost:8080/api/";
    try {
      await axios.post(`${http}registros-clinicos`, formData);
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
      className="bg-white p-6 rounded-md w-[700px] mx-auto mt-20 shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
    >
      <h2 className="text-xl font-semibold mb-4">{"Agregar Consulta"}</h2>
      {error && <p className="text-red-500 text-lg font-bold mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Fecha:</label>
          <input
            type="text"
            value={fechaActual()}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700">Médico:</label>
          <input
            type="text"
            value={medicoNombre}
            readOnly
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
            name="informe"
            value={formData.informe}
            onChange={handleChange}
            required
            className="w-full h-[300px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
            className="px-4 py-2 bg-[#87b9a5] text-white rounded-md hover:bg-[#4b665b] transition-colors"
          >
            {"Agregar"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ConsultaModal;
