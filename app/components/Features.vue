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
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-5xl font-bold text-[#2E2E2E]">Powerful Features, Simplified</h2>
                <p class="mt-2 text-[#2E2E2E] text-[20px]">AI-driven intelligence meets developer-friendly simplicity
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-[#ECEBF5] rounded-lg p-6 flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 flex items-center justify-center rounded-md bg-[#42389E]">
                            <Icon name="streamline:artificial-intelligence-spark" class="h-7 w-7 text-white" />
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-gray-900">AI-powered Flag Creation</h3>
                        <p class="mt-2 text-[#414141] text-[14px]">

                            Our AI analyzes your user base, traffic patterns, and historical data to suggest optimal
                            rollout strategies automatically
                        </p>
                    </div>
                    <p class="mt-6 text-[#42389E] font-semibold cursor-pointer text-[14px]">Get Started</p>
                </div>

                <div class="bg-[#ECEBF5] rounded-lg p-6 flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 flex items-center justify-center rounded-md bg-[#42389E]">
                            <Icon name="fluent:flash-checkmark-28-regular" class="h-7 w-7 text-white" />
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-gray-900">Smart Targeting</h3>
                        <p class="mt-2 text-[#414141] text-[14px]">

                            Advanced user segmentation with real-time behavioral analysis ensures your features reach
                            the most engaged audience.
                        </p>
                    </div>
                    <p class="mt-6 text-[#42389E] font-semibold cursor-pointer text-[14px]">Get Started</p>
                </div>

                <div class="bg-[#ECEBF5] rounded-lg p-6 flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 flex items-center justify-center rounded-md bg-[#42389E]">
                            <Icon name="streamline-plump:clean-broom-wipe" class="h-7 w-7 text-white" />
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-gray-900">Flag Cleanup</h3>
                        <p class="mt-2 text-[#414141] text-[14px]">

                            Keep your codebase clean with intelligent flag lifecycle management that removes technical
                            debt automatically
                        </p>
                    </div>
                    <p class="mt-6 text-[#42389E] font-semibold cursor-pointer text-[14px]">Get Started</p>
                </div>

                <div class="bg-[#ECEBF5] rounded-lg p-6 flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 flex items-center justify-center rounded-md bg-[#42389E]">
                            <Icon name="streamline-ultimate:ab-testing-monitors" class="h-7 w-7 text-white" />
                        </div>
                        <h3 class="mt-6 text-xl font-semibold text-gray-900">Environment & A/B Testing</h3>
                        <p class="mt-2 text-[#414141] text-[14px]">
                            Multi-environment support with sophisticated A/B testing framework gives you confidence in
                            every release.
                        </p>
                    </div>
                    <p class="mt-6 text-[#42389E] font-semibold cursor-pointer text-[14px]">Get Started</p>
                </div>
            </div>
        </div>
    </section>
</template>
