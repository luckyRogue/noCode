<template>
  <el-container class="x">
    <el-header>
      <div class="header-x">
        <b>标题</b>
        <div>
          <el-dropdown>
            <div class="df">
              <span>欢迎用户xx！</span>
              <img :src="person" alt="头像" class="head-icon" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人资料</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-container class="container-x">
      <el-aside width="200px" class="side-l">
        <el-menu router>
          <el-menu-item index="/mine/create"> 新建 </el-menu-item>
          <el-menu-item index="/mine/project"> 项目列表 </el-menu-item>
          <el-menu-item index="/mine/recycleBin"> 回收站 </el-menu-item>
          <el-menu-item index="/mine/dataBase"> 数据库 </el-menu-item>
          <el-menu-item index="/mine/deploy"> 部署服务器 </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main class="pd">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import person from "/@/assets/person.png";
</script>

<style lang="scss" scoped>
.header-x {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.head-icon {
  width: 25px;
  border-radius: 50%;
}
.df {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.container-x {
  height: 100%;
}
.side-l {
  height: 100%;
}
.pd {
  padding: 20px;
}
</style>
