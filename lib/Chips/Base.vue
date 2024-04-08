<script lang="ts" setup>

import Chips from "primevue/chips";

defineOptions({
  inheritAttrs: false
});

defineProps();

const preset = {
  root: ({props}) => ({
    class: [
      'flex',
      {
        'opacity-60 select-none pointer-events-none cursor-default': props.disabled
      }
    ]
  }),
  container: ({state, props}) => ({
    class: [
      // Font
      'font-sans text-base leading-none',
      // Flex
      'flex items-center flex-wrap gap-2',
      // Spacing
      'm-0 py-1.5 px-3',
      // Size
      'w-full',
      'min-h-[2.877rem]',
      // Shape
      'list-none',
      'rounded',
      // Color
      'text-white dark:text-white/80',
      'bg-surface-dark dark:bg-surface-900',
      'border',
      {'border-surface dark:border-surface': !props.invalid},
      // Invalid State
      {'border-red-500 dark:border-red-400': props.invalid},
      // States
      {'hover:border-primary-500 dark:hover:border-primary-400': !props.invalid},
      'focus:outline-none focus:outline-offset-0',
      {'ring ring-primary-400/50 dark:ring-primary-300/50': state.focused},
      {'ring ring-primary-400/50 dark:ring-primary-300/50': state.hovered},
      // Transition
      'transition-colors duration-200',
      // Misc
      'cursor-text overflow-hidden',
      'appearance-none'
    ]
  }),
  inputtoken: {
    class: ['py-1.5 px-0', 'inline-flex flex-auto', 'bg-white text-primary']
  },
  input: {
    class: ['font-sans text-content leading-[1.2]', 'w-full', 'p-0 m-0', 'appearance-none rounded-none', 'border-0 outline-none', 'shadow-none', 'dark:text-white/80', 'bg-transparent']
  },
  token: {
    class: ['inline-flex items-center', 'py-1.5 px-3', 'rounded', 'text-white dark:text-white', 'bg-surface-darker']
  },
  label: {
    class: 'leading-5'
  },
  removeTokenIcon: {
    class: ['rounded-md leading-6', 'ml-2', 'w-4 h-4', 'transition duration-200 ease-in-out', 'cursor-pointer']
  }
}
</script>

<template>
  <div class="max-w-64">
    <Chips :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" v-bind="$attrs"/>
  </div>
</template>

<style scoped>

</style>