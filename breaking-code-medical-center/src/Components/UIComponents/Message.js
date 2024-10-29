import image from "@/assets/hc.png";
import Image from "next/image";

const Message = ({message}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-310px)]">
      <Image src={image} alt="hc" className="max-w-xs mb-4" />
      <h2 className="text-gray-600 font-bold text-lg text-center">
        {message}
      </h2>
    </div>
  );
};

export default Message;
