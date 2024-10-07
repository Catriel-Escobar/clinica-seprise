'use client';
import { Suspense, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Spinner from '@/Components/Spinner';

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); 

   const users = [
    { username: 'gb', password: 'admin' },
    { username: 'ma', password: 'admin' },
    { username: 'ce', password: 'admin' },
    { username: 'gb', password: 'admin' },
    { username: 'aa', password: 'admin' },
  ];

  useEffect(() => {
    const storedUser = sessionStorage.getItem('username');
    if (storedUser) {
      router.push('/'); 
    }
  }, [router]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userFound = users.find(user => user.username === email && user.password === password);

    if (userFound) {
      sessionStorage.setItem('username', email); 
      router.push('/'); 
      window.location.reload()
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Suspense fallback={<Spinner />}>
      <div
        className="min-h-screen flex items-center justify-center py-[30px] pb-[20px] text-center"
        style={{
          background: 'linear-gradient(to right, #397935 0%, #7AE687 34%, #C4EDED 100%)',
        }}
      >
        <div></div>
        <div className="w-full max-w-md">
          <form
            className="bg-white mt-[-50px] container-slider rounded-xl px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="input-container">
              <input
                required
                className="text-input"
                placeholder="Ingrese su usuario"
                type="text"
                name="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label" htmlFor="email">
                Usuario
              </label>
            </div>
            <div className="input-container relative">
              <input
                required
                className="text-input"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="******************"
                name="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label" htmlFor="password">
                Contraseña
              </label>
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <FaEyeSlash className="text-[#847C78]" size={25} />
                ) : (
                  <FaEye className="text-[#847C78]" size={25} />
                )}
              </span>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full sm:w-auto py-2 px-5 solid border-2 border-[#57F8BF] bg-[#57F8BF] text-black font-semibold rounded-xl shadow-md hover:bg-white hover:text-black hover:solid focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75 tracking-widest"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </Suspense>
  );
};

export default SignIn;
