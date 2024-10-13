"use client";
import Encabezado from "@/Components/Encabezado";
import { useState } from "react";



const Liquidacion = () => {
  const [active, setActive] = useState(false);

  const datos = [
    { id: "Nombre: Dr/a", razon: "Juan" },
    { id: "Apellido:", razon: "Perez" },
    { id: "DNI:", razon: "21212121" },
    { id: "Especialidad:", razon: "Nombre de la especialidad" },
    {id: "Turnos atendidos", razon:["10/10/24 -", " 01/10/2024 -", " 25/09/2024 "]}
    
  ];

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Encabezado titulo={"Liquidación de Honorarios"} consigna={"Ingrese Id de médico"} />

      <section className="flex justify-items-center bg-white antialiased">
        <div className=" sm:py-16">
          <div className="flow-root justify-center mx-auto mt-8 sm:mt-12 ">
            <div className="pl-96 my-1">
              {datos.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center"
                >
                  <p className="text-lg font-normal text-gray-600 sm:text-right shrink-0">
                    {item.id}
                  </p>

                  <p className="text-lg font-semibold text-gray-900">
                    {item.razon}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="justify-start mx-auto mt-8 sm:mt-12">
          <div className="py-40 px-30 ">
            <button
              onClick={handleClick} 
              type="button"
              className="m-2 rounded px-4 py-4 bg-[#87b9a5] font-semibold text-white"
              
            >
              Imprimir liquidación
            </button>
          </div>
        </div>
      </section>


    </>
  )

}

export default Liquidacion