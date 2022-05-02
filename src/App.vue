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
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
  background-image: url(assets/picture.webp);
  display: flex;
  overflow: hidden;
  align-items: center;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.list {
  height: calc(100%-30px);
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.login {
  margin-top: 20%;
  width: 370px;
}
</style>
