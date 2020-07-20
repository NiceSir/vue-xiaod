<template>
  <header>
    <div class="l-content">
      <el-button
        type="primary"
        icon="el-icon-menu"
        size="mini"
        @click="collapseMenu"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="userImg" :src="imgSrc" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import imgSrc from 'assets/images/user.png'
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      imgSrc: imgSrc
    }
  },
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  methods: {
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  .l-content {
    display: flex;
    align-items: center;
    width: 400px;
    .el-button {
      margin-right: 30px;
    }
  }
  .r-content {
    .userImg {
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }
  }
}
</style>

<style lang="scss">
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #fff;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #f4f4f4;
}
</style>
