<script setup>
import LandingFox from "../assets/svg/FeedBackFox.svg";

import Button from "./Button.vue";
</script>

<template>
  <section class="fixed z-50 left-0 right-0 bottom-0 top-0 bg-secondary flex">
    <div class="bg-white rounded-t-3xl h-2/2 w-full mt-auto relative">
      <LandingFox class="mx-auto absolute left-0 right-0 -top-64" />

      <h2 class="font-semibold text-2xl text-center pt-12">
        Avez-vous éprouvé des difficultés à réaliser certaines tâches ?
      </h2>

      <Button @click="$emit('sendMessage')" class="bg-primary text-white"
        >Oui</Button
      >
      <Button @click="$emit('closeFeedback')" class="bg-layer">Non</Button>
    </div>
  </section>
</template>

<style lang="scss"></style>
