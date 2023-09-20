<script setup>
import { ref } from 'vue'
import GetLast5GamesH2HData from './test'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="GetLast5GamesH2HData('Degerfors IF', 'Malmö FF')">teste</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
