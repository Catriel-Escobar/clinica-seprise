import Encabezado from "@/Components/Encabezado"
import { IoPersonAddSharp } from "react-icons/io5";

import Image from "next/image"


const Agenda = () => {
  const closeButton = {name:"close-modal"}
  const openButton ={name:"open-modal"}
  const modalContainer = {name:"modal-component-container"}
  const modal = {name:"modal-container"}



  return (
    <div>
        <Encabezado titulo={"Agenda"} consigna={"Ingrese Id del médico"}/>  
      
        <section class="bg-white dark:bg-gray-900 antialiased">
        <div class="px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Agenda diaria
            </h2>

            <div class="mt-4">
              <a href="#" title=""
                class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
              </a>
            </div>
          </div>

          <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
            <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
             
              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  08:00 - 09:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  09:00 - 10:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  10:00 - 11:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  11:00 - 12:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  12:00 - 13:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  13:00 - 14:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  14:00 - 15:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  15:00 - 16:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  16:00 - 17:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  17:00 - 18:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                   <input class=" w-auto border-none bg-transparent px-6 py-4 text-gray-400 outline-none focus:outline-none " type="add" name="add" placeholder="..." />
                   <button type="submit" class="m-2 rounded bg-[#87b9a5] px-4 py-4 text-white">
                   <IoPersonAddSharp />
                  
                </button>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
export default Agenda