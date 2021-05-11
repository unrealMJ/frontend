<template>
  <div style="margin: 0 20px">
    <h1>中山大学附属第六医院（广东省胃肠肛门医院）</h1>
    <h2>消化内镜超声胃镜检查诊疗报告单</h2>
    <el-divider></el-divider>
    <span style="float: left">内镜号： xxxxx</span>
    <span>检查日期： xxxx-xx-xx</span>
    <el-divider></el-divider>

    <el-form ref="form" :model="form" label-width="80px" label-position="right" :inline="true">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="性别">
        <el-input v-model="form.sex"></el-input>
      </el-form-item>

      <el-form-item label="检查年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>

      <el-form-item label="检查类型">
        <el-input v-model="form.type"></el-input>
      </el-form-item>

      <el-form-item label="住院号">
        <el-input v-model="form.hospital"></el-input>
      </el-form-item>

      <el-form-item label="门诊号">
        <el-input v-model="form.outpatience"></el-input>
      </el-form-item>

      <el-form-item label="床号">
        <el-input v-model="form.bed"></el-input>
      </el-form-item>

      <el-form-item label="科别">
        <el-input v-model="form.department"></el-input>
      </el-form-item>

      <el-divider></el-divider>
    </el-form>

    <el-form-item>
      <el-input type="textarea" :rows="8" v-model="form.info"></el-input>
    </el-form-item>

    <el-divider></el-divider>
    <span v-for="img in imgs" :key="img">
      <el-image :src="img" style="width: 240px; height: 240px; margin: 0 20px"></el-image>
    </span>
    <el-divider></el-divider>

    <div>
      <p>超声内镜提示</p>
      <p>建议</p>

      <p>报告日期：   报告医师：    签名：</p>
    </div>
    <el-divider></el-divider>
    <span>本报告仅供临床参考，必要时请咨询：020-38254116。消化内镜中心网站：GIEndoscopy.haodf.com</span>

  </div>
</template>

<script>
export default {
  name: "Record",
  data() {
    return {
      form: {
        name: '',
        sex: '',
        age: '',
        type: '',
        hospital: '',
        outpatience: '',
        bed: '',
        department: '',
        info: ''
      },
      date: '',
      doctorName: sessionStorage.getItem('doctorName'),
      imgs: [
          'http://localhost:8080/SGP003.jpg',
          'http://localhost:8080/SGP003.jpg',
          'http://localhost:8080/SGP003.jpg'
      ]
    }
  }
}
</script>

<style scoped>

</style>