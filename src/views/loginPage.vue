<script setup lang="ts">
import {Ref, ref} from 'vue'
import logo from '@/assets/ARISTA.png'
import { UserModel } from '@/interfaces/index'
import axios from 'axios'
axios.defaults.baseURL = 'http://185.217.126.117:81'; 

//---------- variables ref---------------------
/**
 * variable que contiene el las keys para obtener el envio de las credenciales a la api
 */
const model: Ref<UserModel | null> = ref({
  email: '',
  pass: ''
});

//------------------ metodos -------------------

/**
 * 
 * funcion que permite ingresar al sistema 
 * @return Promise<any | null>
 */
const postLogiun: Promise<any | null> = async () => {
    try {
        await axios.post('/login-manejo-factura', { email: model.value.email, password: model.value.pass })
    } catch (error) {
        console.log({error})
    }
}



</script>
<template>
    <section class=" min-h-screen flex items-center justify-center ">
        <div class=" p-5 flex rounded-2xl shadow-lg max-w-3xl ">
            <div class="md:w-1/2 px-5">
                <h2 class="text-2xl font-bold text-[#002D74]">Login</h2>
                <form class="mt-6" action="#" method="POST">
                    <div>
                        <label class="block text-gray-700">Correo Electronico</label>
                        <input v-model="model.email" type="email" name="" id="" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus  required>
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700">Contraseña</label>
                        <input v-model="model.pass" type="password" name="" id="" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required>
                    </div>
                    <button @click.prevent="postLogiun"   type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                        Entrar
                    </button>
                </form>
            </div>
            <div class="w-1/2 md:block lg:flex ">
                <img :src="logo" class="rounded-2xl self-center" alt="page img">
            </div>
        </div>
    </section>
</template>