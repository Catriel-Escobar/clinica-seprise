import { Suspense } from "react";
import Image from "next/image";
import fondo from "../assets/fondo.jpeg";
import Spinner from "@/Components/Spinner";

const Home = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="relative w-screen h-[calc(100vh-90px)] flex justify-center items-center overflow-hidden">
        <Image
          src={fondo}
          alt="Consultorio externos"
          className="z-[-1] object-cover"
          priority
        />
      </div>
    </Suspense>
  );
};

export default Home;
