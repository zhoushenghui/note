<template>  
  <div class="main">
    <div class="row">
      <router-link
        replace
        class="col-md-6 btn btn-primary"
        to="/add"
        active-class="active"
        >Add</router-link
      >
      <router-link
        replace
        class="col-md-6 btn btn-primary"
        to="/list"
        active-class="active"
        >List</router-link
      >
    </div>
    <div class="list">
      <router-view></router-view>
    </div>
  </div> 
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
body {
  background-image: url(assets/picture.webp);
}
.main {
  height: 99%;
  width: 70%;
  border: lightgoldenrodyellow 1px solid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;
}
.row {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.list {
  margin: 20px 40px 10px 40px;
  padding-bottom: 10px;
  background-color: blanchedalmond;
}
</style>
