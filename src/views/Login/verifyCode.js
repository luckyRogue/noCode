import { randomLetter, generateBlob } from "yh-verificationcode";
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";

// 获取图形验证码
const randomCode = () => {
  const val = randomLetter(4, [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ]);
  window.URL.revokeObjectURL(val);
  return new Promise((resolve) => {
    generateBlob(val, {
      bezierLineNumber: 0,
      dotNumber: 20,
    }).then((res) => {
      if (res) {
        const blobUrl = window.URL.createObjectURL(res);
        resolve({
          code: val,
          codeUrl: blobUrl,
        });
      }
    });
  });
};

const userForm = reactive({
  mobile: "",
  imgCode: "",
  code: "",
  status: 2,
});

const verifyCode = reactive({
  codeUrl: "",
  vertifyCode: "",
  phoneVerifyCode: "",
  msg: "获取验证码",
  isSend: false,
});

const validateImageCode = (rule, value, callback) => {
  if (value !== verifyCode.vertifyCode) {
    callback(new Error("验证码不正确"));
  } else {
    callback();
  }
};
const getRandomCode = () => {
  randomCode().then((res) => {
    verifyCode.codeUrl = res.codeUrl;
    verifyCode.vertifyCode = res.code;
  });
};
// 登录校验
const numRules = ref({
  mobile: [
    {
      required: true,
      message: "手机号不能为空",
      trigger: "blur",
    },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
  imgCode: [
    {
      required: true,
      message: "验证码不能为空",
      trigger: "blur",
    },
    {
      validator: validateImageCode,
      trigger: "blur",
    },
  ],
  code: [
    {
      required: true,
      message: "验证码不能为空",
    },
  ],
});
let timer = null;
const getActiveCode = () => {
  verifyCode.phoneVerifyCode = null;
  const pattern = /^1[3-9]\d{9}$/;
  if (!pattern.exec(userForm.mobile)) {
    ElMessage.error("请输入正确的手机号");
    return false;
  }
  if (userForm.imgCode !== verifyCode.vertifyCode) {
    ElMessage.error("图形验证码不正确");
    return false;
  }
  let count = 60;
  if (!timer) {
    count = 60;
    verifyCode.isSend = true;
    verifyCode.msg = "请" + count + "s后" + "重新发送";
    timer = setInterval(() => {
      if (count > 1 && count <= 60) {
        count--;
        verifyCode.msg = "请" + count + "s后" + "重新发送";
      } else {
        verifyCode.isSend = false;
        clearInterval(timer);
        timer = null;
        verifyCode.msg = "重新发送";
      }
    }, 1000);
  }
};
export { userForm, numRules, getRandomCode, verifyCode, getActiveCode };
