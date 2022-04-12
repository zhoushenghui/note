<template>
  <div class="main">
    <todoHeader />
    <router-view></router-view>
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
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.list {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
