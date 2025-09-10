<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<template>
    <footer class="bg-[#E6E7F3] text-white">
        <section class="px-6 py-16">
            <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

                <div class="space-y-4 md:col-span-2">
                    <img src="/images/logo.svg" alt="Logo" class="h-10 w-auto" />
                    <p class="text-[#263238] text-[18px] leading-relaxed">
                        Intelli Toggle is built by AORTEM, a company focused on powering scalable, multi-platform
                        developer tools.
                    </p>
                    <div class="flex items-center justify-center w-10 h-10 rounded-full"
                        style="background-color:#4B4B4B;">
                        <Icon name="mdi:github" class="h-5 w-5 text-white" />
                    </div>

                </div>

                <div class="text-left md:col-span-1">
                    <h3 class="font-semibold text-lg mb-4 text-[#263238]">Company</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <NuxtLink to="/" class="text-[#263238]">Pricing</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[#263238]">Docs</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[#263238]">About Us</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="text-left md:col-span-1">
                    <h3 class="font-semibold text-lg mb-4 text-[#263238]">Resources</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <NuxtLink to="/" class="text-[#263238]">Why IntelliToggle is Different
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[#263238]">Customer Support</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[#263238]">Terms &amp; Conditions</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/" class="text-[#263238]">Privacy Policy</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="space-y-4 md:col-span-2">
                    <h3 class="font-semibold text-[15px] text-[#263238] mb-4">Subscribe to Newsletter</h3>
                    <div class="flex rounded-md overflow-hidden">
                        <input type="email" placeholder="Enter email address"
                            class="flex-grow px-4 py-2 text-gray-900 focus:outline-none placeholder:text-sm" />
                        <button
                            class="bg-[#42389E] text-[13.3px] px-5 py-2 font-semibold text-white hover:bg-[#372f8a] transition duration-300">
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>
