<script setup>

import Calendar from "../assets/svg/Calendar.svg"
import Time from "../assets/svg/Time.svg"

defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
})
</script>

<template>
  <div class="flex flex-col items-start relative">
    <label :for="label" class="my-2 ml-4 font-semibold text-lg">{{ label }}</label>
    <div class="relative w-full">
      <input
        v-bind="$attrs"
        :value="modelValue"
        :id="label"
        @input="$emit('update:modelValue', $event.target.value)"
        class="bg-layer w-full rounded-full p-4 input"
      />
    </div>
  </div>
</template>

<style lang="scss">
</style>