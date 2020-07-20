<template>
  <div ref="echart" style="height:100%;">
      echart
  </div>
</template>

<script>
export default {
    props: {
        chartData:{
            type:Object,
        }
    },
    data() {
        return {
            echart:null,
            axisOption: {},

        }
    }
}
</script>

<style lang="scss" scoped></style>
