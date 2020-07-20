<template>
  <div class="common-tag">
    <el-tag
      :key="tag.name"
      v-for="tag in dynamicTags"
      size="small"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  computed: {
    ...mapState({
      dynamicTags: state => state.tab.tabsList
    })
  },
  methods: {
    handleClose(tag) {
      this.$store.commit('closeTab', tag)
    },
    changeMenu(tag) {
      this.$router.push({ name: tag.name })
      this.$store.commit('selectMenu', tag)
    }
  }
}
</script>

<style lang="scss" scoped>
.common-tag {
  padding: 20px;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
