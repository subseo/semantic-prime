<script lang="ts" setup>
import Card from "primevue/card";
import {useSlots} from "vue";

const slots = useSlots()

defineOptions({
  inheritAttrs: false
});

const preset = {
  root: {
    class: ['rounded', 'shadow', 'bg-surface', 'text-content']
  },
  body: {
    class: 'p-5'
  },
  title: {
    class: 'font-bold mb-2 pb-2 border-b'
  },
  subtitle: {
    class: ['text-xs', 'mb-2', 'text-content dark:text-content-dark']
  },
  content: {
    class: 'py-5'
  },
  footer: {
    class: 'pt-5'
  }
}


</script>

<template>
  <Card :pt="preset" :ptOptions="{ mergeSections: false, mergeProps: false }" v-bind="$attrs">
    <template v-if="slots.title" #title>
      <slot name="title"/>
    </template>
    <template v-if="slots.subtitle" #subtitle>
      <slot name="subtitle"/>
    </template>
    <template v-if="slots.content" #content>
      <slot name="content"/>
    </template>
    <template v-if="slots.footer" #footer>
      <slot name="footer"/>
    </template>
  </Card>
</template>