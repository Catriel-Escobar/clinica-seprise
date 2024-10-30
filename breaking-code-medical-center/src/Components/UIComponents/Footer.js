"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {

  return (
    <footer className="flex w-full items-center h-[80px] bg-[#87b9a5]">
      <div className="container flex flex-col ml-20 w-[130px]">
      <Image src={logo} alt="Logo" className="" width="86" height="72" priority />
      </div>
      <div className="container flex flex-col gap-1 mx-8 w-[600px]">
        <p className=" text-white font-semibold text-base capitalize xl:text-center">Alejandro Abadi - Gustavo Baranda - María Eugenia Bava  Catriel Escobar - Marcelo Galimberti </p>
      </div>
      <div className="container flex flex-col gap-3 mx-4 w-[800px]">
        <p className=" text-white font-semibold text-sm xl:text-center"> Desarrollo de Sistemas de Información orientados a la gestión y apoyo a las decisiones  Tecnicatura en Diseño de Software </p>
      </div>
      <div className="container flex flex-col gap-3 mx-8 w-[400px]">
        <p className="text-white font-semibold text-sm xl:text-center"> - Copyright 2024 - </p>
      </div>
    </footer>
  );
}
export default Footer
