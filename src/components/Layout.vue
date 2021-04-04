<template>
  <el-container>
    <el-header>超声内镜肿瘤检测系统</el-header>
    <el-container>
      <el-aside>
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <router-link to="/upload">上传图片</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <template #title>查看结果</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-setting"></i>
            <template #title>生成病历</template>
          </el-menu-item>
        </el-menu>

      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>Foot</el-footer>
  </el-container>
</template>

<script>
// import Basic from "./Basic";

export default {
  name: "Layout",
  components: {
    // Basic
  },
  created() {

  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<!--<template>-->
<!--  <el-row :gutter="20">-->
<!--    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>-->
<!--  </el-row>-->
<!--</template>-->
<!--<style>-->
<!--.el-row {-->
<!--  margin-bottom: 20px;-->
<!--&:last-child {-->
<!--   margin-bottom: 0;-->
<!-- }-->
<!--}-->
<!--.el-col {-->
<!--  border-radius: 4px;-->
<!--}-->
<!--.bg-purple-dark {-->
<!--  background: #99a9bf;-->
<!--}-->
<!--.bg-purple {-->
<!--  background: #d3dce6;-->
<!--}-->
<!--.bg-purple-light {-->
<!--  background: #e5e9f2;-->
<!--}-->
<!--.grid-content {-->
<!--  border-radius: 4px;-->
<!--  min-height: 36px;-->
<!--}-->
<!--.row-bg {-->
<!--  padding: 10px 0;-->
<!--  background-color: #f9fafc;-->
<!--}-->
<!--</style>-->