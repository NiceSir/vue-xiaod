<template>
  <el-container style="height:100%;">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tag></common-tag>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from 'components/CommonAside'
import CommonHeader from 'components/CommonHeader'
import CommonTag from 'components/CommonTag'
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonTag
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #333;
}
</style>
