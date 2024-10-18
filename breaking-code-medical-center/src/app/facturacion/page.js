import Encabezado from "@/Components/Encabezado";
import Image from "next/image";
import logo from "@/assets/logo.png";


const Facturacion = () => {


  return (
    <>
      <Encabezado titulo={"Facturación"} consigna={"Ingrese Id de paciente"} />

      <div className="bg-white block py-10">
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
                <div className="flex font-medium text-lg"> (del dia)</div>
              </div>
            </div>
          </div>

          <div className="flex flex-row border-t-2 border-l-2 border-r-2 border-black bg-slate-50 pt-5 h-20">
            <div className="p-3 font-medium">Sr/a:</div>
            <div className="py-3 font-medium">nombre (por parametro)</div>
            <div className="py-3 font-medium">apellido(por parametro)</div>
            <div className="p-3 font-medium">DNI(por parametro)</div>
          </div>

          <div className="flex flex-row border-b-2 border-l-2 border-r-2 border-black bg-slate-50 h-16">
            <div className="p-3 font-medium">Obra Social: (por parametro)</div>
          </div>

          <div className="flex flex-col mt-1 w-auto border-2 border-black bg-slate-50 h-64">
            <div className="p-3 font-medium text-gray-500">
              Descripción
              <div className="p-3 font-medium text-slate-950">Consulta Médica Fecha: (fecha por parametro)</div>
            </div>

          <div className="flex flex-row-reverse py-6">
            <div className="p-3 font-medium text-gray-500">
              <div className="p-3 font-medium text-slate-950 ">Valor de la consulta: $ (valor por parametro)</div>
            </div>
          </div>
          </div>



        </div>
      </div >
    </>
  )

}

export default Facturacion