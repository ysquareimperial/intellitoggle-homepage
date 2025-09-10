<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<template>
    <section class="py-16 px-6 bg-[#ECEBF5]">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-5xl text-center font-bold text-[#42389E] mb-4">
                What Customers Say About Us
            </h2>
            <p class="text-[20px] text-[#42389E] mb-12 text-center">
                Stay updated with our groundbreaking research discoveries and scientific publications
            </p>

            <div class="grid gap-8 md:grid-cols-3">
                <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
                    <p class="text-[#101010] italic mb-6">
                        “Intellitoggle cut our launch risk dramatically. We ship confidently every day.”
                    </p>
                    <div class="flex items-center mt-auto">
                        <img src="/images/user1.svg" alt="User 1" class="w-12 h-12 rounded-full object-cover">
                        <div class="ml-4 text-left">
                            <h4 class="font-semibold text-[#121316]">Eng. Chima Umeh</h4>
                            <p class="text-sm text-[#1A1A1A]">CTO, Nova</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
                    <p class="text-[#101010] italic mb-6">
                        “Our PMs now control rollouts without waiting on dev cycles. Huge win.”
                    </p>
                    <div class="flex items-center mt-auto">
                        <img src="/images/user2.svg" alt="User 2" class="w-12 h-12 rounded-full object-cover">
                        <div class="ml-4 text-left">
                            <h4 class="font-semibold text-g[#121316]">John Kennedy</h4>
                            <p class="text-sm text-[#1A1A1A]">Head of Product, EdgeFlow</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
                    <p class="text-[#101010] italic mb-6">
                        “Experiments are painless and data-driven. Engagement up 12% in two weeks.”
                    </p>
                    <div class="flex items-center mt-auto">
                        <img src="/images/user3.svg" alt="User 3" class="w-12 h-12 rounded-full object-cover">
                        <div class="ml-4 text-left">
                            <h4 class="font-semibold text-[#121316]">Dan Harry</h4>
                            <p class="text-sm text-[#1A1A1A]">Software Engineer, Nova</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
