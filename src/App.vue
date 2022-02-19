<script setup>
// Components
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import LandingPage from "./components/LandingPage.vue";

// Dependencies
import { ref } from "vue";
import Feedback from "./components/Feedback.vue";
import MessageConf from "./components/MessageConf.vue";

// Variables
const landingIsOpen = ref(true);
const feedbackIsOpen = ref(false);
const messageIsOpen = ref(false);

addEventListener("keypress", (e) => {
  if (e.key.toUpperCase() === "P") {
    feedbackIsOpen.value = true;
  }
});

// Logic
const closeLandingHandler = () => {
  landingIsOpen.value = false;
};

const closeFeedbackgHandler = () => {
  feedbackIsOpen.value = false;
};

const sendMessageHandler = () => {
  messageIsOpen.value = true;
  feedbackIsOpen.value = false;
};

const closeMessageHandler = () => {
  messageIsOpen.value = false;
};
</script>

<template>
  <Header />
  <router-view />
  <LandingPage v-if="landingIsOpen" @closeLanding="closeLandingHandler()" />
  <Feedback
    v-if="feedbackIsOpen"
    @closeFeedback="closeFeedbackgHandler()"
    @sendMessage="sendMessageHandler()"
  />
  <MessageConf v-if="messageIsOpen" @closeMessage="closeMessageHandler()" />
  <Menu />
</template>

<style></style>
