<template>
  <fieldset class="field__group">
    <legend class="field__title"><slot></slot></legend>

    <label v-for="option in options" :key="option.key" class="field radio">
      <span class="radio__text">{{ option.name ?? option.key }}</span>
      <input
        v-model="dataValue"
        :required="required"
        :type="type"
        :name="name"
        :value="option.key"
        class="radio__input"
      />
    </label>
  </fieldset>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from "vue";
import { TInputType } from "@/types";

export interface Props {
  name: string;
  type?: TInputType;
  value: string | number;
  options?: { key: string; name: string | "" }[];
  required?: boolean;
  validations?: string[] | null;
}

const props = defineProps<Props>();

const dataValue: Ref<string | number> = ref(props.value);
</script>

<style scoped></style>
