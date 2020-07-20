<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :collapse="isCollapse"
  >
    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">
        {{ item.label }}
      </span>
    </el-menu-item>
    <el-submenu
      v-for="(childItem, index) in hasChildren"
      :key="index"
      index="1"
    >
      <template slot="title">
        <i :class="'el-icon-' + childItem.icon"></i>
        <span>
          {{ childItem.label }}
        </span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="item.path"
          v-for="item in childItem.children"
          :key="item.path"
          @click="clickMenu(item)"
        >
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">
            {{ item.label }}
          </span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  components: {},
  data() {
    //这里存放数据
    return {
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/video',
          name: 'video',
          label: '视频管理',
          icon: 'video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user'
        },
        {
          label: '其他',
          icon: 's-tools',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting'
            }
          ]
        }
      ]
    }
  },
  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  methods: {
    clickMenu(val) {
      this.$store.commit('selectMenu', val)
    }
  }
  // watch: {
  //   $route() {

  //   }
  // }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
