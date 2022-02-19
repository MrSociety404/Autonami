<script setup>
import Month from '../composables/Month'
import Calendar from '../components/Calendar.vue'
import { ref } from 'vue'

let currentMonth = new Date().getMonth() + 1
let currentYear = new Date().getFullYear()
let month = ref(new Month(currentMonth, currentYear))

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
    />
  </main>
</template>

<style lang="scss">
</style>
