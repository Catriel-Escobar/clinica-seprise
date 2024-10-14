import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";
import ModalMensaje from "./ModalMensaje";

const ModalTurno = ({ active, handleClick, turno }) => {
    const [activeMensaje, setActiveMensaje] = useState(false);
    console.log(turno)
    const handleToggleMensaje = () => {
        setActiveMensaje(!activeMensaje);
    };

    return (
        <>
            {active && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>
                    <div className="relative bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <FaPencilAlt />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg font-medium text-gray-900 pb-6">
                                        Turno asignado a:
                                    </h3>
                                    <div className="w-96 rounded bg-white pb-6">
                                        <input className="w-96 border-none bg-slate-100 px-3 py-3 text-gray-500 outline-none focus:outline-none" type="search" name="nombre" placeholder="Nombre..." />
                                        <input className="mt-4 w-96 border-none bg-slate-100 px-3 py-3 text-gray-500 outline-none focus:outline-none" type="search" name="apellido" placeholder="Apellido..." />
                                        <input className="mt-4 w-96 border-none bg-slate-100 px-3 py-3 text-gray-500 outline-none focus:outline-none" type="search" name="dni" placeholder="DNI..." />
                                        <input className="mt-4 w-96 border-none bg-slate-100 px-3 py-3 text-gray-500 outline-none focus:outline-none" type="search" name="grupoFactor" placeholder="Grupo y Factor sanguíneo..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button onClick={handleToggleMensaje} className="w-full inline-flex justify-center rounded-md border-gray-300 shadow-md px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Agregar
                            </button>
                            <button onClick={handleToggleMensaje} className="w-full inline-flex justify-center rounded-md border-gray-300 shadow-md px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Modificar
                            </button>
                            <button onClick={handleToggleMensaje} className="w-full inline-flex justify-center rounded-md border-gray-300 shadow-md px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Eliminar
                            </button>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button onClick={handleClick} className="w-full inline-flex justify-center rounded-md border-gray-300 shadow-md px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <ModalMensaje active={activeMensaje} handleClick={handleToggleMensaje} />
        </>
    );
};

export default ModalTurno;
