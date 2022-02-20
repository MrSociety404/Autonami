<script setup>
import Month from '../composables/Month'
import Calendar from '../components/Calendar.vue'
import Feedback from "../components/Feedback.vue";
import MessageConf from "../components/MessageConf.vue";

import { ref } from 'vue'

let currentMonth = new Date().getMonth() + 1
let currentYear = new Date().getFullYear()
let month = ref(new Month(currentMonth, currentYear))
const feedbackIsOpen = ref(false);
const messageIsOpen = ref(false);

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

const displayHelp = () => {
  feedbackIsOpen.value = true
}

const clickPrevious = () => {
  currentMonth = currentMonth === 1 ? 12 : currentMonth - 1
  currentYear = currentMonth === 12 ? currentYear - 1 : currentYear
  month.value = new Month(currentMonth, currentYear)
}

const clickNext = () => {
  currentMonth = currentMonth === 12 ? 1 : currentMonth + 1
  currentYear = currentMonth === 1 ? currentYear + 1 : currentYear
  month.value = new Month(currentMonth, currentYear)
}
</script>

<template>
  <main>
    <Calendar
      :month="month"
      @clickPrevious="clickPrevious"
      @clickNext="clickNext"
      @clickMonth="displayHelp()"
    />
  </main>
  <Feedback
    v-if="feedbackIsOpen"
    @closeFeedback="closeFeedbackgHandler()"
    @sendMessage="sendMessageHandler()"
  />
  <MessageConf v-if="messageIsOpen" @closeMessage="closeMessageHandler()" />
</template>

<style lang="scss">
</style>
