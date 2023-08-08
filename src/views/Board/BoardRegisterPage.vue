<script lang="ts" setup>
import { ref } from "vue";
import { Board } from "../../types/Board";
import { useBoardStore } from "../../store/modules/Board/Board";
import Table from "../../components/common/Table.vue";

defineOptions({
  name: "BoardRegisterPage",
});

const boardStore = useBoardStore();

const title = ref("");
const writer = ref("");
const content = ref("");

const tableColumns = [
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "작성자",
    dataIndex: "writer",
    key: "writer",
  },
  {
    title: "본문",
    dataIndex: "content",
    key: "content",
  },
];

const tableData = [
  {
    title: "집",
    writer: "가고",
    content: "싶다",
  },
];

const onSubmit = () => {
  const newBoard: Board = {
    title: title.value,
    writer: writer.value,
    content: content.value,
  };

  boardStore.createBoard(newBoard);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>제목</td>
        <td>
          <input type="text" v-model="title" />
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input type="text" v-model="writer" />
        </td>
      </tr>
      <tr>
        <td>본문</td>
        <td>
          <textarea cols="50" rows="20" v-model="content" />
        </td>
      </tr>
    </table>

    <div>
      <button type="submit">등록</button>
      <!-- <router-link :to="{ name: 'JpaBoardListPage' }"> 취소 </router-link> -->
    </div>
  </form>

  <Table :columns="tableColumns" :data="tableData" />
</template>
