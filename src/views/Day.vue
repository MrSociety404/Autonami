<script setup>
// Components
import Event from '../components/Event.vue'
import Month from '../composables/Month'

// Dependencies
import { useRoute } from 'vue-router'

// Variables
const route = useRoute()
const user = JSON.parse(localStorage.getItem('user'))
const events = user.events
const rebuiltDate = [
  parseInt(route.params.year),
  parseInt(route.params.month),
  parseInt(route.params.day)
]
const todayEvents = new Month(
  rebuiltDate[1],
  rebuiltDate[0]
).days[
  rebuiltDate[2] - 1
].events
</script>

<template>
  <main class="p-8">
    <h1
      class="text-center text-xl font-semibold"
    >{{ `${rebuiltDate[2]}/${rebuiltDate[1]}/${rebuiltDate[0]}` }}</h1>

    <section class="flex">
      <div class="mx-auto w-full" v-if="todayEvents.length > 0">
        <Event v-for="todayEvent of todayEvents" :key="todayEvent.id" :todayEvent="todayEvent" />
      </div>

      <p class="mx-auto" v-else>Aucun évènement prévu.</p>
    </section>
  </main>
</template>
