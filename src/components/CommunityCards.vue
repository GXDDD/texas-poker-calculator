<script setup lang="ts">
import { ref } from 'vue'
import CardGroup from './CardGroup.vue';

</script>

<template>
  <div class="container">
    <div class="flop">
      <CardGroup :card-count="3"/>
      <div class="title">翻牌</div>
    </div>
    <div class="turnAndRiver">
      <div>
        <CardGroup :card-count="1"/>
        <div class="title">转牌</div>
      </div>
      <div>
        <CardGroup :card-count="1"/>
        <div class="title">河牌</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  // border: 1px solid black;
  display: flex;
  .flop {
    margin-right: 40px;
    width: 55%;
  }
  .turnAndRiver {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
  .title {
    text-align: center;
  }
}
</style>
