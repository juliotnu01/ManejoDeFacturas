<script setup lang="ts">
import { onMounted } from "vue";
import TableComponent from "./components/TableComponent.vue";
import burgerIcon from './assets/burger.svg'


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
        <TableComponent />
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
