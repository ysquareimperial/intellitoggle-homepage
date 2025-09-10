<script lang="ts">
import { defineComponent } from 'vue'
import CallToAction from '~/components/CallToAction.vue'
import ComingSoon from '~/components/ComingSoon.vue'
import Features from '~/components/Features.vue'
import Footer from '~/components/Footer.vue'
import HeroSection from '~/components/HeroSection.vue'
import Teams from '~/components/Teams.vue'
import Testimonials from '~/components/Testimonials.vue'
import TrustedBy from '~/components/TrustedBy.vue'

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
    <ComingSoon />
    <TrustedBy />
    <Testimonials />
    <CallToAction />
    <Footer/>
</template>
