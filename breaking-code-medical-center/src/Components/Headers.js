"use client";
import Link from "next/link";
import { IoMdLogOut } from "react-icons/io";
import Image from "next/image";
import logo from "../assets/logo.png";
import useAuth from "@/hooks/useAuth";

const Headers = () => {
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Agenda", href: "/agenda" },
    { name: "Historia Clinica", href: "/hc" },
    { name: "Facturacion", href: "/facturacion" },
    { name: "Liquidacion", href: "/liquidacion" },
  ];

  return (
    <div className="flex justify-around items-center h-[90px] bg-[#87b9a5] text-white font-semibold">
      <div className="h-[70px] w-[100px]">
        <Link href={"/"} aria-label="Ir a la página de inicio">
          <Image
            src={logo}
            alt="Logo"
            className="w-full h-auto"
            width="90"
            height="70"
            priority
          />
        </Link>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-x-4 text-lg">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link href={item.href} aria-label={`Ir a ${item.name}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="flex justify-center items-center w-[40px] h-[40px] rounded-full border-2">
          {user?.toUpperCase()}
        </button>
        <button
          onClick={logout}
          className="text-white px-3 py-1 rounded"
          aria-label="Cerrar sesión"
        >
          <IoMdLogOut size={30} />
        </button>
      </div>
    </div>
  );
};

export default Headers;