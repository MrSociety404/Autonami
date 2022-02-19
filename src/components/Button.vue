<template>
  <button
    class="w-80 rounded-full bg-secondary mx-auto my-8 py-4 block text-xl font-bold text-center button tracking-wider"
  >
    <slot />
  </button>
</template>


<style lang="scss">
.button {
  transition: transform 0.2s ease;

  &:active {
    transform: translateY(2px);
  }
}
</style>
