"use client";
import Encabezado from "@/Components/Encabezado";
import { useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import Modal from "@/Components/Modal";

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
    { hora: "1600 a 17:00", turno: "Catriel Escobar" },
    { hora: "17:00 a 18:00", turno: "Marcelo Galimberti" },
  ];

  const handleClick = () => {
    setActive(!active);
    console.log(active);1    
  };

  return (
    <div>
      <Encabezado titulo={"Agenda"} consigna={"Ingrese Id del médico"} />
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Agenda diaria
            </h2>
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
                    onClick={handleClick}
                    type="submit"
                    className="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white"
                  >
                    <IoPersonAddSharp />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Modal active={active} handleClick={handleClick} />
    </div>
  );
};
export default Agenda;
