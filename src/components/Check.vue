<template>
    <el-row :gutter="20" v-for="each in results" :key="each.img">
      <el-col :span="8">
        <el-image :src="each.img" fit="fill"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image :src="each.target" fit="fill"></el-image>
      </el-col>
      <el-col :span="8">

      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "check",
  data() {
    return {
      results: []
    }
  },
  created() {
    let results = sessionStorage.getItem('results')
    results = results.split(',')
    for (let i = 0; i < results.length; i = i + 2) {
      this.results.push({
        'img': results[i],
        'target': results[i + 1]
      })
    }
    console.log(this.results)
  }
}
</script>

<style scoped>
.el-image {
  width: 360px;
  height: 360px
}

</style>