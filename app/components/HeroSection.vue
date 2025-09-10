<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<template>
    <section class="py-20 flex flex-col justify-center items-center text-center px-6 
    bg-gradient-to-b from-[#D8D3FB] to-[#FCFAFF]">

        <h1 class="text-5xl md:text-6xl font-bold text-[#42389E] mb-4">
            The First Dart-Native<br /> Feature Flag & DartCodeAI
        </h1>

        <p class="text-lg md:text-xl text-[#42389E] max-w-2xl mb-8">
            Ship faster, control rollouts, and get ready for AI-powered delivery, starting at just $1/month for a
            limited time.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/"
                class="bg-[#42389E] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#372f8a] transition duration-300">
                Start for $1/mo
            </NuxtLink>

            <NuxtLink to="/"
                class="border-2 border-[#42389E] text-[#42389E] font-semibold px-6 py-3 rounded-md hover:bg-[#42389E] hover:text-white transition duration-300">
                Join AI Early Access
            </NuxtLink>
        </div>
    </section>

    <section class="relative bg-[#FCFAFF]">
        <div class="flex justify-center items-center px-4">
            <div
                class="relative rounded-2xl shadow-lg max-w-5xl w-full bg-gradient-to-b from-[#42389E] to-[#0F1026] p-4">
                <img src="/images/dashboard.svg" alt="Dashboard" class="w-full h-auto rounded-xl" />

                <div
                    class="hidden md:block absolute -left-24 top-56 -translate-y-1/2 rounded-xl shadow-lg bg-[#514B88] p-2">
                    <img src="/images/left-image.svg" alt="Left card" class="w-60 h-auto rounded-lg" />
                </div>

                <div
                    class="hidden md:block absolute -right-20 top-40 -translate-y-1/2 rounded-xl shadow-lg bg-gradient-to-b from-[#42389E] to-[#848AE4] p-2">
                    <img src="/images/right-image.svg" alt="Right card" class="w-56 h-28 rounded-lg" />
                </div>
            </div>
        </div>

        <div class="bg-[#42389E] text-white py-6 px-4 -mt-10 relative z-10">
            <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <p class="text-center md:text-left text-lg">
                    $1/month for your first year. Normally $10/month. Sign up before
                    September 15, 2025.
                </p>

                <div class="flex gap-3">
                    <!-- Days -->
                    <div class="bg-[#F9A71E] text-white rounded-md px-4 py-2 text-center">
                        <div class="text-2xl font-bold">36</div>
                        <div class="text-xs uppercase">Days</div>
                    </div>

                    <!-- Hours -->
                    <div class="bg-[#F9A71E] text-white rounded-md px-4 py-2 text-center">
                        <div class="text-2xl font-bold">04</div>
                        <div class="text-xs uppercase">Hrs</div>
                    </div>

                    <!-- Minutes -->
                    <div class="bg-[#F9A71E] text-white rounded-md px-4 py-2 text-center">
                        <div class="text-2xl font-bold">45</div>
                        <div class="text-xs uppercase">Min</div>
                    </div>

                    <!-- Seconds -->
                    <div class="bg-[#F9A71E] text-white rounded-md px-4 py-2 text-center">
                        <div class="text-2xl font-bold">22</div>
                        <div class="text-xs uppercase">Sec</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
