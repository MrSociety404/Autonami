<script setup>
import ConfirmationFox from "../assets/svg/ConfirmationFox.svg";
import Button from "./Button.vue";
</script>

<template>
  <section class="fixed z-50 left-0 right-0 bottom-0 top-0 bg-secondary flex">
    <div class="bg-white rounded-t-3xl h-2/2 w-full mt-auto relative">
      <ConfirmationFox class="mx-auto absolute left-0 right-0 -top-64" />

      <h2 class="font-semibold text-4xl text-center pt-12">Bien reçu !</h2>
      <p class="text-xl text-center py-8 px-7">
        Un membre de l’ASBL prendra contact avec vous prochainement
      </p>
      <Button @click="$emit('closeMessage')" class="bg-primary text-white"
        >D'accord</Button
      >
    </div>
  </section>
</template>

<style lang="scss"></style>
