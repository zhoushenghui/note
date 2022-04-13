<template>
  <div class="header">
    <a> {{ userName }} </a>
    <router-link to="/">登录</router-link>
    <router-link to="/regist">注册</router-link>
  </div>
</template>

<script>
export default {
  name: "todoHeader",
  computed: {
    userName() {
      return (
        this.$store.state.userName || window.sessionStorage.getItem("name")
      );
    },
  },
};
</script>

<style>
.header {
  z-index: 999;
  width: 100%;
  background-color: rgb(235, 250, 223);
  font-size: 16px;
  position: fixed;
  top: 0px;
  padding-left: 50%;
  padding-top: 5px;
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