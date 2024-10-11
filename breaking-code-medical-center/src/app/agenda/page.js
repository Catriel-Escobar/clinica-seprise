"use client";
import Encabezado from "@/Components/Encabezado";
import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import ModalTurno from "@/Components/ModalTurno";

const Agenda = () => {
    const [active, setActive] = useState(false);

    const horas = [
        { hora: "8:00 a 9:00", turno: "Eugenia Bava" },
        { hora: "9:00 a 10:00", turno: "" },
        { hora: "10:00 a 11:00", turno: "Gustavo Baranda" },
        { hora: "11:00 a 12:00", turno: "" },
        { hora: "12:00 a 13:00", turno: "" },
        { hora: "13:00 a 14:00", turno: "" },
        { hora: "14:00 a 15:00", turno: "Alejandro Abadi" },
        { hora: "15:00 a 16:00", turno: "" },
        { hora: "16:00 a 17:00", turno: "Catriel Escobar" },
        { hora: "17:00 a 18:00", turno: "Marcelo Galimberti" },
    ];

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div>
            <Encabezado titulo={"Agenda de turnos médicos"} consigna={"Ingrese Id del médico"} />

            <section className="bg-white dark:bg-gray-900 antialiased">
                <div className="px-4 py-8 mx-auto lg:px-6 sm:py-16">
                    <div className="flex justify-center max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Agenda diaria
                        </h2>
                    </div>

                    <div className="flex justify-center items-center pt-8">
                        <label className="block pr-5 text-center text-slate-800">
                            Seleccione una fecha
                        </label>
                        <div className="relative max-w-sm">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input
                                id="datepicker-autohide"
                                datepicker
                                datepicker-autohide="true"
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Seleccione una fecha"
                            />
                        </div>
                    </div>

                    <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                        <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                            {horas.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center"
                                >
                                    <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                        {item.hora}
                                    </p>

                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {item.turno}
                                    </p>
                                    <button
                                        onClick={item.turno ? null : handleClick} // Deshabilita si hay un turno
                                        type="button"
                                        className={`m-2 rounded px-4 py-4 text-white ${item.turno ? 'bg-gray-300' : 'bg-[#87b9a5]'}`}
                                        disabled={!!item.turno} // Deshabilitar el botón si ya hay un turno
                                    >
                                        <IoPersonAddSharp />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ModalTurno active={active} handleClick={handleClick} />
        </div>
    );
};

export default Agenda;
