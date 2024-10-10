import { Montserrat } from "next/font/google";
import "./globals.css";
import Headers from "@/Components/Headers";




const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "BREAKING CODE MEDICAL CENTER - Home",
  icons: {
    icon: "@/app/icon.ico"
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased  min-h-[calc(100vh)] justify-center mx-auto`}
      >
        <Headers />
        
        {children}
      </body>
    </html>
  );
}
