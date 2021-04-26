<template>
  <div style="margin-top: 10px">
    <navbar></navbar>
  </div>

  <router-view></router-view>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "AppMain",
  components: {Navbar}
}
</script>

<style scoped>

</style>