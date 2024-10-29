import Encabezado from "@/Components/UIComponents/Encabezado";
import Message from "@/Components/UIComponents/Message";

const Liquidacion = () => {
  return (
    <div className="min-h-[calc(100vh-170px)]">
      <Encabezado
        titulo={"Liquidación de Honorarios"}
        consigna={"Ingrese Id de médico"}
      />
      <Message message={"Ingrese id del medico para su liquidacion"} />
    </div>
  );
};

export default Liquidacion;
