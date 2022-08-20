<template>
  <label class="field">
    <span class="field__title"><slot></slot></span>

    <input type="text" :name="inputName" v-model="value" class="field__input" />
  </label>

  {{ value }}
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, Ref } from "vue";
const props = defineProps<{
  inputName: string;
  validation?: string[];
}>();

const value: Ref<string | number> = ref("");
</script>

<style lang="postcss" scoped></style>
