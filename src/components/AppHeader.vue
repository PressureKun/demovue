<template>
  <header class="header w-full bg-primary text-base text-neutral-50">
    <div class="container mx-auto py-2">
      <div class="header__content flex justify-between items-center">
        <AppLogo />
        <nav
          class="nav flex justify-between items-center gap-4 text-xl font-medium"
        >
          <router-link to="/">Home</router-link>
          <router-link to="/maps">Maps</router-link>
          <router-link to="/timer">Timer</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
</script>

<style lang="postcss" scoped></style>
