<template>
  <div class="row">
    <div class="upmain">
      <router-link
        replace
        class="passBtn btn btn-success"
        to="/todoMain/add"
        active-class="active"
        >Add</router-link
      >
      <router-link
        replace
        class="passBtn btn btn-primary"
        to="/todoMain/list"
        active-class="active"
        >List</router-link
      >
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoMain",
  created() {
    var token = window.sessionStorage.getItem("token");
    if (token) {
      var axios = require("axios");
      var config = {
        method: "get",
        url: "https://todo.theappis.fun/api/todos",
        headers: {
          Token: token,
        },
      };

      axios(config)
        .then((response) => {
          if (response.data.status === 200) {
            this.$store.state.obj = response.data.data;
            this.$router.push({ path: "/todoMain" });
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      var config2 = {
        method: "get",
        url: "https://todo.theappis.fun/api/todos?complete=false",
        headers: {
          Token: token,
        },
      };

      axios(config2)
        .then((response) => {
          this.$store.state.falseObj = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("请登录账号！");
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped>
.row {
  background-color: #f8e4c9;
  width: 70%;
  min-width: 375px;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: center;
}

.passBtn {
  margin: 0;
  width: 50%;
}
.upmain {
  width: 100%;
  height: 35px;
}
.view {
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  height: calc(100% - 35px);
}
</style>