import { memo } from "react";
import { FaSpinner } from "react-icons/fa";

const LiquidacionesForm = ({ loading, honorarios, payFees }) => {
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const totalEspecialidadPrecio = honorarios?.reduce((total, honorario) => {
    return total + (honorario.especialidadPrecio || 0);
  }, 0);

  return (
    <div className="grid place-content-center min-h-[calc(100vh-320px)]">
      <form
        className="bg-white container-slider rounded-xl px-8 pt-6 pb-8 mb-4 w-[576px] border-2 border-[#87b9a5] shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          payFees()
        }}
      >
        <h2 className="text-xl font-semibold mb-4">
          Liquidacion de Honorarios {honorarios?.fechaActual}
        </h2>
        <div className="flex justify-between items-center gap-x-2">
          <div className="input-container">
            <label
              className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-full px-2"
              htmlFor="paciente"
            >
              Doctor
            </label>
            <input
              readOnly
              value={honorarios ? honorarios[0]?.medicoNombre : ""}
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm min-w-[400px] px-3 py-2"
            />
          </div>
          <div className="input-container">
            <label
              className="absolute top-[-12px] left-3 bg-white rounded-sm max-w-[70px] px-2"
              htmlFor="idTurno"
            >
              Legajo
            </label>
            <input
              readOnly
              value={honorarios ? honorarios[0]?.medicoId : ""}
              className="text-center text-input border-2 border-[#87b9a5] max-w-[100px] min-w-[100px] rounded-sm px-3 py-2"
            />
          </div>
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
              value={
                honorarios
                  ? capitalizeFirstLetter(honorarios[0]?.nombreEspecialidad)
                  : ""
              }
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm px-3 py-2 min-w-[250px]"
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
              value={honorarios ? `$${honorarios[0]?.especialidadPrecio}` : ""}
              className="text-center text-input border-2 border-[#87b9a5] rounded-sm px-3 py-2 min-w-[250px]"
            />
          </div>
        </div>
        <table className="min-w-full border-collapse border border-gray-300 my-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Nombre</th>
              <th className="border border-gray-300 px-4 py-2">Fecha</th>
              <th className="border border-gray-300 px-4 py-2">Hora</th>
              <th className="border border-gray-300 px-4 py-2">Valor</th>
            </tr>
          </thead>
          <tbody>
            {honorarios &&
              honorarios.map((honorario, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {honorario.nombrePaciente} {honorario.apellidoPaciente}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {honorario.fechaTurno.split("-").reverse().join("-")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {honorario.horaTurno.substring(0, 5)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${honorario.especialidadPrecio}
                  </td>
                </tr>
              ))}
            <tr>
              <td className="border-gray-300 px-4 py-2"></td>
              <td className="border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 font-bold">Total</td>
              <td className="border border-gray-300 px-4 py-2 font-bold">
                ${totalEspecialidadPrecio}
              </td>
            </tr>
          </tbody>
        </table>

        <button
          type="submit"
          className={`flex justify-center items-center w-full sm:w-auto py-2 px-5 border-2 font-semibold rounded-xl shadow-md focus:outline-none focus:ring focus:ring-opacity-75 tracking-widest border-[#87b9a5] bg-[#87b9a5] text-white hover:bg-white hover:text-black`}
        >
          {loading ? <FaSpinner className="animate-spin" /> : "Liquidar honorarios"}
        </button>
      </form>
    </div>
  );
};

export default memo(LiquidacionesForm);
