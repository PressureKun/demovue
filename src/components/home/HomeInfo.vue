<template>
  <div>
    <div class="info flex gap-8">
      <div class="info__block flex p-4 shadow rounded w-1/2">
        <div class="info__image flex h-full w-full relative overflow-hidden">
          <picture v-if="userData.userphoto">
            <img
              class="object-cover absolute transform translate-x--1/2 translate-y--1/2 top-1/2 left-1/2"
              :src="userData.userphoto"
              :alt="userData.username"
            />
          </picture>
        </div>
      </div>

      <div class="info__block p-4 shadow rounded flex flex-col gap-4 w-1/2">
        <div class="text-field flex flex-col gap-2" v-if="userFullname">
          <span class="title font-medium"> Привет, меня зовут: </span>
          <p class="text text-xl">
            {{ userFullname }}
          </p>
        </div>
        <div class="text-field flex flex-col gap-2" v-if="userData.usergender">
          <span class="title font-medium"> Пол: </span>
          <p class="text text-xl">
            {{ userFullname }}
          </p>
        </div>
        <div class="text-field flex flex-col gap-2" v-if="userData.userbirth">
          <span class="title font-medium"> Дата моего рождения: </span>
          <p class="text text-xl">
            {{ userData.userbirth }}
          </p>
        </div>
        <div class="text-field flex flex-col gap-2" v-if="userData.useremail">
          <span class="title font-medium"> Мой почтовый адрес: </span>
          <p class="text text-xl">
            {{ userData.useremail }}
          </p>
        </div>
        <div class="text-field flex flex-col gap-2" v-if="userData.useremail">
          <span class="title font-medium"> Мой почтовый адрес: </span>
          <p class="text text-xl">
            {{ userData.useremail }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onActivated, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import { IUserState } from "@/store/user/types";

const store = useStore();

const getUserData = (): void => {
  store.dispatch("loadUserInfo");
};

onBeforeMount(() => {
  console.log(
    "🚀 ~ file: HomeInfo.vue ~ line 36 ~ onBeforeMount ~ onBeforeMount",
    "onBeforeMount"
  );

  getUserData();
});

const userData = computed((): IUserState => {
  return store.getters.userInfo;
});

const userFullname = computed((): string | null => {
  return (userData.value.username + " " + userData.value.usersurname).trim();
});
</script>

<style scoped></style>
