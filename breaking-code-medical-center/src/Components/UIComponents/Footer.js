import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {

  const fecha = new Date()
  const anio = fecha.getFullYear(); 

  return (
    <footer className="flex flex-col justify-center gap-y-5 items-center bg-[#87b9a5] pb-5">
      <div className="container flex justify-center">
      <Image src={logo} alt="Logo" className="" width="86"  priority />
      </div>
      <div className="container flex flex-col gap-1">
        <p className=" text-white font-semibold text-lg capitalize xl:text-center">Alejandro Abadi - Gustavo Baranda - María Eugenia Bava -  Catriel Escobar - Marcelo Galimberti </p>
      </div>
      <div className="container flex flex-col gap-3 ">
        <p className=" text-white font-semibold text-base xl:text-center"> Desarrollo de Sistemas de Información orientados a la gestión y apoyo a las decisiones - Tecnicatura en Desarrollo de Software </p>
      </div>
      <div className="container flex flex-col gap-3 ">
        <p className="text-white font-semibold text-base xl:text-center"> BreakingCode - Copyright {anio}</p>
      </div>
    </footer>
  );
}
export default Footer
