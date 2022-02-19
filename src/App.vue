<script setup>
// Components
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import LandingPage from './components/LandingPage.vue';

// Dependencies
import { ref } from 'vue';

// Variables
const landingIsOpen = ref(true)

// Logic
const closeLandingHandler = () => {
  landingIsOpen.value = false
}

</script>

<template>
  <Header />
  <router-view />
  <LandingPage v-if="landingIsOpen" @closeLanding="closeLandingHandler()" />
  <Menu />
</template>

<style>
</style>
