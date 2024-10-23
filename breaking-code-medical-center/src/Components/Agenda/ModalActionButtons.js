const ModalActionButtons = ({
  handleAddTurno,
  handleDeleteTurno,
  loading,
  turnoId,
}) => (
  <div className="flex space-x-4 py-1 px-4 justify-end font-medium  w-full">
    {!turnoId ? (
      <button
        onClick={handleAddTurno}
        className="text-end w-24 px-4 py-2 text-white bg-emerald-500 rounded-xl focus:outline-none focus:ring focus:border-blue-300 hover:bg-emerald-700"
        disabled={loading}
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>
    ) : (
      <button
        onClick={handleDeleteTurno}
        className="w-24 px-4 py-2 text-white bg-red-500 rounded-xl focus:outline-none focus:ring focus:border-blue-300 hover:bg-red-700"
        disabled={loading}
      >
        {loading ? "Eliminando..." : "Eliminar"}
      </button>
    )}
  </div>
);

export default ModalActionButtons;
