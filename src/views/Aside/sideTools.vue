<template>
  <div class="side-box">
    <div class="head">
      <b>控件配置</b>
      <el-button size="mini">绑定后台配置</el-button>
      <router-link to="/mine">
        <img :src="person" alt="头像" class="head-icon" />
      </router-link>
    </div>
    <div class="side-content">
      <el-form label-width="100px" class="form">
        <el-form-item label="常见的设置">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div class="button-x">
        <el-button type="primary" size="small">确定</el-button>
        <el-button type="danger" size="small">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import person from "/@/assets/person.png";
</script>

<style scoped>
.side-box {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.side-content {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.head-icon {
  width: 25px;
  border-radius: 50%;
}
.button-x {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
}
</style>
