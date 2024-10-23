import { FaRegCheckCircle } from "react-icons/fa";

const ModalMensaje = ({ active, handleClick }) => {
    return (
        <>
            {active && (
                <div
                    role="alertdialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    <div className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>
                    <div className="relative bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-emerald-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <FaRegCheckCircle className="text-emerald-500" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Acción realizada correctamente
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center sm:flex-row-reverse">
                            <button
                                onClick={handleClick}
                                className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalMensaje;
