import Encabezado from "@/Components/Encabezado";
import Factura from "@/Components/Factura";
import Footer from "@/Components/UIComponents/Footer";


const Facturacion = () => {


  return (
    <>
      <Encabezado titulo={"Facturación de atención médica"} consigna={"Ingrese Id de paciente"} />

      <div className="h-auto">
        <Factura distincion={"Sr/a:"} apellido={"Gutierrez- "} nombre={"Pablo"} dni={" 21212121"} caracteristica={"Obra Social:"} nominal={" Medicus"} />

        <div className="bg-white block pb-12 h-72">
          <div className="mt-1 max-w-2xl mx-auto">

            <div className="flex flex-col w-auto border-2 border-black bg-slate-50 h-64">
              <div className="p-3 font-medium text-gray-500">
                Descripción
                <div className="p-3 font-medium text-slate-950">Consulta Médica Fecha: </div>
              </div>

              <div className="flex flex-row-reverse py-6">
                <div className="p-3 font-medium text-gray-500">
                  <div className="p-3 font-medium text-slate-950 ">Valor de la consulta: $ (valor por parametro)</div>
                </div>
              </div>
            </div>

          </div>
        </div >
      </div>
      
    </>
  );
};

export default Facturacion;
