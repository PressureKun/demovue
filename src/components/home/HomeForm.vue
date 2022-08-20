<template>
  <div class="home__block">
    <form>
      <AppInput> Введите ваше имя: </AppInput>
    </form>
  </div>
</template>

<script setup lang="ts">
import AppInput from "../forms/AppInput.vue";
import { reactive, computed } from "vue";

interface UserData {
  username: string;
  usersurname?: string;
  useremail?: string;
  userdesc?: string;
  usergender?: number;
  userphoto?: string;
}

const userData: UserData = reactive({
  username: "",
  usersurname: "",
  useremail: "",
  userdesc: "",
  usergender: "",
  userphoto: "",
});
</script>

<style scoped></style>
