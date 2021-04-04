<template>
  <el-upload
      action="#"
      list-type="picture-card"
      multiple
      :on-preview="handlePictureCardPreview"
      :auto-upload="false"
      :on-change="onchange"
      :on-remove="handleRemove">
    <i class="el-icon-plus"></i>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <el-image :src="dialogImageUrl"></el-image>
  </el-dialog>
  <el-button type="success" @click="onsubmit">确定上传</el-button>

<!--  <template v-for="result in results" :key="result.name">-->
<!--    <el-image :src="result.img"></el-image>-->
<!--  </template>-->
</template>

<script>
import axios from 'axios'
// import {Base64} from 'js-base64'
export default {
  name: 'Basic',
  data() {
    return {
      url: '',
      form: {},
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      imageUrl: '',
      results: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onsubmit() {
      let formdata = new FormData();
      for (let i = 0; i < this.fileList.length; i++) {
        formdata.append('image', this.fileList[i].raw)
      }
      axios({
        method: 'post',
        url: '/api/basic/predict/',
        data: formdata,
      }).then(res => {
        this.results = res.data.results
        for (let i = 0; i < this.results.length; i++) {
          this.results[i].img = 'data:image/jpeg;base64,' + this.results[i].img
        }
      })
    },
    onchange(file, fileList) {
      // v-model绑定？？
      this.fileList = fileList
    },
  }
}
</script>

<style scoped>

</style>