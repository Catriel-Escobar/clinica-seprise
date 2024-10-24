'use client';
import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [resultados, setResultados] = useState(null);
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
    };

    checkUser();
  }, []);

  const login = async (username, password) => {
    setErrorMessage("");

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

        if (data.usuarioId && data.usuario && data.nombre && data.role) {
          setUser(data);
          sessionStorage.setItem("user", JSON.stringify(data));
          router.push("/home");
        } else {
          throw new Error("Estructura de datos no válida");
        }
      } else {
        throw new Error("Error de autenticación");
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message);
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, errorMessage, resultados, setResultados }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);