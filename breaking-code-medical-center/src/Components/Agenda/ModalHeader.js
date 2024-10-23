import { FaPencilAlt, FaTimes } from "react-icons/fa";

const ModalHeader = ({ handleClose, name, lastName, dni }) => (
  <div className="self-start items-center">
    <div className="flex justify-center items-center">
      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 sm:mx-0 sm:h-10 sm:w-10">
        <FaPencilAlt />
      </div>
      <h3 className="text-lg font-medium text-gray-900 text-center ml-4">
        {dni ? `Turno asignado a:  ${name} ${lastName}` : "Turno a asignar"}
      </h3>
    </div>
    <button
      onClick={handleClose}
      className="absolute right-4 top-5 text-gray-500 hover:text-gray-700"
    >
      <FaTimes className="h-6 w-6" />
    </button>
  </div>
);

export default ModalHeader;
