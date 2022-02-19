<script setup>
import { ref } from '@vue/reactivity';
import LandingPage from '../components/LandingPage.vue';


const landingIsOpen = ref(true)

const closeLandingHandler = () => {
  landingIsOpen.value = false
}
</script>

<template>
  <main>
    <LandingPage v-if="landingIsOpen" @closeLanding="closeLandingHandler()" />
  </main>
</template>

<style lang="scss">
</style>
