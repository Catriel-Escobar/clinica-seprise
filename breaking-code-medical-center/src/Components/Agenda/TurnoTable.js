import { IoPersonAddSharp } from "react-icons/io5";

const TurnoTable = ({ title, schedule, onActionClick }) => {
  return (
    <div className="flex-1 mb-10">
      <h3 className="text-center text-lg font-semibold mb-10">{title}</h3>
      <div className="-my-4 divide-y divide-gray-700">
        <div className="flex justify-between items-center flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <div className="w-16 text-center text-lg font-normal sm:text-center text-gray-400 shrink-0">Hora</div>
          <div className="w-48 text-center text-lg font-normal sm:text-center text-gray-400 shrink-0">Paciente</div>
          <div className="w-32 text-center text-lg font-normal sm:text-center text-gray-400 shrink-0">Pagado</div>
          <div className="w-16 text-center text-lg font-normal sm:text-center text-gray-400 shrink-0">Acción</div>
        </div>
        {schedule.map((slot, index) => (
          <div key={index} className="flex justify-between flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
            <div className="w-16 text-center text-lg font-normal sm:text-center text-gray-400 shrink-0">{slot.time}</div>
            <div className="w-48 text-center text-lg font-normal sm:text-center text-gray-400 shrink-0">
              {slot.occupied ? `${slot.patientName} ${slot.patientLastName}` : "Disponible"}
            </div>
            <div className="w-32 text-center text-lg font-normal sm:text-center text-gray-400 shrink-0">
              {slot.occupied ? (slot.confirmed ? "Sí" : "No") : ""}
            </div>
            <div className="w-16 text-center text-lg font-normal sm:text-center text-gray-400 shrink-0">
              <button
                className="rounded p-2 text-white bg-[#87b9a5]"
                onClick={() => onActionClick(slot)}
              >
                <IoPersonAddSharp />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TurnoTable;
