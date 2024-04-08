<script lang="ts" setup>
import {reactive, ref, watch} from "vue";

const booleanState = ref(true)
const sliderValue = ref(300)
const chipsArray = ref(['Chip One', 'The second'])

const colors = reactive([
  {hsl: 'hsl(60,100%,50%)'},
  {hsl: 'hsl(60,100%,50%)'},
  {hsl: 'hsl(120,100%,50%)'},
  {hsl: 'hsl(180,100%,50%)'},
  {hsl: 'hsl(240,100%,50%)'},
  {hsl: 'hsl(300,100%,50%)'},
  {hsl: 'hsl(360,100%,50%)'},
])

watch(sliderValue, () => {
  colors[0].hsl = `hsl(${sliderValue.value},100%,50%)`
})

</script>

<template>
  <div class="flex gap-x-4 gap-y-8 flex-wrap">
    <Card class="w-72">
      <template #title>Accordion</template>
      <template #subtitle>Subtitle Text</template>
      <template #content>
        <Accordion :activeIndex="0">
          <AccordionTab>Accordion Item 1</AccordionTab>
          <AccordionTab>Accordion Item 2</AccordionTab>
        </Accordion>
      </template>
    </Card>

    <Card class="w-72">
      <template #title>Slider</template>
      <template #subtitle>Subtitle Text</template>
      <template #content>
        <div class="mb-8">
          <Slider v-model="sliderValue"/>
          <div class="mt-2 font-bold">
            {{ sliderValue }}
          </div>
        </div>
      </template>
    </Card>

    <Card class="w-72">
      <template #title>Gradiant Slider</template>
      <template #content>
        <div class="mb-8">
          <GradiantSlider v-model:colors="colors" v-model:count="sliderValue" :max="360"/>
          <div :style="'background: hsl('+sliderValue + ',100%,50%)'"
               class="mt-2 font-bold rounded text-xs p-1 text-white">
            Example: {{ sliderValue }}
          </div>
        </div>
      </template>
    </Card>

    <Card class="w-72">
      <template #title>Chips</template>

      <template #content>
        <Chips v-model="chipsArray" separator=",">
          <template #chip="slotProps">
            <div>
              <span>{{ slotProps.value }} - (active) </span>
            </div>
          </template>
        </Chips>
      </template>
    </Card>

    <h2 class="w-full text-xl font-bold text-primary">Form / Input</h2>

    <Card class="w-72">
      <template #title>Checkbox</template>

      <template #content>
        <Checkbox v-model="booleanState" :binary="true" inputId="checkboxId" name="pizza"/>
        <label class="ml-2" for="checkboxId"> Cheese </label>
      </template>
    </Card>

    <Card class="w-72">
      <template #title>Buttons</template>
      <template #content>
        <Button label="Default Button"/>
        <Button label="Link Button" link/>
      </template>
    </Card>

    <Card class="w-72">
      <template #title>Toggle</template>
      <template #content>
        <InputSwitch v-model="booleanState" inputId="primary" label="Primary"/>
      </template>
    </Card>

  </div>
</template>