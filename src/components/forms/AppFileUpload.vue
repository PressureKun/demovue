<template>
  <label class="field">
    <legend class="field__title"><slot></slot></legend>

    <file-pond
      :name="props.name"
      ref="pond"
      :allow-multiple="isMultiple"
      :label-idle="label"
      @updatefiles="getFile64"
      :accepted-file-types="fileData.fileTypes"
      :allow-file-encode="true"
      allow-file-size-validation="true"
      label-file-type-not-allowed="Файл неверного формата"
      :file-validate-type-label-expected-types="
        'Принимаются файлы формата ' + humanTypes
      "
      :max-file-size="fileData.fileSize"
      :max-files="fileData.fileOverallSize"
    />
  </label>
</template>

<script setup lang="ts">
import { computed, reactive, ref, Ref } from "vue";
import { TInputType } from "@/types";
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
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
  file?: {
    types: string;
    fileSize: number;
    overallSize: number;
    filesAmount: number;
  };
}

const pond = ref(null);

const props = withDefaults(defineProps<IProps>(), {
  file: () => {
    return {
      types: "image/parseStringStyle, image/lpg",
      fileSize: 300,
      overallSize: 1200,
      filesAmount: 5
    };
  }
});

const files: Ref<string | number> = ref(props.value ?? "");

const fileData = reactive({
  fileTypes: props.file?.types,
  fileOverallSize: props.file?.overallSize,
  fileSize: props.file?.fileSize,
  filesAmount: props.file?.filesAmount
});

const label = computed((): string | undefined => {
  return `
      <span class="label-top">Переместите изображения в это поле или нажмите и <span class='highlight'> выберите на своем устройстве </span></span>
      <span class="label-info">Принимаются до ${fileData.filesAmount} файл формата ${humanTypes.value}, размером не более ${fileData.fileSize} Kb</span>
      `;
});

const isMultiple = computed((): boolean => {
  return fileData.filesAmount && fileData.filesAmount > 1 ? true : false;
});

const getFile64 = (files: any): void => {
  if (!files) return;
  let filesString: string;

  filesString = files
    .map((file: any) => {
      return file.getFileEncodeDataURL();
    })
    .join(", ");

  emits("dataChange", filesString, props.name);

  console.log(filesString);
};

const humanTypes = computed((): string | undefined => {
  return fileData.fileTypes
    ? fileData.fileTypes
        .split(",")
        .map((item) => {
          let trimmed = item.trim();
          let final =
            trimmed.indexOf("/") > -1
              ? trimmed.slice(trimmed.indexOf("/") + 1, trimmed.length)
              : trimmed;
          return final.toUpperCase();
        })
        .join(", ")
    : "";
});

const emits = defineEmits<{
  (e: "dataChange", value: string | number, name: string | ""): void;
}>();
</script>

<style lang="postcss" scoped></style>
