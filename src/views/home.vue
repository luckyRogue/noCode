<template>
  <el-container class="x">
    <el-aside width="200px" class="side-l">
      <side-bar></side-bar>
    </el-aside>
    <el-container class="container-x">
      <el-header>
        <tools></tools>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
    <el-aside width="280px" class="side-r">
      <sideTools></sideTools>
    </el-aside>
  </el-container>
</template>

<script setup>
import sideBar from "./Aside/sideBar.vue";
import sideTools from "./Aside/sideTools.vue";
import tools from "./Header/index.vue";
import Main from "./Main/index.vue";
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
.el-aside {
  height: 100%;
  padding: 10px;
}
</style>
<style scoped>
.container-x {
  margin: 0 20px;
  min-width: 800px;
}
.x {
  height: 100%;
}
.side-l {
  border-right: 1px solid #eee;
}
.side-r {
  border-left: 1px solid #eee;
}
</style>
