<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
      >
        <el-menu-item :index="1">
          <i></i>
          <router-link to="/layout/upload">
            <span>上传图片</span>
          </router-link>
        </el-menu-item>
        <el-menu-item :index="2">
          <i></i>
          <router-link to="/layout/recordList">
            <span>查看结果</span>
          </router-link>
        </el-menu-item>
        <el-menu-item :index="3">
          <i></i>
          <router-link to="/layout/record">
            <span>生成病历</span>
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo'
import variables from '../styles/variables.scss'

export default {
  components: { Logo },
  computed: {
    variables() {
      return variables
    }
  }
}
</script>
