<template>
  <div class="main">
    <todoHeader />
    <div class="list">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import todoHeader from "./components/todoHeader";
export default {
  name: "App",
  components: { todoHeader },
};
</script>

<style>
body {
  background-image: url(assets/picture.webp);
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}
.list {
  height: calc(100%-30px);
  width: 70%;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.login {
  width: 380px;
  margin: 200px auto;
}
</style>
