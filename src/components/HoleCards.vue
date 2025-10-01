<script setup lang="ts">
import { ref } from 'vue'
import CardGroup from './CardGroup.vue';

const playerCount = ref(2);
// defineProps<{ msg: string }>()

</script>

<template>
  <div class="container">
    <div class="player" v-for="n in playerCount">
      <div class="cards">
        <CardGroup :card-count="2" />
        <div class="title">玩家{{ n }}</div>
      </div>
      <div class="result"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.player {
  // border: 1px solid black;
  margin-top: 35px;
  .cards {
    width: 40%;
    .title {
      text-align: center;
    }
  }
}
</style>
