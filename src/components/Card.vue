<script setup lang="ts">
import { ref } from 'vue'
import { useCardStore } from '@/stores/card.js';
import { storeToRefs } from 'pinia'

const counter = useCardStore();
const { addUsedCards, deleteUsedCards } = counter;
const { usedCards } = storeToRefs(counter);

const drawer = ref(false);
const suitList = ref(["♠", "♥", "♦", "♣"]);
const valueList = ref(["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]);
const suitColorMap = ref({
  "♠": "black",
  "♥": "red",
  "♦": "#00bfff",
  "♣": "#3d9140",
})
const suit = ref();
const value = ref();

// 保存选择的牌
function selectCard(s, v) {
  if (isDisabledCard(s, v)) return;
  suit.value = s;
  value.value = v;
  addUsedCards({
    suit: s,
    value: v
  });
  drawer.value = !drawer.value;
}

// 选牌
function onCardClick() {
  if (suit.value) {
    // 如果已经选择了，就取消
    deleteUsedCards({
      suit: suit.value,
      value: value.value
    });
    suit.value = null;
    value.value = null;
  } else {
    // 没选择则弹出选择卡片的抽屉
    drawer.value = !drawer.value;
  }
}

// 公共牌已有的牌无法被选择
function isDisabledCard(s, v) {
  return usedCards.value.filter(({ suit, value }) => s === suit && v === value).length !== 0;
}

</script>

<template>
  <div class="container" @click="onCardClick" :class="{ isSelected: suit && value }"
    :style="{ color: suitColorMap[suit] }">
    <div class="suit">{{ suit }}</div>
    <div class="value">{{ value }}</div>
  </div>
  <!-- 选牌抽屉 -->
  <el-drawer v-model="drawer" :with-header="false" direction="btt" :size="290" body-class="drawer">
    <div>
      <div v-for="s in suitList" class="row" :style="{ color: suitColorMap[s] }">
        <div v-for="v in valueList" class="card" :class="{ disabled: isDisabledCard(s, v) }"
          @click="() => selectCard(s, v)">
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
.isSelected {
  background-color: #FAFFF0;
}

.container {
  width: 80px;
  height: 120px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  .suit {
    font-size: 70px;
    line-height: 70px;
    position: absolute;
    bottom: 0;
    right: 10px;
  }

  .value {
    font-size: 50px;
    line-height: 50px;
    position: absolute;
    top: 4px;
    left: 10px;
  }
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

    &.disabled {
      filter: brightness(50%);
      cursor: not-allowed;
    }
  }
}
</style>
