'use client'
import { Montserrat } from "next/font/google";
import "./globals.css";
import Headers from "@/Components/Headers";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname()
  console.log(path)
    return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased min-h-[calc(100vh)] justify-center mx-auto`}
      >
        {path !== "/auth" && <Headers />}
        {children}
      </body>
    </html>
  );
}
