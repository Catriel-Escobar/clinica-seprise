'use client';
import Link from 'next/link';
import { IoMdLogOut } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Headers = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('username');
    if (storedUser) {
      setUser(storedUser);
    } else {
      router.push('/auth');
    }
  }, [router, user]);

  const handleLogout = () => {
    sessionStorage.removeItem('username');
    setUser('');
    router.push('/auth');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Historia Clinica', href: '/hc' },
    { name: 'Facturacion', href: '/facturacion' },
    { name: 'Liquidacion', href: '/liquidacion' },
  ];

  return (
    <>
      {user && (
        <div className='flex justify-around items-center h-[90px] bg-[#87b9a5] text-white font-semibold'>
          <div className='h-[70px] w-[100px]'>
            <Link href={'/'}>
              <Image src={logo} className='w-[100%]' />
            </Link>
          </div>
          <div>
            <ul className='flex justify-center items-center gap-x-4 text-lg'>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center gap-x-4'>
            {user && (
              <button className='flex justify-center items-center w-[40px] h-[40px] rounded-full border-2'>
                {user.toUpperCase()}
              </button>
            )}
            <button
              onClick={handleLogout}
              className='text-white px-3 py-1 rounded'>
              <IoMdLogOut size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Headers;
