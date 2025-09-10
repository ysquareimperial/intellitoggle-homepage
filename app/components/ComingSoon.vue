<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<template>
    <section class="py-16 px-4 bg-white">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <div>
                <span class="px-6 py-1 rounded-full text-sm " style="background-color: #FFEBC9; color: #F9A71E;">
                    Coming Soon
                </span>

                <h2 class="text-[40px] font-bold text-[#2E2E2E] mt-4">
                    Be First to Power Your Features with DartCode AI
                </h2>

                <p class="mt-2 mb-8 text-[#5D5D5E] text-lg">
                    DartCode AI is the only AI built specifically for Dart feature flagging. It learns from your app’s
                    live usage, optimizes rollouts in real time, and safeguards every release
                </p>

                <div class="space-y-6">
                    <div class="flex items-start gap-4">
                        <div class="">
                            <Icon name="bitcoin-icons:verify-filled" class="h-11 w-11 text-[#958CF1]" />
                        </div>
                        <div>
                            <h3 class="text-[18px] font-semibold text-[#3F3F3F]">Predict Rollout Success </h3>
                            <p class="text-[#676669]">Forecast which users will adopt features fastest</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0">
                            <Icon name="bitcoin-icons:verify-filled" class="h-11 w-11 text-[#958CF1]" />
                        </div>
                        <div>
                            <h3 class="text-[18px] font-semibold text-[#3F3F3F]">Adapt Without Guesswork</h3>
                            <p class="text-[16px] text-[#676669]">Automatic rollout adjustments based on live results.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="flex-shrink-0">
                            <Icon name="bitcoin-icons:verify-filled" class="h-11 w-11 text-[#958CF1]" />
                        </div>
                        <div>
                            <h3 class="text-[18px] font-semibold text-[#3F3F3F]">Prevent Costly Mistakes</h3>
                            <p class="text-[#676669]">Early anomaly detection and instant rollback cues</p>
                        </div>
                    </div>
                </div>

                <div class="mt-10">
                    <NuxtLink to="/"
                        class="bg-[#42389E] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#372f8a] transition duration-300">
                        Start for $1/mo
                    </NuxtLink>
                </div>
            </div>

            <div class="hidden md:flex justify-center">
                <img src="/images/coming-soon.svg" alt="Coming Soon" class="w-full h-auto rounded-xl max-w-lg" />
            </div>
        </div>
    </section>
</template>
