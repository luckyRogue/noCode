<template>
  <div class="login-x" :style="{ backgroundImage: 'url(' + bg + ')' }">
    <div class="bg-x">
      <div class="desc"></div>
      <div class="card-x">
        <div class="wrapper">
          <el-card class="card">
            <el-form
              class="form-x"
              ref="userFrom"
              :rules="numRules"
              :model="userForm"
            >
              <el-form-item prop="mobile">
                <el-input
                  placeholder="请输入手机号"
                  v-model="userForm.mobile"
                />
              </el-form-item>
              <el-form-item class="flex-item-x" prop="imgCode">
                <el-input
                  placeholder="请输入验证码"
                  v-model="userForm.imgCode"
                />
                <img
                  :src="verifyCode.codeUrl"
                  @click="getRandomCode"
                  class="code-x"
                />
              </el-form-item>
              <el-form-item class="flex-item-x" prop="code">
                <el-input placeholder="请输入动态码" v-model="userForm.code" />
                <el-button
                  class="ml20"
                  @click="getActiveCode"
                  :disabled="verifyCode.isSend"
                  >{{ verifyCode.msg }}</el-button
                >
              </el-form-item>
              <el-form-item>
                <el-button class="submit-btn red-btn" @click="submitFunc"
                  >登 录</el-button
                >
              </el-form-item>
            </el-form>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getRandomCode,
  numRules,
  userForm,
  verifyCode,
  getActiveCode,
} from "./verifyCode";
import { useRouter } from "vue-router";
import bg from "/@/assets/bg.jpg";

export default {
  setup() {
    getRandomCode();
    const Router = useRouter();
    const submitFunc = () => {
      const { mobile, code, status } = userForm;
      Router.push('/')
    };
    return {
      numRules,
      verifyCode,
      getRandomCode,
      userForm,
      getActiveCode,
      submitFunc,
      bg,
    };
  },
};
</script>

<style lang="scss">
.login-x {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-color: pink;
  background-repeat: no-repeat;
  background-position: center;
  .form-x {
    margin-top: 10px;
  }
  .flex-item-x {
    .el-form-item__content {
      display: flex;
    }
    .el-input {
      flex: 1;
    }
  }
  .code-x {
    width: 90px;
    height: 40px;
    margin-left: 20px;
    cursor: pointer;
    border: 1px solid #dcdee2;
    box-sizing: border-box;
  }
}
.login-x .card-x {
  position: absolute;
  right: 20%;
  top: 50%;
  transform: translateY(-50%);
  .title-x {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}
.login-x .desc {
  position: absolute;
  top: -60px;
  left: 200px;
  img {
    width: 300px;
  }
}
.login-x .wrapper {
  width: 362px;
}
.login-x .card {
  margin-top: 10px;
  padding-top: 20px;
}
.submit-btn {
  width: 100%;
}
.ml20 {
  margin-left: 20px;
}
</style>
