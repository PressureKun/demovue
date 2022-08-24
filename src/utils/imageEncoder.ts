import { FormHTMLAttributes, InputHTMLAttributes } from "vue";

export const imageEncoder = (
  element: HTMLInputElement
): string | ArrayBuffer | null => {
  const reader: FileReader = new FileReader();

  let file: File | null = null;

  if (element.files) {
    file = element.files[0];
  }

  file ? reader.readAsDataURL(file) : false;

  return reader.result;
};
