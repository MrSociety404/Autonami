<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<template>
  <div class="flex flex-col items-start">
    <label :for="label" class="my-2 ml-4 font-semibold text-lg">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="modelValue"
      :id="label"
      placeholder=" "
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
      class="bg-layer w-full rounded-full p-4"
    />
  </div>
</template>

