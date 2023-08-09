<script lang="ts" setup>
import { ref } from "vue";
import Card from "../../components/common/Card.vue";
import Modal from "../../components/common/Modal.vue";

defineOptions({
  name: "HomeMainPage",
});

const showModal = ref(false);
const modalTitle = "My Modal";

const handleOk = (): void => {
  showModal.value = false;
};

const handleCancel = (): void => {
  showModal.value = false;
};
</script>
<template>
  <div class="container">
    <Card :title="'방문자'">
      <div class="text-container">
        <span class="count">1737명</span>
        <span class="percent rise">18.3%</span>
      </div>
    </Card>
    <Card :title="'주문'">
      <div class="text-container">
        <span class="count">1737명</span>
        <span class="percent decline">22.3%</span>
      </div>
    </Card>
    <Card :title="'매출'">
      <div class="text-container">
        <span class="count">1737명</span>
        <span class="percent decline">48.3%</span>
      </div>
    </Card>

    <button @click="showModal = true">모달버튼</button>
    <Modal
      :visible="showModal"
      :title="modalTitle"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title>
        <div>Custom Modal Title</div>
      </template>

      <template #footer>
        <a-button @click="handleCancel">Custom Cancel</a-button>
        <a-button type="primary" @click="handleOk">Custom OK</a-button>
      </template>
    </Modal>
  </div>
</template>

<style scoped lang="less">
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  .text-container {
    display: flex;
    justify-content: space-between;

    .count {
      font-size: 24px;
      font-weight: 700;
    }

    .percent {
      font-size: 16px;
      font-weight: 700;
      padding: 4px 8px;
      color: #ffffff;
      border-radius: 20px;
      margin-top: 4px;

      &.decline {
        background-color: #2ecc71;
      }
      &.rise {
        background-color: #e74c3c;
      }
    }
  }
}
</style>
