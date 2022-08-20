<template>
  <main>
    <AppHeader />
    <div class="container mx-auto">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
</script>

<style lang="postcss">
#app {
  @apply text-base text-zinc-800;
}
</style>
