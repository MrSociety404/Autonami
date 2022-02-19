<script setup>
defineProps({
  todayEvent: Object
})
</script>

<template>
  <router-link :to="{ name: 'Edition', params: { id: todayEvent.id }}">
    bonjour
  </router-link>
</template>
