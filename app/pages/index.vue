<script lang="ts">
import { defineComponent } from 'vue'
import Features from '~/components/Features.vue'
import HeroSection from '~/components/HeroSection.vue'
import Teams from '~/components/Teams.vue'

export default defineComponent({
    setup() {

        definePageMeta: ({
            layout: 'Navbar'
        })
        return {}
    }
})
</script>
<template>
    <HeroSection />
    <Teams />
    <Features />



    <!-- Coming Soon Section -->
    <section class="py-16 px-4 bg-white">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
            <!-- Left Content -->
            <div>
                <!-- Coming Soon Tag -->
                <span class="px-6 py-1 rounded-full text-sm " style="background-color: #FFEBC9; color: #F9A71E;">
                    Coming Soon
                </span>

                <!-- Title -->
                <h2 class="text-[40px] font-bold text-[#2E2E2E] mt-4">
                    Be First to Power Your Features with DartCode AI
                </h2>

                <!-- Subtitle -->
                <p class="mt-2 mb-8 text-[#5D5D5E] text-lg">
                    DartCode AI is the only AI built specifically for Dart feature flagging. It learns from your app’s
                    live usage, optimizes rollouts in real time, and safeguards every release
                </p>

                <!-- Feature List -->
                <div class="space-y-6">
                    <!-- Item 1 -->
                    <div class="flex items-start gap-4">
                        <div class="">
                            <!-- Verify Badge Icon -->
                            <Icon name="bitcoin-icons:verify-filled" class="h-11 w-11 text-[#958CF1]" />
                        </div>
                        <div>
                            <h3 class="text-[18px] font-semibold text-[#3F3F3F]">Predict Rollout Success </h3>
                            <p class="text-[#676669]">Forecast which users will adopt features fastest</p>
                        </div>
                    </div>

                    <!-- Item 2 -->
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

                    <!-- Item 3 -->
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

                <!-- CTA Button -->
                <div class="mt-10">
                    <NuxtLink to="/get-started"
                        class="bg-[#42389E] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#372f8a] transition duration-300">
                        Start for $1/mo
                    </NuxtLink>
                </div>
            </div>

            <!-- Right Image -->
            <div class="hidden md:flex justify-center">
                <img src="/images/coming-soon.svg" alt="Coming Soon" class="w-full h-auto rounded-xl max-w-lg" />
            </div>
        </div>
    </section>

    <section class="py-16 px-4 bg-white">
        <div class="max-w-6xl mx-auto text-center">
            <!-- Heading -->
            <p class="text-lg md:text-xl text-[#42389E] mb-10">
                Trusted by various engineering teams
            </p>

            <!-- Logos -->
            <div class="flex flex-wrap justify-center items-center gap-16">
                <img src="/images/gcp.svg" alt="Google Cloud" class="h-12 md:h-14" />
                <img src="/images/aws.svg" alt="AWS" class="h-12 md:h-14" />
                <img src="/images/azure.svg" alt="Azure" class="h-12 md:h-14" />
                <img src="/images/digitalocean.svg" alt="DigitalOcean" class="h-12 md:h-14" />
                <img src="/images/ibm.svg" alt="IBM" class="h-12 md:h-14" />
            </div>
        </div>
    </section>



    <!-- Testimonials Section -->
    <section class="py-16 px-6 bg-[#ECEBF5]">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-5xl text-center font-bold text-[#42389E] mb-4">
                What Customers Say About Us
            </h2>
            <p class="text-[20px] text-[#42389E] mb-12 text-center">
                Stay updated with our groundbreaking research discoveries and scientific publications
            </p>

            <!-- Cards Wrapper -->
            <div class="grid gap-8 md:grid-cols-3">

                <!-- Card 1 -->
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

                <!-- Card 2 -->
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

                <!-- Card 3 -->
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


    <!-- Call To Action Section -->
    <section class="px-6 py-16">
        <div
            class="max-w-6xl mx-auto relative rounded-2xl bg-gradient-to-r from-[#42389E] via-[#6F66C2] to-[#42389E] text-white flex flex-col items-center justify-center text-center px-6 py-16">
            <!-- Title & Subtitle -->
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



    <!-- Footer -->
    <footer class="bg-[#E6E7F3] text-white">
        <section class="px-6 py-16">
            <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">

                <!-- Column 1: Logo + About -->
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

                <!-- Column 2: Company -->
                <div class="text-left md:col-span-1">
                    <h3 class="font-semibold text-lg mb-4 text-[#263238]">Company</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <NuxtLink to="/pricing" class="text-[#263238]">Pricing</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/docs" class="text-[#263238]">Docs</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="text-[#263238]">About Us</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Column 3: Resources -->
                <div class="text-left md:col-span-1">
                    <h3 class="font-semibold text-lg mb-4 text-[#263238]">Resources</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <NuxtLink to="/why-intellitoggle" class="text-[#263238]">Why IntelliToggle is Different
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/support" class="text-[#263238]">Customer Support</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/terms" class="text-[#263238]">Terms &amp; Conditions</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/privacy" class="text-[#263238]">Privacy Policy</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Column 4: Newsletter -->
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
