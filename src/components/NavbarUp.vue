<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <span class="el-dropdown-link">{{doctorName}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/Layout">
              <el-dropdown-item>个人信息</el-dropdown-item>
            </router-link>

            <el-dropdown-item divided @click="logout">
              <span style="display:block;">退出系统</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarUp",
  components: {
  },
  data () {
    return {
      doctorName: sessionStorage.getItem('doctorName')
    }
  },
  methods: {
    logout() {
      this.$router.push('/')
      console.log('推出系统')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  //box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
      }
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
</style>
