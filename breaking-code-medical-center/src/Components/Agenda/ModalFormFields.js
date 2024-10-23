const ModalFormFields = ({ name, lastName, dni, handleDniChange, handleKeyDown, time, medicoId }) => (
    <div className="self-center w-[450px] rounded bg-white pb-6">
    <div className="flex mt-4 space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          className="w-full border-none p-2 text-gray-500 outline-none focus:outline-none rounded-xl bg-gray-200"
          type="text"
          name="nombre"
          value={name}
          readOnly
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Apellido</label>
        <input
          className="w-full border-none p-2 text-gray-500 outline-none focus:outline-none rounded-xl bg-gray-200"
          type="text"
          name="apellido"
          value={lastName}
          readOnly
        />
      </div>
    </div>
    <div className="flex mt-4 space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">DNI</label>
        <input
          className="w-full border-none p-2 text-gray-500 outline-none focus:outline-none rounded-xl bg-gray-200 focus:ring focus:border-blue-300"
          type="text"
          name="dni"
          value={dni}
          onChange={handleDniChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Hora</label>
        <input
          className="w-full border-none bg-gray-200 p-2 text-gray-500 outline-none focus:outline-none rounded-xl"
          type="text"
          name="hora"
          value={time}
          readOnly
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">ID del Médico</label>
        <input
          className="w-full border-none bg-gray-200 p-2 text-gray-500 outline-none focus:outline-none rounded-xl"
          type="text"
          name="idMedico"
          value={medicoId}
          readOnly
        />
      </div>
    </div>
  </div>
  );
  
  export default ModalFormFields;
  