<script setup lang="ts">
import { ref, computed } from 'vue'

const drawer = ref(false);
const suit = ref(["♠", "♥", "♦", "♣"]);
const value = ref(["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]);
const colorMap = ref({
  "♠": "black",
  "♥": "red",
  "♦": "#00bfff",
  "♣": "#3d9140",
})
// defineProps<{ cardCount: number }>()

</script>

<template>
  <div class="container" @click="drawer = !drawer">

  </div>
  <el-drawer v-model="drawer" :with-header="false" direction="btt" :size="290" body-class="drawer">
    <div>
      <div v-for="s in suit" class="row" :style="{ color: colorMap[s] }">
        <div v-for="v in value" class="card">
          <div class="suit">{{ s }}</div>
          <div class="value">{{ v }}</div>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<style>
.drawer {
  background-color: #292421;
}
</style>
<style scoped>
.container {
  width: 80px;
  height: 120px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}

.row {
  display: flex;

  .card {
    border: 1px solid black;
    width: 40px;
    height: 60px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    background-color: #FAFFF0;

    .suit {
      font-size: 35px;
      line-height: 35px;
      position: absolute;
      bottom: 0;
      right: 5px;
    }

    .value {
      font-size: 25px;
      line-height: 25px;
      position: absolute;
      top: 2px;
      left: 5px;
    }
  }
}
</style>
