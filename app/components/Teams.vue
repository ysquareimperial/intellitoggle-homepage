<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    }
})
</script>
<template>
    <section class="py-16 px-4 bg-[#FFFDFF]">
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-12">
            <h2 class="text-5xl font-bold text-[#2E2E2E]">Built For Every Team</h2>
            <p class="mt-2 text-[20px] text-[#2E2E2E]">
                Whether you're shipping code, managing products, or driving growth
            </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Card 1 -->
            <div class="bg-white shadow-lg rounded-lg p-6 text-center h-80 flex flex-col items-center justify-center">
                <div class="w-16 h-16 mx-auto flex items-center justify-center rounded-xl"
                    style="background-color:#E3E0FF;">
                    <Icon name="streamline-freehand:programming-user-code" class="h-11 w-11 text-[#42389E]" />
                </div>
                <h3 class="mt-6 text-2xl font-semibold text-gray-900">Developers</h3>
                <p class="mt-2 text-[#3D3D3D]">
                    Safely deploy and control feature rollouts with zero-downtime toggles.
                </p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white shadow-lg rounded-lg p-6 text-center h-80 flex flex-col items-center justify-center">
                <div class="w-16 h-16 mx-auto flex items-center justify-center rounded-xl"
                    style="background-color:#E3E0FF;">
                    <Icon name="hugeicons:manager" class="h-11 w-11 text-[#42389E]" />
                </div>
                <h3 class="mt-6 text-2xl font-semibold text-gray-900">Product Managers</h3>
                <p class="mt-2 text-[#3D3D3D]">
                    Run experiments, manage rollouts, and launch features on your terms.
                </p>
            </div>

            <!-- Card 3 -->
            <div class="bg-white shadow-lg rounded-lg p-6 text-center h-80 flex flex-col items-center justify-center">
                <div class="w-16 h-16 mx-auto flex items-center justify-center rounded-xl"
                    style="background-color:#E3E0FF;">
                    <Icon name="ph:users-light" class="h-11 w-11 text-[#42389E]" />
                </div>
                <h3 class="mt-6 text-2xl font-semibold text-gray-900">Enterprises</h3>
                <p class="mt-2 text-[#3D3D3D]">
                    Secure, compliant, and scalable toggle management built with Dart reliability.
                </p>
            </div>
        </div>
    </section>
</template>
