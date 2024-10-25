import Image from "next/image";
import fondo from "../../assets/fondo.jpeg";

const Home = () => {
  return (
    <>
      <div className="relative w-screen h-[calc(100vh-170px)] flex justify-center items-center overflow-hidden">
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
