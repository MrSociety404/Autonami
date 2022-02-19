<script setup>
import Duo from '../assets/svg/Duo.svg'
import Solo from '../assets/svg/Solo.svg'

defineProps({
  todayEvent: Object
})
</script>

<template>
  <router-link
    :to="{ name: 'Edition', params: { id: todayEvent.id }}"
    class="block bg-secondary rounded-lg w-full my-6 p-4"
  >
    <div class="flex items-center">
      <div class="basis-4/5">
        <h2 class="font-semibold text-lg">
          {{ todayEvent.heure }}
        </h2>

        <p>{{ todayEvent.name }}</p>
      </div>

      <div class="border-black rounded-full border-2 w-12 h-12 flex items-center justify-center">
        <Solo v-if="todayEvent.help === '0'"  />
        <Duo v-else />
      </div>
    </div>
  </router-link>
</template>
