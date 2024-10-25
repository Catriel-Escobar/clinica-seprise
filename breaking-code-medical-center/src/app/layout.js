"use client";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Headers from "@/Components/UIComponents/Headers";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/contexts/AuthContext";
import Spinner from "@/Components/UIComponents/Spinner"; 
import Footer from "@/Components/UIComponents/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const shouldShowHeaders = pathname !== "/";

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased min-h-[calc(100vh-80px)] justify-center mx-auto`}
      >
        <AuthProvider>
          {shouldShowHeaders && <Headers />}
          {loading ? <Spinner isRoot={pathname === "/"} /> : children}
          {shouldShowHeaders && <Footer />}
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
