"use client";
import Encabezado from "@/Components/Encabezado";
import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import ModalTurno from "@/Components/ModalTurno";
import FechaFiltrada from "@/Components/FechaFiltrada";
import turnos from "@/Components/turnos";

const Agenda = () => {
    const [active, setActive] = useState(false);
    const [filterDate, setFilterDate] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filteredTurnos, setFilteredTurnos] = useState([]);
    const [noResultsMessage, setNoResultsMessage] = useState("");
    const [selectedTurno, setSelectedTurno] = useState(null); 
    const [medicoNombre, setMedicoNombre] = useState(""); 
    const [tituloFecha, setTituloFecha] = useState(""); 

    const handleClick = (turno) => {
        setSelectedTurno(turno); 
        setActive(!active); 
    };

    const handleSearch = (text, date) => {
        if (text.trim() === "") {
            setFilteredTurnos([]);
            setNoResultsMessage("");
            setMedicoNombre(""); 
            setTituloFecha(""); 
            return;
        }

        setSearchText(text);

        const parseDate = (dateString) => {
            const [day, month, year] = dateString.split('/').map(Number);
            return new Date(year, month - 1, day);
        };

        const turnosConFechas = turnos.map((turno) => ({
            ...turno,
            fecha: parseDate(turno.fecha),
        }));

        const selectedDate = date ? date : new Date(); 

        const filtered = turnosConFechas.flatMap((turno) => {
            const medicoCoincide = `${turno.nombre}${turno.apellido}`.toLowerCase().includes(text.toLowerCase());
            const fechaCoincide = turno.fecha.toDateString() === selectedDate.toDateString();
            return medicoCoincide && fechaCoincide
                ? turno.horarios.map((horario) => ({
                    ...horario,
                    medico: `${turno.nombre} ${turno.apellido}`,
                    especialidad: turno.especialidad,
                    valorConsulta: turno.valorConsulta,
                    fecha: turno.fecha,
                }))
                : [];
        });

        if (filtered.length === 0) {
            setFilteredTurnos([]);
            setNoResultsMessage("No se encontraron turnos para la fecha seleccionada.");
            setMedicoNombre(""); 
            setTituloFecha(""); 
        } else {
            setFilteredTurnos(filtered);
            setNoResultsMessage("");
            setMedicoNombre(filtered[0].medico); 
            setTituloFecha(selectedDate.toLocaleDateString("es-AR")); 
        }
    };

    const handleDateChange = (date) => {
        setFilterDate(date);
        handleSearch(searchText, date);
    };

    console.log(tituloFecha)
    return (
        <div>
            <Encabezado
                titulo={"Agenda de turnos médicos"}
                consigna={"Ingrese nombre del médico"}
                onSearch={(text) => handleSearch(text, filterDate)}
            />

            <section className="bg-white antialiased">
                <div className="px-4 py-8 mx-auto lg:px-6 sm:py-16">
                    <div className="flex justify-center max-w-4xl mx-auto text-center">
                        {medicoNombre && tituloFecha 
                        ?   <div>
                                <p className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900">
                                    Agenda del dia {tituloFecha}
                                </p>
                                <p className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900">
                                    Dr. {medicoNombre}
                                </p>
                            </div>
                        : 
                            <p className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900">
                                Agenda diaria    
                            </p>
                        }
                    </div>

                    <div className="flex flex-col justify-center items-center p-4">
                        <FechaFiltrada onDateChange={handleDateChange} />
                        <div className="mt-4">
                            <p>
                                Fecha Seleccionada:{" "}
                                {filterDate
                                    ? filterDate.toLocaleDateString("es-AR")
                                    : "No hay fecha seleccionada"}
                            </p>
                        </div>
                    </div>

                    <div className="flow-rootnpm max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                        <div className="-my-4 divide-y divide-gray-200">
                            {filteredTurnos.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center"
                                >
                                    <p className="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
                                        {item.hora}
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {item.turno === "Tomado" ? `${item.paciente.nombre} ${item.paciente.apellido}` : ""}
                                    </p>
                                    <button
                                        onClick={() => handleClick(item)} 
                                        type="button"
                                        className="m-2 rounded px-4 py-4 text-white bg-[#87b9a5]"
                                    >
                                        <IoPersonAddSharp />
                                    </button>
                                </div>
                            ))}
                        </div>
                        {noResultsMessage && (
                            <div className="text-red-500 text-center mt-4">{noResultsMessage}</div>
                        )}
                    </div>
                </div>
            </section>

            <ModalTurno active={active} handleClick={handleClick} turno={selectedTurno} />
        </div>
    );
};

export default Agenda;
