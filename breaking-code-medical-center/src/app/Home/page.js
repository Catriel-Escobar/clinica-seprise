import Image from "next/image"
import { clinica } from "@/image/entradaClinica.jpg"

const Home = () => {
   
    return (
    < >
        <Image src={clinica}/>
    </>
    )
    
}
  
export default Home