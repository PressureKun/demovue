<template>
  <div>
    <router-link class="logo" to="/">
      <span class="logo__title"> VueCLI </span>
      <span class="logo__text"> demo project </span>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.logo {
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 38px;
    line-height: 1;
  }
  &__text {
    font-size: 19px;
    line-height: 1.2;
  }
}
</style>
