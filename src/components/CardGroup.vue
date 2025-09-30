<script setup lang="ts">
import { ref } from 'vue'
import Card from './Card.vue';


defineProps<{ cardCount: number }>()

</script>

<template>
  <div class="container">
    <Card v-for="n in cardCount" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
