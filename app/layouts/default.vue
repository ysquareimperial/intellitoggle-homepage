<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '~/components/Navbar.vue';

export default defineComponent({
    setup() {
        return {}
    }
})
</script>

<template>
    <div>
        <Navbar />
        <slot />
    </div>
</template>
