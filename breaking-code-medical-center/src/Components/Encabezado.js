import Image from "next/image"
import { FaSearch } from "react-icons/fa";


const Encabezado = ({titulo, consigna}) => {
    
    
    return (
       <div>
        <div className="bg-cyan-100 text-center text-4xl font-bold h-[100px] py-7">
        {titulo}
        </div>
        

        <div className="flex justify-center items-center h-[80px] bg-cyan-100">
          <div className="pr-8 font-medium">
            {consigna}
          </div>
          
          <div class="flex w-96 mx-5 rounded bg-white">
            <input class=" w-96 border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="search" name="search" placeholder="Buscar..." />
                <button type="submit" class="m-2 rounded bg-blue-600 px-4 py-4 text-white">
                  <FaSearch />
                  
                </button>
        </div>
        </div>
        
      </div>  
    )
  }
  
  export default Encabezado