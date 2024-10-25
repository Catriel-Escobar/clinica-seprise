import Encabezado from "@/Components/Encabezado";
import Factura from "@/Components/Factura";
import Footer from "@/Components/UIComponents/Footer";


const Liquidacion = () => {


  return (
    <>
      <Encabezado titulo={"Liquidación de Honorarios"} consigna={"Ingrese Id de médico"} />

      <Factura distincion={"Dr/a:"} apellido={"Rodriguez- "} nombre={"Juana"} dni={" 21212121"} caracteristica={"Especialidad:"} nominal={" Cardiologo"} fecha={"10/10/24"} />

      <div className="bg-white block pb-12">
        <div className="mt-1 max-w-2xl mx-auto">

          <div className="flex flex-col w-auto border-2 border-black bg-slate-50 h-64">
            <div className="p-3 font-medium text-gray-500">
              Descripción
              <div className="p-3 font-medium text-slate-950">Consultas médica adeudadas: </div>
            </div>

            <div className="flex flex-row-reverse py-6">
              <div className="p-3 font-medium text-gray-500">
                <div className="p-3 font-medium text-slate-950 ">Monto total de honorarios a abonar: $ (valor por parametro)</div>
              </div>
            </div>
          </div>

        </div>
      </div >
      
    </>
  )
}

export default Liquidacion;
