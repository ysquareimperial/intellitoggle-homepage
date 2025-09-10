<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
    <nav class="w-full bg-[#D8D3FB] ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div class="flex justify-between items-center h-16">

                <div class="flex-shrink-0">
                    <NuxtLink to="/">
                        <img src="/images/logo.svg" alt="Logo" class="h-12 w-auto" />
                    </NuxtLink>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-6 items-center absolute left-1/2 transform -translate-x-1/2">
                    <NuxtLink to="/" class="text-gray-700 hover:text-[#42389E]">Home</NuxtLink>
                    <NuxtLink to="/about" class="text-gray-700 hover:text-[#42389E]">About</NuxtLink>
                    <NuxtLink to="/contact" class="text-gray-700 hover:text-[#42389E]">Pricing</NuxtLink>
                </div>


                <div class="hidden md:block">
                    <button
                        class="bg-[#42389E] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-[#372f8a] transition duration-300">
                        Get Started
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button @click="isOpen = !isOpen"
                        class="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Dropdown -->
        <div v-if="isOpen" class="md:hidden bg-white shadow-md">
            <div class="space-y-2 px-4 py-3">
                <NuxtLink to="/" class="block text-gray-700 hover:text-[#42389E]">Home</NuxtLink>
                <NuxtLink to="/about" class="block text-gray-700 hover:text-[#42389E]">About</NuxtLink>
                <NuxtLink to="/contact" class="block text-gray-700 hover:text-[#42389E]">Contact</NuxtLink>
                <NuxtLink to="/signup"
                    class="block w-full text-center px-4 py-2 rounded-lg bg-[#42389E] text-white font-medium hover:bg-[#372f8a] transition">
                    Get Started
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>
