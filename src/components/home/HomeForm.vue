<template>
  <div class="home__block">
    <form>
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
        >{{ field.text }}</component
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import AppInput from "../forms/AppInput.vue";
import AppRadio from "../forms/AppRadio.vue";
import AppTextarea from "../forms/AppTextarea.vue";

import { IUserInput } from "@/types";

import { reactive, computed, Component } from "vue";

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
  useremail: {
    name: "email",
    element: "input",
    text: "Введите вашу электронную почту",
    type: "email",
    value: "",
    required: false,
    validations: ["email"]
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
  },
  userphoto: {
    name: "image",
    element: "input",
    text: "Загрузите ваш аватар",
    type: "file",
    value: "",
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

    default:
      return AppInput;
  }
};
</script>

<style scoped></style>
