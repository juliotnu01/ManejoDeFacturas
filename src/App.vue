<script setup lang="ts">
import {  ref } from "vue";
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

import burgerIcon from './assets/burger.svg'
import CashIcon from './assets/cash.svg'
import calendarIon from './assets/calendar.svg'
import FilePdfIon from './assets/pdf-svgrepo-com.svg'
import FileXmlIon from './assets/xml-svgrepo-com.svg'
import FileZipIon from './assets/zip-svgrepo-com.svg'
const dateValue: any = ref([])

</script>

<template>
  <!-- Header -->
  <div id="container" class="w-full h-16 max-h-16 bg-[#cecece] p-1 shadow-sm">
    <div id="header_wrapper"
      class="h-full justify-between w-full  text-center grid grid-cols-12 gap-2 sm:grid-cols-6 lg:grid-cols-12 max-[640px]:grid-cols-3  p-1">
      <div class="justify-between  p-1 w-full col-span-1 lg:col-span-1 sm:col-span-1 max-[640px]:col-span-1 flex">
        <button>
          <img :src="burgerIcon" class="w-10 h-10 ">
        </button>
      </div>
      <div class="justify-between  p-1 w-full col-span-7 lg:col-span-7 sm:col-span-3 max-[640px]:col-span-2">

      </div>
      <div class="justify-between  p-1 w-full col-span-4 lg:col-span-4 sm:col-span-2 max-[640px]:hidden">

      </div>
    </div>
  </div>
  <!-- Body -->

  <main>
    <div class="min-h-screen mt-6">
      <div class="h-full">
        <section class="container px-4 mx-auto">
          <!-- cabecera -->
          <div class="sm:flex sm:items-center sm:justify-between">
            <div>
              <div class="flex items-center gap-x-3">
                <h2 class="text-lg font-medium text-gray-800 ">Clientes</h2>

                <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
                  240 clientes
                </span>
              </div>
            </div>

            <div class="flex items-center mt-4 gap-x-3">
              <button
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3098_154395)">
                    <path
                      d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                      stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3098_154395">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span>Enviar Facturas</span>
              </button>
            </div>
          </div>

          <div class="mt-6 flex gap-3 items-center  ">
            
            <vue-tailwind-datepicker v-model="dateValue" class=" w-96 "  placeholder="Seleccionar rango de fechas"/>

            <div class="max-w-md mx-auto  w-4/12">
              <select id="seleccionar" class="block w-full p-2 border rounded-md">
                <option value="opcion1">Pendiente</option>
                <option value="opcion2">Rechazada</option>
                <option value="opcion3">Realizada</option>
              </select>
            </div>

            <div class="relative flex items-center mt-4 md:mt-0  ">
              <span class="absolute">
                <svg class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </span>
              <input type="text" placeholder="Buscar por cliente"
                class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>

            <div class="relative flex items-center ">
              <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" placeholder="Buscar"
                class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
            </div>

          </div>
          <!-- body -->
          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200 ">
                    <thead class="bg-gray-50 text-[10px]">
                      <th></th>
                      <th scope="col" class="py-3.5 px-4  font-normal text-center  text-gray-300 ">
                        <span>#</span>
                      </th>
                      <th scope="col" class="px-12 py-3.5  font-normal text-center  text-black ">
                        Fecha de Emision
                      </th>
                      <th scope="col" class="px-12 py-3.5  font-normal text-center  text-black ">
                        Cliente
                      </th>
                      <th scope="col" class="px-12 py-3.5  font-normal text-center  text-black ">
                        Documento
                      </th>

                      <th scope="col" class="px-12 py-3.5  font-normal text-center  text-black ">
                        Estado
                      </th>

                      <th scope="col" class="px-4 py-3.5  font-normal text-center  text-black ">
                        Moneda
                      </th>

                      <th scope="col" class="px-4 py-3.5  font-normal text-center  text-black ">
                        Total Venta
                      </th>

                      <th scope="col" class="px-4 py-3.5  font-normal text-center  text-black ">
                        Total Impuestos
                      </th>
                      <th scope="col" class="px-4 py-3.5  font-normal text-center  text-black ">
                        Subtotal
                      </th>
                      <th scope="col" class="px-4 py-3.5  font-normal text-center  text-black ">
                        Total
                      </th>
                      <th scope="col" class="px-4 py-3.5  font-normal text-center  text-black ">
                        Descargas
                      </th>
                      <th scope="col" class="px-4 py-3.5  font-normal text-center  text-black ">
                        Acciones
                      </th>


                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 text-[10px]">
                      <tr>
                        <td>
                          <div class="ml-5">
                            <div
                              class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                              <input placeholder="checkbox" checked="" type="checkbox"
                                class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                              <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg"
                                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center   whitespace-nowrap">
                          <div>
                            1
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-1">
                            <img :src="calendarIon" class="w-6 h-6" />
                            <div class="py-1 px-1 self-center  text-blue-700 bg-blue-100 rounded">Due today at 18:00</div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">Cliente POS</h4>
                            <p class="text-gray-500 ">22222222222</p>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <p class="text-gray-500 ">SETP-000000000</p>
                            <h4 class="text-gray-700 ">Factura de Venta Nacional</h4>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-center   whitespace-nowrap">
                          <div
                            class=" px-3 py-1  font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 flex gap-1 w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                              </path>
                              <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25"
                                stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>
                            Registrada
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-1">
                            <img :src="CashIcon" class="w-6 h-6" />
                            <p class="text-gray-500 self-center ">Peso Colombiano</p>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-2">
                            <img :src="FilePdfIon" class="w-6 h-6" />
                            <img :src="FileXmlIon" class="w-6 h-6" />
                            <img :src="FileZipIon" class="w-6 h-6" />
                          </div>
                        </td>

                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <button
                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="ml-5">
                            <div
                              class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                              <input placeholder="checkbox" checked="" type="checkbox"
                                class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                              <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg"
                                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center   whitespace-nowrap">
                          <div>
                            1
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-1">
                            <img :src="calendarIon" class="w-6 h-6" />
                            <div class="py-1 px-1 self-center  text-blue-700 bg-blue-100 rounded">Due today at 18:00</div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">Cliente POS</h4>
                            <p class="text-gray-500 ">22222222222</p>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <p class="text-gray-500 ">SETP-000000000</p>
                            <h4 class="text-gray-700 ">Factura de Venta Nacional</h4>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-center   whitespace-nowrap">
                          <div
                            class=" px-3 py-1  font-normal rounded-full text-red-500 gap-x-2 bg-red-100/60 flex gap-1 w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                              </path>
                              <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25"
                                stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>
                            Rechazada
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-1">
                            <img :src="CashIcon" class="w-6 h-6" />
                            <p class="text-gray-500 self-center ">Peso Colombiano</p>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-2">
                            <img :src="FilePdfIon" class="w-6 h-6" />
                            <img :src="FileXmlIon" class="w-6 h-6" />
                            <img :src="FileZipIon" class="w-6 h-6" />
                          </div>
                        </td>

                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <button
                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="ml-5">
                            <div
                              class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                              <input placeholder="checkbox" checked="" type="checkbox"
                                class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                              <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg"
                                  width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"></path>
                                  <path d="M5 12l5 5l10 -10"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center   whitespace-nowrap">
                          <div>
                            1
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-1">
                            <img :src="calendarIon" class="w-6 h-6" />
                            <div class="py-1 px-1 self-center  text-blue-700 bg-blue-100 rounded">Due today at 18:00</div>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">Cliente POS</h4>
                            <p class="text-gray-500 ">22222222222</p>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <p class="text-gray-500 ">SETP-000000000</p>
                            <h4 class="text-gray-700 ">Factura de Venta Nacional</h4>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-center   whitespace-nowrap">
                          <div
                            class=" px-3 py-1  font-normal rounded-full text-yellow-500 gap-x-2 bg-yellow-100/60 flex gap-1 w-fit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path
                                d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                              </path>
                              <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25"
                                stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>
                            Pendiente
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-1">
                            <img :src="CashIcon" class="w-6 h-6" />
                            <p class="text-gray-500 self-center ">Peso Colombiano</p>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div>
                            <h4 class="text-gray-700 ">
                              $ 999.999,99
                            </h4>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <div class="flex gap-2">
                            <img :src="FilePdfIon" class="w-6 h-6" />
                            <img :src="FileXmlIon" class="w-6 h-6" />
                            <img :src="FileZipIon" class="w-6 h-6" />
                          </div>
                        </td>

                        <td class="px-4 py-4 text-center  whitespace-nowrap">
                          <button
                            class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                              stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- footer -->
          <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
            <div class="text-sm text-gray-500 ">
              Paginas <span class="font-medium text-gray-700 ">1 de 10</span>
            </div>

            <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
              <a href="#"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  class="w-5 h-5 rtl:-scale-x-100">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>
                  Anterior
                </span>
              </a>

              <a href="#"
                class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 ">
                <span>
                  Siguiente
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>

  <!-- footer  -->
  <div class="h-16 max-h-16 flex items-center justify-center overflow-hidden  bg-[#cecece] ">
    <div class="h-full">
      <!-- Contenido principal aquí -->
    </div>
  </div>
</template>

<style scoped></style>
