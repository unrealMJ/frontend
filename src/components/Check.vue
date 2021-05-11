<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <span>内镜图像</span>
    </el-col>
    <el-col :span="8">
      <span>病灶定位</span>
    </el-col>
    <el-col :span="8">
      <span>可疑区域</span>
    </el-col>
  </el-row>
    <el-row :gutter="15" v-for="each in images" :key="each.img">
      <el-col :span="8">
        <el-image :src="each.img" fit="fill" :preview-src-list="[each.img]"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image :src="each.res" fit="fill" :preview-src-list="[each.res]"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image :src="each.cam" fit="fill" :preview-src-list="[each.cam]"></el-image>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "check",
  data() {
    return {
      images: []
    }
  },
  props: [
      'date', 'patient_id'
  ],
  created() {
    let params = {
      'date': this.date,
      'patient_id': this.patient_id
    }
    this.$axios({
      method: 'get',
      url: '/api/basic/record_detail',
      params: params
    }).then(res => {
      this.images = res.data.detail
    })

  }
}
</script>

<style scoped>
.el-image {
  width: 360px;
  height: 360px
}
span {
  font-size: 22px;
}
.el-row {
  margin: 15px 0;
}
</style>