'use client'
import { Suspense, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Spinner from "@/Components/Spinner";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Suspense fallback={<Spinner />}>
      <div className="min-h-screen flex items-center justify-center py-[30px] pb-[20px] text-center" style={{ background: "linear-gradient(to right, #87b9a5 0%, #7AE687 34%, #C4EDED 100%)" }}>
        <div className="w-full max-w-md">
          <form className="bg-white mt-[-50px] container-slider rounded-xl px-8 pt-6 pb-8 mb-4">
            <div className="input-container">
              <input
                required
                className="text-input"
                placeholder="Ingrese su usuario"
                type="text"
                name="Email"
                id="email"
              />
              <label className="label" htmlFor="email">
                Usuario
              </label>
            </div>
            <div className="input-container relative ">
              <input
                required
                className="text-input "
                type={passwordVisible ? "text" : "password"}
                placeholder="******************"
                name="Password"
                id="password"
              />
              <label className="label" htmlFor="password">
                Contraseña
              </label>
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash className="text-[#847C78]" size={25}/> : <FaEye className="text-[#847C78]" size={25}/>}
              </span>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto py-2 px-5 solid border-2 border-[#57F8BF] bg-[#57F8BF] text-black font-semibold rounded-xl shadow-md hover:bg-white hover:text-black hover:solid focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75 tracking-widest"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default SignIn;
