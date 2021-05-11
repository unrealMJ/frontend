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
        'id': '20210508',
        'name': '',
        'sex': '',
        'age': ''
      }
    }
  },
  methods: {
    submit() {
      let params = {
        'patient_id': this.form.id
      }
      sessionStorage.setItem('patient_id', this.form.id)
      this.$axios({
        method: 'get',
        url: '/api/basic/patient_info',
        params: params
      }).then(res => {
        this.form.name = res.data.name
        this.form.age = res.data.age
        this.form.sex = res.data.sex
      })
    }
  }
}
</script>

<style scoped>

</style>