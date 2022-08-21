<template>
  <label class="field">
    <legend class="field__title"><slot></slot></legend>

    <textarea
      :type="type"
      :required="required"
      :name="name"
      v-model="dataValue"
      class="field__input"
    ></textarea>
  </label>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from "vue";

import { TFormElement, TInputType } from "@/types";

export interface Props {
  name: string;
  element: TFormElement;
  type?: TInputType;
  value: string | number;
  options?: { key: string; name: string | "" }[];
  required?: boolean;
  validations?: string[] | null;
}

const props = defineProps<Props>();

const dataValue: Ref<string | number> = ref(props.value);
</script>

<style lang="postcss" scoped></style>
