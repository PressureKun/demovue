<template>
  <form class="mx-auto grid grid-cols-2 gap-4 w-3/5">
    <!-- <AppInput
        :inputName="userData.username.name"
        :inputValue="userData.username.value"
        :inputType="'text'"
      >
        Введите ваше имя:
      </AppInput> -->

    <component
      v-for="field in userData"
      :key="field.name"
      :is="choseComponent(field.element)"
      :name="field.name"
      :type="field.type"
      :value="field.value"
      :options="field.options"
      :validations="field.validations"
      :required="field.required"
      @dataChange="setData"
      >{{ field.text }}</component
    >
  </form>
</template>

<script setup lang="ts">
import { reactive, computed, Component } from "vue";

import AppInput from "../forms/AppInput.vue";
import AppRadio from "../forms/AppRadio.vue";
import AppSelect from "../forms/AppSelect.vue";
import AppTextarea from "../forms/AppTextarea.vue";

import { IUserInput } from "@/types";
import store from "@/store";

interface IUserData {
  [key: string]: IUserInput;
}

const userData: IUserData = reactive({
  username: {
    name: "username",
    element: "input",
    text: "Введите ваше имя",
    type: "text",
    value: "",
    required: true,
    validations: ["required"]
  },
  usersurname: {
    name: "usersurname",
    element: "input",
    text: "Введите вашу фамилию",
    type: "text",
    value: "",
    required: false
  },
  userbirth: {
    name: "usersurname",
    element: "input",
    text: "Введите вашу дату рождения",
    type: "date",
    value: "",
    required: false
  },
  useremail: {
    name: "email",
    element: "input",
    text: "Введите вашу электронную почту",
    type: "email",
    value: "",
    required: false,
    validations: ["email"]
  },
  userseason: {
    name: "season",
    element: "select",
    text: "Выберете ваше любимое время года",
    value: "",
    required: false,
    options: [
      { key: "winter", name: "Зима" },
      { key: "spring", name: "Весна" },
      { key: "summer", name: "Лето" },
      { key: "autumn", name: "Осень" }
    ]
  },
  userphoto: {
    name: "image",
    element: "input",
    text: "Загрузите ваш аватар",
    type: "file",
    value: "",
    required: false
  },
  userdesc: {
    name: "descripttion",
    element: "textarea",
    text: "Расскажите о себе",
    value: "",
    required: false
  },
  usergender: {
    name: "gender",
    element: "radio",
    text: "Укажите ваш пол",
    type: "radio",
    value: "male",
    options: [
      { key: "none", name: "Не указан" },
      { key: "male", name: "Мужской" },
      { key: "female", name: "Женский" }
    ],
    required: false
  }
});

const choseComponent = (element: string): Component => {
  switch (element) {
    case "input":
      return AppInput;
    case "textarea":
      return AppTextarea;
    case "radio":
      return AppRadio;
    case "select":
      return AppSelect;

    default:
      return AppInput;
  }
};

const storeTest = computed(() => store.state.helloMessage);

const setData = (value: string | number, name: string | "") => {
  Object.values(userData).map((block) => {
    return block.name === name ? (block.value = value) : block;
  });
};
</script>

<style scoped></style>
