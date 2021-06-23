<template>
  <div>
    <h1>我的项目</h1>
    <div class="list-header">
      <span>最近浏览</span>
      <div class="btns">
        <el-input placeholder="请输入" class="inp">
          <template #append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
        <el-button class="ml20" type="primary">新建</el-button>
        <el-button class="ml20" type="primary">导入</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="size" label="大小"> </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const tableData = [
  {
    date: "2016-05-02",
    name: "王小虎",
    size: "200M",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    size: "200M",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    size: "200M",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    size: "200M",
  },
];
</script>

<style scoped lang="scss">
.list-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.btns {
  display: flex;
  .inp {
    width: 200px;
  }
}
</style>
