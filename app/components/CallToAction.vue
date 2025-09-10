<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<template>
    <section class="px-6 py-16">
        <div
            class="max-w-6xl mx-auto relative rounded-2xl bg-gradient-to-r from-[#42389E] via-[#6F66C2] to-[#42389E] text-white flex flex-col items-center justify-center text-center px-6 py-16">
            <div>
                <h2 class="text-4xl font-bold mb-4">
                    Launch Features Confidently With AI Driven Flags </h2>
                <p class="text-[18px] text-[#FAFAFA]  max-w-2xl mx-auto">
                    Start for free, scale as your team grows
                </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mt-10">
                <NuxtLink to="/get-started"
                    class="bg-[#F9A71E] text-[#42389E] font-semibold px-6 py-3 rounded-md shadow-md transition duration-300">
                    Start for $1/mo
                </NuxtLink>

                <NuxtLink to="/learn-more"
                    class="border-2 border-[#F9A71E] text-[#F9A71E] font-semibold px-6 py-3 rounded-md hover:bg-[#F9A71E] hover:text-[#42389E] transition duration-300">
                    Join AI Early Access
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
