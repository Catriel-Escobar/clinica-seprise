"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import NavLinks from "./NavLinks"; 
import UserArea from "./UserArea"; 
import { useAuth } from "@/contexts/AuthContext"; 

const Headers = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-around items-center h-[90px] bg-[#87b9a5] text-white font-semibold">
      <Link href="/" aria-label="Ir a la página de inicio" className="h-[70px] w-[100px]">
        <Image src={logo} alt="Logo" className="w-full h-auto" width="90" height="70" priority />
      </Link>
      <NavLinks user={user} />
      <UserArea user={user} logout={logout} />
    </div>
  );
};
export default Headers;