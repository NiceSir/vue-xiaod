<template>
  <el-row class="home" :gutter="20">
    <el-col :span="9">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" alt="" />
          <div>
            <p>Nice sir</p>
            <p>管理员</p>
          </div>
        </div>
        <!-- <p class="row"></p> -->
        <div class="login_info">
          <p>上次登录时间：<span>2020-7-18</span></p>
          <p>上次登录地点：<span>广州</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:512px;margin-top:10px;">
        <el-table :data="tableData" style="width:100%;">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :width="key === 'name' ? '120%' : '80%'"
            :label="val"
            show-overflow-tooltip
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="15">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.id">
          <i
            class="icon"
            :class="'el-icon-' + item.icon"
            :style="{ backgroundColor: item.color }"
          ></i>
          <div class="detail">
            <p class="detail_num">￥ {{ item.value }}</p>
            <p class="detail_name">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height:260px;"></div>
      </el-card>
      <div class="echart">
        <el-card shadow="hover">
          <div style="height:200px;"></div>
        </el-card>
        <el-card shadow="hover">
          <div style="height:200px;"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import userImg from '@/assets/images/user.png'
export default {
  data() {
    return {
      userImg: userImg,
      homeData: [],
      countData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      tableData: []
    }
  },
  created() {
    this.getHomeData()
    this.getCountData()
    this.getTableData()
  },
  methods: {
    async getHomeData() {
      const res = await this.$http.get('/home/getHomeData')
      this.homeData = res.data.data.homeData
    },
    async getCountData() {
      const res = await this.$http.get('/home/getCountData')
      this.countData = res.data.data.countData
    },
    async getTableData() {
      const res = await this.$http.get('/home/getTableData')
      this.tableData = res.data.data.tableData
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home';
</style>
