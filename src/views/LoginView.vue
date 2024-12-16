<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  try {
    // Prepare the data to send in the request body
    const payload = {
      email: email.value,
      password: password.value,
    }
    console.log('Payload before sending:', payload)

    const response = await axios.post('http://127.0.0.1:8000/api/login', payload)
    console.log('Login successful', response.data)
  } catch (error) {
    console.error('Error during login:', error.response?.data || error.message)
  }
}
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-slate-900">
    <div class="bg-slate-800 p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-slate-200 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="border border-slate-500 rounded-md p-2 w-full bg-slate-800"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-slate-200 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="border border-slate-500 rounded-md p-2 w-full bg-slate-800"
          />
        </div>
        <button type="submit" class="rounded-xl bg-sky-500 px-4 py-2 w-full">Login</button>
      </form>
    </div>
  </div>
</template>
