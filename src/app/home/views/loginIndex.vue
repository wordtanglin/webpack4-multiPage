<style>
</style>
<template>
  <div>
    <h1 @click="goHome">test</h1>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    created() {

      var arr = [1,2,3];
      var arr2 = [...arr]; // 和arr.slice()差不多
      arr2.push(4)

      setTimeout(() => {
      },100)
    },
    methods: {
      goHome() {
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

