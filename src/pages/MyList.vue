<template>
  <div class="row">
    <div class="list">
      <router-link 
        active-class="active"
        class="btn btn-primary"
        :to="{
          name: 'note-todo',
          query: {
            msg: 'todoList:',
          },
        }"
        >todo</router-link
      >
      <router-link
        class="btn btn-primary"
        active-class="active"
        :to="{
          name: 'note-done',
          params: {
            msg: 'doneList:',
          },
        }"
        >done</router-link
      >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
};
</script>

