'use client';
import { Montserrat } from "next/font/google";
import "./globals.css";
import Headers from "@/Components/Headers";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/contexts/AuthContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased min-h-[calc(100vh)] justify-center mx-auto`}>
        <AuthProvider>
          {/* <Headers /> */}
          {path !== "/" && <Headers />} 
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
