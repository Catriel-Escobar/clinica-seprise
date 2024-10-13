"use client";
import Encabezado from "@/Components/Encabezado";
import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import ModalTurno from "@/Components/ModalTurno";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import FechaFiltrada from "@/Components/FechaFiltrada";


const Agenda = () => {

    const [active, setActive] = useState(false);
    const [filterDate, setFilterDate] = useState(null);

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

    const handleDateChange = (date) => {
        setFilterDate(date);
        console.log("Fecha seleccionada:", date);
      };


    return (
        <div>
            <Encabezado titulo={"Agenda de turnos médicos"} consigna={"Ingrese Id del médico"} />


            <section className="bg-white antialiased">
                <div className="px-4 py-8 mx-auto lg:px-6 sm:py-16">
                    <div className="flex justify-center max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 ">
                            Agenda diaria
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center items-center p-4">
                        <FechaFiltrada onDateChange={handleDateChange} />
                        <div className="mt-4">
                            <p>
                                Fecha Seleccionada:{" "}
                                {filterDate
                                    ? filterDate.toLocaleDateString("es-AR")
                                    : ""}
                            </p>
                        </div>
                    </div>

                    <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                        <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                            {horas.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center"
                                >
                                    <p className="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
                                        {item.hora}
                                    </p>

                                    <p className="text-lg px-12 font-semibold w-96 text-gray-900 ">
                                        {item.turno}
                                    </p>
                                    <div className="">
                                      
                                        <button
                                        onClick={item.turno ? null : handleClick} // Deshabilita si hay un turno
                                        type="button"
                                        className={`m-2 rounded px-4 py-4 text-white ${item.turno ? 'bg-gray-300' : 'bg-[#87b9a5]'}`}
                                        disabled={!!item.turno} // Deshabilitar el botón si ya hay un turno
                                    >
                                        <IoPersonAddSharp />
                                    </button>
                                        
                                    </div>
                                    <label
                                        className="cursor-pointer gap-4 p-4 has-[:checked]:bg-white"
                                    >
                                        <div className="items-center">
                                            Confirmado
                                            <input type="checkbox" className="my-2 mx-5 size-4 rounded border-gray-300" />
                                        </div>
                                    </label>

                                </div>
                            ))}
                        </div>
                    </div>
                </div >
            </section >

            <ModalTurno active={active} handleClick={handleClick} />
        </div >
    );
};

export default Agenda;

