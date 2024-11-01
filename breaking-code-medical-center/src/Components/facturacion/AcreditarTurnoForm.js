import { FaSpinner } from "react-icons/fa";

const AcreditarTurnoForm = ({
  turnoData,
  handleFormaDePagoChange,
  handleAcreditarTurno,
  isLoading,
  mensaje,
  formaDePago,
}) => {
  return (
    <div className="grid place-content-center min-h-[calc(100vh-320px)]">
      <form
        className="bg-white container-slider rounded-xl px-8 pt-6 pb-8 mb-4 w-[580px] border-2 border-[#87b9a5] shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleAcreditarTurno();
        }}
      >
        <h2 className="text-xl font-semibold mb-4">Acreditar Turno</h2>
        <div className="input-container">
          <label
            className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
            htmlFor="paciente"
          >
            Paciente
          </label>
          <input
            readOnly
            value={
              turnoData?.pacienteName
                ? `${turnoData?.pacienteName} ${turnoData?.pacienteApellido}`
                : ""
            }
            className="text-center text-input border-2 border-[#87b9a5] rounded-sm w-full px-3 py-2"
          />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <div className="input-container">
            <label
              className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
              htmlFor="idTurno"
            >
              DNI
            </label>
            <input
              readOnly
              value={turnoData?.pacienteDni ? turnoData?.pacienteDni : ""}
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm min-w-[250px] px-3 py-2"
            />
          </div>
          <div className="input-container">
            <label
              className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
              htmlFor="idTurno"
            >
              Horario
            </label>
            <input
              readOnly
              value={turnoData?.hora ? turnoData?.hora.substring(0, 5) : ""}
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm min-w-[250px] px-3 py-2"
            />
          </div>
        </div>
        <div className="input-container">
          <label
            className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
            htmlFor="paciente"
          >
            Doctor
          </label>
          <input
            readOnly
            value={turnoData?.medicoNombre ? turnoData?.medicoNombre : ""}
            className="text-center text-input border-2 border-[#87b9a5] rounded-sm w-full px-3 py-2"
          />
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <div className="input-container">
            <label
              className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
              htmlFor="especialidad"
            >
              Especialidad
            </label>
            <input
              readOnly
              value={turnoData?.especialidadNombre}
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm min-w-[250px] px-3 py-2"
            />
          </div>
          <div className="input-container">
            <label
              className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
              htmlFor="precio"
            >
              Valor de Consulta
            </label>
            <input
              readOnly
              value={
                turnoData?.especialidadPrecio
                  ? `$${turnoData?.especialidadPrecio}`
                  : ""
              }
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm min-w-[250px] px-3 py-2"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mb-5">
          <div className="input-container">
            <label
              className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
              htmlFor="precio"
            >
              Turno
            </label>
            <input
              readOnly
              value={turnoData?.acreditado ? "Comfirmado" : "Sin Confirmar "}
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm min-w-[250px] px-3 py-2"
            />
          </div>
          <div className="input-container relative">
            <label
              className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
              htmlFor="formaDePago"
            >
              Forma de Pago
            </label>
            <select
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm min-w-[250px] px-3 py-2 focus:outline-none focus:ring focus:ring-[#87b9a5] focus:border-transparent appearance-none"
              name="formaDePago"
              value={formaDePago}
              onChange={handleFormaDePagoChange}
            >
              <option value="" className="bg-white text-gray-800 rounded-xl">
                Seleccionar...
              </option>
              <option value="Efectivo" className="bg-white text-gray-800">
                Efectivo
              </option>
              <option value="Tarjeta" className="bg-white text-gray-800">
                Tarjeta
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className={`flex justify-center items-center w-full sm:w-auto py-2 px-5 border-2 font-semibold rounded-xl shadow-md focus:outline-none focus:ring focus:ring-opacity-75 tracking-widest ${
            turnoData?.acreditado || isLoading
              ? "border-gray-400 bg-gray-400 text-gray-700 cursor-not-allowed"
              : "border-[#87b9a5] bg-[#87b9a5] text-white hover:bg-white hover:text-black"
          }`}
          disabled={turnoData?.acreditado || isLoading}
        >
          {isLoading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Acreditar Turno"
          )}
        </button>
      </form>
    </div>
  );
};

export default AcreditarTurnoForm;
