<template>
  <div class="header">
    <div class="headerWai">
      <a> {{ userName }} </a>
      <router-link to="/"><bdo dir="rtl">登录</bdo></router-link>
      <router-link to="/regist"><bdo dir="rtl">注册</bdo></router-link>
    </div>
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
  height: 30px;
  width: 100%;
  background-color: rgb(235, 250, 223);
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.headerWai {
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: flex-end;
}
a {
  display: inline-block;
  padding: 0px 20px;
}
a:hover {
  background-color: rgb(200, 252, 157);
}
a:active {
  border: rgb(8, 209, 8) 1px solid;
}
</style>