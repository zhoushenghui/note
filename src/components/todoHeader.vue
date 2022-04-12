<template>
  <div class="header">
    <a v-show="isLogin">{{ userName }}</a>
    <router-link to="/">登录</router-link>
    <router-link to="/regist">注册</router-link>
  </div>
</template>

<script>
export default {
  name: "todoHeader",
  data() {
    return {
      isLogin: true,
    };
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    },
  },
};
</script>

<style>
.header {
  width: 100%;
  background-color: rgb(235, 250, 223);
  font-size: 18px;
  position: fixed;
  top: 0px;
}
a {
  float: left;
  margin-left: 10px;
}
a:hover {
  background-color: rgb(200, 252, 157);
}
a:active {
  border: rgb(8, 209, 8) 1px solid;
}
</style>