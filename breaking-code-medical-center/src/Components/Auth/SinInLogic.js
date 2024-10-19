'use client';
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const SignInLogic = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login, errorMessage } = useAuth(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await login(credentials.username, credentials.password); 
  };

  return {
    credentials,
    handleChange,
    handleSubmit,
    errorMessage, 
  };
};
export default SignInLogic;
