<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";

defineOptions({
  name: "MocksTestPage",
});

type TodoType = {
  id: number;
  text: string;
};

const todos = ref<TodoType[]>([]);
const newTodoText = ref<string>("");
const editTodoText = ref<string>("");
const editingTodoId = ref<number | null>(null);

// Get
const fetchTodos = async () => {
  try {
    const response = await axios.get("/todos");
    todos.value = response.data;
  } catch (error) {
    console.error("Error fetching todos: ", error);
  }
};

// Post
const addTodo = async () => {
  try {
    await axios.post("/todos", newTodoText.value);
    newTodoText.value = "";
    fetchTodos(); // 새로운 할 일을 추가한 후, 할 일 목록을 다시 가져옵니다.
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};

// Put
const editTodo = async () => {
  try {
    await axios.put(`/todos/${editingTodoId.value}`, editTodoText.value);
    editingTodoId.value = null;
    editTodoText.value = "";
    await fetchTodos();
  } catch (error) {
    console.error("Error editing todo: ", error);
  }
};

// Delete
const deleteTodo = async (todoId: number) => {
  try {
    await axios.delete(`/todos/${todoId}`);
    todos.value = todos.value.filter((todo) => todo.id !== todoId);
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
};

const handleEdit = (todoId: number, todoText: string) => {
  editingTodoId.value = todoId;
  editTodoText.value = todoText;
};

onMounted(fetchTodos);
</script>

<template>
  <h1>Todo List</h1>
  <input v-model="newTodoText" @keyup.enter="addTodo" />
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <template v-if="editingTodoId === todo.id">
        <input type="text" v-model="editTodoText" @keyup.enter="editTodo" />
        <button @click="editTodo">Save</button>
        <button @click="editingTodoId = null">Cancel</button>
      </template>

      <template v-else>
        {{ todo.text }}
        <button @click="handleEdit(todo.id, todo.text)">Edit</button>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </template>
    </li>
  </ul>
</template>
