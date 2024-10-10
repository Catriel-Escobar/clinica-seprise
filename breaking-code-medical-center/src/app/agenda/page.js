import Encabezado from "@/Components/Encabezado"
import Image from "next/image"

const Agenda = () => {
  const sectores = [
      
    ]

  return (
    <div>
        <Encabezado titulo={"Agenda"} consigna={"Ingrese Id del médico"}/>  
      <div className="flex items-center w-11/12 justify-evenly py-8">
        <div className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          Seleccione un día
            <div class="max-w-sm w-full shadow-lg">
                <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
                    <div class="px-4 flex items-center justify-between">
                        <span  tabindex="0" class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800">Octubre 2024</span>
                        <div class="flex items-center">
                            <button aria-label="calendar backward" class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </button>
                        <button aria-label="calendar forward" class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"> 
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>

                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-12 overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">L</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">M</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">M</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">J</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">V</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">S</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class="text-base font-medium text-center text-gray-800 dark:text-gray-100">D</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td class="pt-6">
                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">1</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">2</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">3</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">4</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">5</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">6</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="w-full h-full">
                                            <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-cyan-200 rounded-full">7</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">8</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">9</p>
                                        </div>
                                    </td>
                                    <td>
                                    <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">10</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">11</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">12</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">13</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">14</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">15</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">16</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">17</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">18</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">19</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">20</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">21</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">22</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">23</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">24</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">25</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">26</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100">27</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">28</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">29</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">30</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium">31</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-gray-100 font-medium"></p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
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
                  <a href="#" class="hover:underline">Juan Sanchez</a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  09:00 - 10:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline"></a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  10:00 - 11:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">Sonia Ramirez</a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  11:00 - 12:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">Marta Espinola</a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  12:00 - 13:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline"></a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  13:00 - 14:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline"></a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  14:00 - 15:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline">Tomás Longuero</a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  15:00 - 16:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline"></a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  16:00 - 14:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline"></a>
                </h3>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  17:00 - 14:00
                </p>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="#" class="hover:underline"></a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
export default Agenda