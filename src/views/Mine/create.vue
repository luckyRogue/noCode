<template>
  <ul class="layout-x">
    <li class="item" v-for="item in data">常见模版</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const data = ref(new Array(10));
</script>

<style lang="scss" scoped>
.layout-x {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 200px;
    height: 280px;
    margin-bottom: 20px;
    margin-right: 20px;
    background: #e8e8e8;
  }
}
</style>
