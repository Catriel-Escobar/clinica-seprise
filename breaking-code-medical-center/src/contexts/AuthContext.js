'use client';
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/Components/UIComponents/Spinner"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = sessionStorage.getItem("user");
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser); 
        } catch (error) {
          console.error("Error de parseo de datos de usuario:", error);
          sessionStorage.removeItem("user");
        }
      }
      setLoading(false);
    };

    checkUser();
  }, []);

  const login = async (username, password) => {
    setErrorMessage(""); 
    setShowSpinner(true);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario: username, contrasena: password }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.usuarioId && data.usuario && data.nombre && data.apellido && data.role) {
          setUser(data);  
          sessionStorage.setItem("user", JSON.stringify(data)); 
          setShowSpinner(false); 
          router.push("/home"); 
        } else {
          throw new Error("Estructura de datos no válida");
        }
      } else {
        throw new Error("Error de autenticación");
      }
    } catch (error) {
      console.error(error.message);  
      setShowSpinner(false);
      setErrorMessage(error.message); 
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    router.push("/");
  };

  return (
    <>
      {showSpinner ? (
        <Spinner />
      ) : (
        <AuthContext.Provider value={{ user, loading, login, logout, errorMessage }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
