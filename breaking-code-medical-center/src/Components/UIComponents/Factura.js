"use client";
import React from 'react';
import Image from "next/image";
import logo from "@/assets/logo.png";


const Factura = ({ distincion, apellido, nombre, dni, caracteristica, nominal }) => {

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <div className="bg-white block pt-10">
        <div className="max-w-2xl mx-auto">

          <div className="columns-2 gap-1 w-full ">
            <div className="flex w-auto bg-slate-50 h-40">
              <div className="flex flex-row border-2 border-black">
                <div className="p-2 ml-6 justify-center items-center">
                  <div className="block px-3 w-90 h-70 bg-black my-9">
                    <Image
                      src={logo}
                      alt="Logo"
                      className="w-full h-auto"
                      width="90"
                      height="70"
                      priority
                    />
                  </div>
                </div>
                <div className="flex font-serif text-3xl justify-center items-center font-bold">
                  Clínica Médica
                </div>
              </div>
            </div>


            <div className="flex flex-row-reverse pr-6 pt-5 w-auto border-t-2 border-l-2 border-r-2 border-black bg-slate-50 h-16">
              <div className="flex py-3 font-bold text-3xl">
                Factura
              </div>
            </div>

            <div className="flex flex-row-reverse pr-6 pt-2 w-auto border-b-2 border-l-2 border-r-2 border-black bg-slate-50 h-24">
              <div className="flex flex-row">
                <div className="flex pl-32 font-bold text-lg">Fecha: </div>
                <div className="flex font-medium text-lg"> {currentDate}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-row border-t-2 border-l-2 border-r-2 border-black bg-slate-50 pt-5 h-20">
            <div className="p-3 font-medium"> {distincion}</div>
            <div className="py-3 font-medium"> {apellido}</div>
            <div className="py-3 font-medium">{nombre} </div>

            <div className="py-3 pl-48 font-medium ">DNI: {dni}</div>
          </div>

          <div className="flex flex-row border-b-2 border-l-2 border-r-2 border-black bg-slate-50 h-16">
            <div className="p-3 font-medium">{caracteristica} {nominal}</div>
          </div>

         



        </div>
      </div >
    </>
  )
}

export default Factura
