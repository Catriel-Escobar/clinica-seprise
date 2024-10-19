'use client';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInForm = ({ credentials, handleChange, handleSubmit, errorMessage }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form className="bg-white mt-[-50px] container-slider rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          required
          className="text-input"
          placeholder="Ingrese su usuario"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label className="label" htmlFor="username">Usuario</label>
      </div>
      <div className="input-container relative">
        <input
          required
          className="text-input"
          type={passwordVisible ? "text" : "password"}
          placeholder="******************"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <label className="label" htmlFor="password">Contraseña</label>
        <span
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={togglePasswordVisibility}
          aria-label={passwordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
        >
          {passwordVisible ? <FaEyeSlash className="text-[#847C78]" size={25} /> : <FaEye className="text-[#847C78]" size={25} />}
        </span>
      </div>
      {errorMessage && <p className="text-red-500 font-semibold mb-3">{errorMessage}</p>}
      <button type="submit" className="w-full sm:w-auto py-2 px-5 solid border-2 border-[#87b9a5] bg-[#87b9a5] text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-black hover:solid focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75 tracking-widest">
        Iniciar Sesión
      </button>
    </form>
  );
};
export default SignInForm;
