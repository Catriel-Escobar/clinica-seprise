'use client';
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password); 
    } catch (err) {
      setError(err.message); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-[30px] pb-[20px] text-center" style={{ background: "linear-gradient(to right, #87b9a5 0%, #87b9a5 34%, #C4EDED 100%)" }}>
      <div className="w-full max-w-md">
        <form className="bg-white mt-[-50px] container-slider rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              required
              className="text-input"
              placeholder="Ingrese su usuario"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {error && <p className="text-red-500 font-semibold mb-3">{error}</p>}
          <button type="submit" className="w-full sm:w-auto py-2 px-5 solid border-2 border-[#87b9a5] bg-[#87b9a5] text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-black hover:solid focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75 tracking-widest">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;