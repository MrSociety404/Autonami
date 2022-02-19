<script setup>
import LogoText from "../assets/svg/LogoText.svg"
import LandingFox from "../assets/svg/LandingFox.svg"

import Button from "./Button.vue";
import { onMounted, ref } from "vue";

const user = ref(null)

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem("user"))
})

</script>

<template>
  <section class="fixed z-50 left-0 right-0 bottom-0 top-0 bg-secondary flex">
    <div class="bg-white rounded-t-3xl h-1/2 w-full mt-auto relative">
      <LandingFox class="mx-auto absolute left-0 right-0 -top-72" />
      <LogoText class="mx-auto my-12" />
      <h2
        v-if="user"
        class="text-primary text-3xl text-center tracking-wider"
      >Bonjour {{ user.name }} !</h2>
      <Button content="Plannifier la journée" @click="$emit('closeLanding')" />
    </div>
  </section>
</template>

<style lang="scss">
</style>
