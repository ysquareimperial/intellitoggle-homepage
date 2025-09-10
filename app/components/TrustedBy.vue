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
        <div class="max-w-6xl mx-auto text-center">

            <p class="text-lg md:text-xl text-[#42389E] mb-10">
                Trusted by various engineering teams
            </p>

            <div class="flex flex-wrap justify-center items-center gap-16">
                <img src="/images/gcp.svg" alt="Google Cloud" class="h-12 md:h-14" />
                <img src="/images/aws.svg" alt="AWS" class="h-12 md:h-14" />
                <img src="/images/azure.svg" alt="Azure" class="h-12 md:h-14" />
                <img src="/images/digitalocean.svg" alt="DigitalOcean" class="h-12 md:h-14" />
                <img src="/images/ibm.svg" alt="IBM" class="h-12 md:h-14" />
            </div>
        </div>
    </section>
</template>
