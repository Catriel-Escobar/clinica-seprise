import Image from "next/image";
import fondo from "../../assets/fondo.jpeg";
import Footer from "@/Components/UIComponents/Footer";


const Home = () => {
  return (
    <>
      <div className="relative w-screen h-[calc(90vh-76px)] flex justify-center items-center overflow-hidden">
        <Image
          src={fondo}
          alt="Consultorio externos"
          className="w-full h-full object-cover"
          width={1920} 
          height={1080}
          priority 
        />
      
      </div>
      
      
      
      </>
    );
};

export default Home;
