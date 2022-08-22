<template>
  <label class="field">
    <legend class="field__title"><slot></slot></legend>

    <input
      :type="type"
      :required="required"
      :name="name"
      @input="$emit('dataChange', dataValue, name)"
      v-model="dataValue"
      class="field__input"
    />
  </label>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from "vue";
import { TInputType } from "@/types";

interface IProps {
  name: string;
  type?: TInputType;
  value: string | number;
  options?: { key: string; name: string | "" }[];
  required?: boolean;
  validations?: string[] | null;
}

const props = defineProps<IProps>();

const dataValue: Ref<string | number> = ref(props.value);

const emits = defineEmits<{
  (e: "dataChange", value: string | number, name: string | ""): void;
}>();
</script>

<style lang="postcss" scoped></style>
