<template>
  <main>
   

    <div>

      <div class="flex justify-center items-center h-screen">

        <div class="bg-gray-100 p-5 rounded-lg flex">

          <div class="flex justify-center items-center w-112">
            <form @submit.prevent="inscription" method="post" class="flex flex-col w-64 space-y-4">
              <h1 class="text-blue-800 text-xl mb-5">Login</h1>
              <p class="text-blue-800 text-sm mb-10">Connectez-vous</p>
              <div class="relative">
                <input v-model="inscriptionData.email" type="text" name="email" id="inscription-email" required
                  placeholder="Email">
                <input v-model="inscriptionData.password" type="password" name="mdp" id="inscription-mdp" required
                  placeholder="Mot de Passe">
              </div>
              <div class="flex items-center justify-center">
                <button type="submit"
                  class="h-6 px-3 flex items-center text-sm font-bold bg-white border border-blue-800 rounded-md text-blue-800 hover:scale-110 transition transform duration-500">Connexion</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2>Connexion</h2>

      <form @submit.prevent="connexion" method="post">
        <input v-model="loginData.email" type="text" name="email" id="login-email" required placeholder="Email">
        <input v-model="loginData.password" type="password" name="mdp" id="login-mdp" required placeholder="Mot de Passe">

        <input type="submit" value="Je me connect">
      </form>
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useGlobalStore } from '@/store/global'

// Accéder au store global
const globalStore = useGlobalStore()

// Fonction pour définir le token
const setToken = (token) => {
  globalStore.setToken(token)
}

const inscriptionData = ref({
  email: '',
  password: '',
});

const loginData = ref({
  email: '',
  password: '',
});

const connexion = async () => {
  try {
    const response = await axios.post('http://localhost:3000/connexion', loginData.value);
    // localStorage.setItem('token', JSON.stringify(response.data.userId))
    globalStore.setToken(response.data.userId)

    console.log(response.data.userId); // Handle the response as needed
    // Optionally, you can reset the form data after successful login
    loginData.value.email = '';
    loginData.value.password = '';
  } catch (error) {
    console.error('Error during login:', error);
  }
};


const inscription = async () => {
  try {
    const response = await axios.post('http://localhost:3000/inscription', inscriptionData.value);


    console.log(response.data); // You can handle the response as needed

    // Optionally, you can reset the form data after successful submission
    inscriptionData.value.email = '';
    inscriptionData.value.password = '';
  } catch (error) {
    console.error('Error during inscription:', error.message);
  }
};
</script>
