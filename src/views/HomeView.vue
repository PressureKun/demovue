<template>
  <div class="home py-10">
    <div class="home__block">
      <HomeInfo />
    </div>
    <div class="home__block">
      <HomeForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeForm from "@/components/home/HomeForm.vue";
import HomeInfo from "@/components/home/HomeInfo.vue";
</script>
