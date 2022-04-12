<template>
  <div class="list">
    <el-form ref="form" :model="form" :rules="rules" label-width="0">
      <el-form-item>
        <el-input v-model="form.userName" placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          placeholder="请输入密码"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="btnLoading"
          class="btn-login"
          @click="submit('form')"
        >
          注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      btnLoading: false,
    };
  },
  methods: {
    // 登入
    submit() {
      var axios = require("axios");
      var data = JSON.stringify({
        username: this.form.userName,
        password: this.form.password,
      });

      var config = {
        method: "post",
        url: "https://todo.theappis.fun/api/user/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          if (response.data.status == 400) {
            alert("用户名已经注册过了哦！");
          }
          if (response.data.status == 200) {
            alert("恭喜你，注册成功！");
            this.$store.state.userName = this.form.userName;
            this.$router.push({ path: "/" });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.btn-login {
  width: 100%;
}
</style>