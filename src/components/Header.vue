<script setup>
import { useRouter } from "vue-router";
import Logo from "../assets/svg/Logo.svg"

const router = useRouter()

const goToHome = () => {
  router.push("/")
}

</script>

<template>
  <header class="bg-primary">
    <div class="py-4">
      <Logo class="mx-auto" @click="goToHome()" />
    </div>
    <div class="bg-white h-6 w-full rounded-t-3xl"></div>
  </header>
</template>

<style lang="scss">
</style>
