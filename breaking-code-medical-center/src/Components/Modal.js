import React from 'react'

const Modal = () => {
  
  
  
    return (
    <div>
        <div id="modal-component-container" className="fixed inset-0">
            <div className="modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75"></div>
                <div className="modal-space-container hidden sm:inline-block sm:align-middle sm:h-screen"></div>
                <div id="modal-container" className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
                    <div className="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="modal-wrapper-flex sm:flex sm:items-start" >
                            <div className="modal-icon mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                            <div className="modal-content text-center mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Eliminar elemento
                                </h3>
                                <div className="modal-text mt-2">
                                    <p className="text-gray-600 text-sm">
                                        Texto a agregar
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-actions bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button id="cancel-modal" className="w-full inline-flex justify-center rounded-md border-gray-300 shadow-md mt-3 
                                    px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                    focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Eliminar
                        </button>
                        <button id="close-modal" className="w-full inline-flex justify-center rounded-md border-gray-300 shadow-md px-4 py-2 
                                    bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                    focus:ring-blue-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal
