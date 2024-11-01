import Image from "next/image";
import logoAFIP from "@/assets/afip.svg";
import qr from "@/assets/qr.jpeg";
import logoSPbn from "@/assets/logoSPbn.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaFilePdf  } from "react-icons/fa";


const Factura = ({ turnoData, formaDePago }) => {
    const getCurrentDate = () => {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date().toLocaleDateString('es-AR', options).replace(/\//g, '/');
    };

    const currentDate = getCurrentDate();

  const handleDownloadPDF = () => {
    const input = document.getElementById("factura");
  
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - position;

      while (heightLeft >= 0) {
        position = 0;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`factura${turnoData?.pacienteApellido} ${turnoData?.pacienteName}.pdf`);
    });
  };

  return (
    <div className="relative min-h-full my-10">
        <button
        onClick={handleDownloadPDF}
        className="absolute left-[calc(50%-125px)] top-[-20px] w-[250px] flex justify-center items-center sm:w-auto py-2 px-5 solid border-2 border-[#87b9a5] bg-[#87b9a5] text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-black hover:solid focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75 tracking-widest"
      >
        <FaFilePdf className="text-red-600 mr-2" sixe={50} /> Descargar Factura
      </button>
      <div
        id="factura"
        className="mt-10 w-[800px] mx-auto p-6 border border-gray-300 font-sans bg-white shadow-2xl m-5"
      >
        <div className="border border-black p-2 border-b-0 pb-2">
          <p className="text-center font-bold">ORIGINAL</p>
        </div>
        <div className="flex justify-between relative border border-black px-2">
          <div className="w-1/2 space-y-1 border-r border-black">
            <div className="flex justify-center items-center">
              <Image src={logoSPbn} className="w-[120px]" />
            </div>
            <p className="font-bold text-sm">Razón Social: <span className="font-normal">CLINICA SEPRICE SA</span></p>
            <p className="font-bold text-sm">Domicilio Comercial: <span className="font-normal">Av. Jujuy 255 - CABA</span></p>
            <p className="font-bold text-sm pb-4">Condición frente al IVA: <span className="font-normal">IVA Responsable Inscripto</span></p>
          </div>
          <div className="font-bold border border-t-0 border-black px-2 absolute left-1/2 transform -translate-x-1/2 bg-white">
            <p className="text-4xl text-center">B</p>
            <p className="text-sm pb-2">COD. 01</p>
          </div>
          <div className="w-1/2 pl-[50px]">
            <h2 className="text-xl font-bold mt-2 mb-12">FACTURA</h2>
            <div className="flex justify-between items-center font-bold text-sm">
              <p>Punto de Venta: 00002</p>
              <p>{`Comp. Nro: 000${turnoData?.numeroFactura}`}</p>
            </div>
            <p className="font-bold text-sm">Fecha de Emisión: <span className="font-normal">{currentDate}</span></p>
            <p className="font-bold text-sm">
              CUIT: <span className="font-normal">20184751764</span>
            </p>
            <p className="font-bold text-sm">
              Ingresos Brutos: <span className="font-normal">902-825875-6</span>
            </p>
            <p className="font-bold text-sm pb-4">
              Fecha de Inicio de Actividades: <span className="font-normal">28/11/2010</span>
            </p>
          </div>
        </div>

        <div className="mb-4 border border-t-0 border-black px-2 pt-0 grid grid-cols-2 gap-4">
          <div className="space-y-1 py-2">
            <p className="font-bold text-sm">
              Apellido y Nombre: <span className="font-normal">{`${turnoData?.pacienteApellido} ${turnoData?.pacienteName}`}</span>
            </p>
            <p className="font-bold text-sm">
              DNI:<span className="font-normal"> {turnoData?.pacienteDni} </span>
            </p>
            <p className="font-bold text-sm pb-2">
              Obra Social: <span className="font-normal">{turnoData?.obraSocial}</span>
            </p>
          </div>

          <div className="space-y-1 py-2">
            <p className="font-bold text-sm">
              Medio de pago: <span className="font-normal">{formaDePago}</span>
            </p>
            <p className="font-bold text-sm">
              Condición frente al IVA:{" "}
              <span className="font-normal">Consumidor Final </span>
            </p>
          </div>
        </div>

        <div className="h-[290px]">
          <table className="w-full border-collapse pb-4">
            <thead>
              <tr className="border border-black">
                <th className="p-2 text-start">Concepto</th>
                <th className="p-2 text-end">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-2">{`Consulta medica ${turnoData?.especialidadNombre} con el DR. ${turnoData?.medicoNombre}`}</td>
                <td className="pr-2 text-end">{`$${turnoData?.especialidadPrecio*0.79}`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-4 border border-black p-2 pb-2">
          <div className="w-2/3 space-y-1"></div>
          <div className="flex justify-between w-1/2 text-right space-y-1">
            <div className="text-start space-y-1">
              <p className="font-bold">Importe Neto Gravado: </p>
              <p className="font-bold">IVA 21%: </p>
              <p className="font-bold">IVA 10.5%: </p>
              <p className="font-bold">IVA 5%: </p>
              <p className="font-bold">IVA 2.5%: </p>
              <p className="font-bold">Importe Total:</p>
            </div>
            <div className="space-y-1">
              <p>{`$${turnoData?.especialidadPrecio*0.79}`}</p>
              <p>{`$${turnoData?.especialidadPrecio*0.21}`}</p>
              <p>$0,00</p>
              <p>$0,00</p>
              <p>$0,00</p>
              <p>{`$${turnoData?.especialidadPrecio}`}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-black pt-4 mt-4 text-xs">
          <div className="flex justify-between items-center mb-2">
            <div className="space-y-1">
              <div className="flex justify-start">
                <Image src={logoAFIP} className="logo w-[100px] mr-4" alt="qr"/>
                <p className="font-bold">Comprobante Autorizado</p>
              </div>
              <div>
                <p className="font-bold text-[10px]">
                  Esta Administración Federal no se responsabiliza por los datos
                  ingresados en el detalle de la operación
                </p>
              </div>
            </div>
            <div className="text-right space-y-1">
              <p>
                CAE Nº: <strong>69364547578700</strong>
              </p>
              <p>
                Fecha de Vto. de CAE: <span className="font-bold">{currentDate}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image src={qr} alt="Código de Barras" className="w-36 h-36" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factura;
