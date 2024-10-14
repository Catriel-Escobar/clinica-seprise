import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('username');
    if (storedUser) {
      setUser(storedUser);
    } else {
      router.push('/auth');
    }
  }, [router]);

  const logout = () => {
    sessionStorage.removeItem('username'); 
    setUser(null); 
    router.push('/auth'); 
  };

  return { user, logout }; 
};

export default useAuth;
