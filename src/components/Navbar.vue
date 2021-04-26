<template>
  <el-form label-width="80px" :inline="true">
    <el-form-item label="就诊卡号">
      <el-input v-model="form.id"></el-input>
    </el-form-item>

    <el-button type="primary" @click="submit">确定</el-button>

    <el-form-item label="姓名">
      <el-input disabled v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-input disabled v-model="form.sex"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input disabled v-model="form.age"></el-input>
    </el-form-item>
  </el-form>

</template>

<script>
export default {
  name: "Navbar",
  data () {
    return {
      form: {
        'id': '',
        'name': '',
        'sex': '',
        'age': ''
      }
    }
  },
  methods: {
    submit() {
      console.log('根据就诊卡号获取病人信息')
    }
  }
}
</script>

<style scoped>

</style>