<template>
  <fieldset class="field__group">
    <legend class="field__title"><slot></slot></legend>

    <label v-for="option in options" :key="option.key" class="radio">
      <input
        v-model="dataValue"
        :required="required"
        :type="type"
        :name="name"
        :value="option.key"
        @change="$emit('dataChange', dataValue, name)"
        class="radio__input"
      />
      <span class="radio__text">{{ option.name ?? option.key }}</span>
    </label>
  </fieldset>
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

<style scoped lang="scss"></style>
