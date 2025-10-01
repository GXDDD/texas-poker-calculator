import { ref } from "vue";
import { defineStore } from "pinia";

export const useCardStore = defineStore("card", () => {
  const usedCards = ref([]);

  // 添加公共牌
  function addUsedCards({ suit, value }) {
    usedCards.value.push({ suit, value });
  }

  // 删除公共牌
  function deleteUsedCards({ suit, value }) {
    usedCards.value = usedCards.value.filter(
      (x) => !(x.suit === suit && x.value === value)
    );
  }

  // 将状态、计算属性和方法一起返回
  return { usedCards, addUsedCards, deleteUsedCards };
});
