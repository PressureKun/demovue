<template>
  <label class="field">
    <legend class="field__title"><slot></slot></legend>

    <file-pond
      name="file"
      ref="pond"
      :allow-multiple="true"
      :files="files"
      :label-idle="parsedLabel"
      :accepted-file-types="acceptedFileTypes"
      store-as-file="true"
      allow-file-size-validation="true"
      label-file-type-not-allowed="Файл неверного формата"
      :file-validate-type-label-expected-types="
        'Принимаются файлы формата ' + writenTypes
      "
      :max-file-size="operatingFileSize"
      :max-files="maxFilesCount"
    />
  </label>
</template>

<script setup lang="ts">
import { computed, ref, Ref } from "vue";
import { TInputType } from "@/types";
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileEncode
);

interface IProps {
  name: string;
  type?: TInputType;
  value?: string | number;
  options?: { key: string; name: string | "" }[];
  required?: boolean;
  validations?: string[] | null;
}

const props = defineProps<IProps>();

// const dataValue: Ref<string | number> = ref(props.value ?? "");









const emits = defineEmits<{
  (e: "dataChange", value: string | number, name: string | ""): void;
}>();
</script>

<style lang="postcss" scoped></style>
