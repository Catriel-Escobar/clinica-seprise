"use client";
import { IoMdLogOut } from "react-icons/io";

const UserArea = ({ user, logout }) => {
  return (
    <div className="flex items-center gap-x-4">
      <button className="flex justify-center items-center w-[40px] h-[40px] rounded-full border-2">
        {user?.nombre[0]}{user?.apellido[0]}
      </button>
      <button onClick={logout} className="text-white px-3 py-1 rounded" aria-label="Cerrar sesión">
        <IoMdLogOut size={30} />
      </button>
    </div>
  );
};
export default UserArea;