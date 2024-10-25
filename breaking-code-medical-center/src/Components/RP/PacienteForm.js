import { FaSpinner } from "react-icons/fa";

const PacienteForm = ({ formData, handleChange, handleSubmit, loading, isFocused, setIsFocused }) => {
  return (
    <form
      className="bg-white container-slider rounded-xl px-8 pt-6 pb-8 mb-4 w-[580px] border-2 border-[#87b9a5] shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="input-container">
        <input
          required
          className="text-input border-2 border-[#87b9a5] rounded-lg w-full px-3 py-2 focus:outline-none focus:ring focus:ring-[#87b9a5] focus:border-transparent"
          placeholder="Ingrese el nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <label className="label" htmlFor="nombre">
          Nombre
        </label>
      </div>

      <div className="input-container">
        <input
          required
          className="text-input border-2 border-[#87b9a5] rounded-lg w-full px-3 py-2 focus:outline-none focus:ring focus:ring-[#87b9a5] focus:border-transparent"
          placeholder="Ingrese el apellido"
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <label className="label" htmlFor="apellido">
          Apellido
        </label>
      </div>

      <div className="input-container">
        <input
          required
          className="text-input border-2 border-[#87b9a5] rounded-lg w-full px-3 py-2 focus:outline-none focus:ring focus:ring-[#87b9a5] focus:border-transparent"
          placeholder="Ingrese el DNI"
          type="text"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
        />
        <label className="label" htmlFor="dni">
          DNI
        </label>
      </div>

      <div className="my-2 flex items-center">
        <label className="text-gray-700 mx-2">Obra Social:</label>
        <input
          type="checkbox"
          name="obraSocial"
          checked={formData.obraSocial}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
      </div>

      <div className="input-container relative">
        <select
          required
          className="text-input border-2 border-[#87b9a5] rounded-lg w-full px-3 py-2 focus:outline-none focus:ring focus:ring-[#87b9a5] focus:border-transparent appearance-none"
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <option value="" className="bg-white text-gray-800 rounded-xl">
            Seleccionar...
          </option>
          <option value="H" className="bg-white text-gray-800">
            Hombre
          </option>
          <option value="M" className="bg-white text-gray-800">
            Mujer
          </option>
        </select>
        <label
          className="label"
          htmlFor="sexo"
          style={{
            width: isFocused ? "50px" : "120px",
            background: "white",
          }}
        >
          Sexo
        </label>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.66l3.71-3.45a.75.75 0 011.04 1.08l-4.25 4a.75.75 0 01-1.04 0l-4.25-4a.75.75 0 010-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="input-container">
        <input
          required
          className="text-input border-2 border-[#87b9a5] rounded-lg w-full px-3 py-2 focus:outline-none focus:ring focus:ring-[#87b9a5] focus:border-transparent"
          placeholder="Ingrese el tipo de sangre"
          type="text"
          name="tipoSangre"
          value={formData.tipoSangre}
          onChange={handleChange}
        />
        <label className="label" htmlFor="tipoSangre">
          Tipo de Sangre
        </label>
      </div>

      <div className="input-container">
        <input
          required
          className="text-input border-2 border-[#87b9a5] rounded-lg w-full px-3 py-2 focus:outline-none focus:ring focus:ring-[#87b9a5] focus:border-transparent"
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          onBlur={(e) =>
            e.target.value === "" &&
            setFormData({ ...formData, fechaNacimiento: "" })
          }
        />
        <label className="label bg-white" htmlFor="fechaNacimiento">
          Fecha de Nacimiento
        </label>
      </div>

      <button
        type="submit"
        className="flex justify-center items-center w-full sm:w-auto py-2 px-5 solid border-2 border-[#87b9a5] bg-[#87b9a5] text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-black hover:solid focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75 tracking-widest"
      >
        {loading ? <FaSpinner className="animate-spin" /> : "Registrar Paciente"}
      </button>
    </form>
  );
};

export default PacienteForm;
