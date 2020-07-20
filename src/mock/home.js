import Mock from 'mockjs'

// data
const getHomeData = () => {
  return {
    code: 2000,
    data: {
      homeData: [
        {
          name: '小霸王点读机',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: '小霸王打火机',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: '小霸王打桩机',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: '小霸王破壁机',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: '小霸王莎莉鸡',
          value: Mock.Random.float(1000, 10000, 0, 2)
        },
        {
          name: '小霸王小灰机',
          value: Mock.Random.float(1000, 10000, 0, 2)
        }
      ]
    }
  }
}

// 右上每日、月收藏、订单、支付量
const getCountData = () => {
  return {
    code: 2000,
    data: {
      countData: [
        {
          id: 1,
          name: '今日支付订单',
          value: Mock.Random.float(100, 1000, 0, 0),
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          id: 2,
          name: '今日收藏订单',
          value: Mock.Random.float(100, 2000, 0, 0),
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          id: 3,
          name: '今日未支付订单',
          value: Mock.Random.float(100, 1000, 0, 0),
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          id: 4,
          name: '本月支付订单',
          value: Mock.Random.float(1000, 10000, 0, 0),
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          id: 5,
          name: '本月收藏订单',
          value: Mock.Random.float(1000, 10000, 0, 0),
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          id: 6,
          name: '本月未支付订单',
          value: Mock.Random.float(1000, 10000, 0, 0),
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ]
    }
  }
}

// 每日、月、总的购买量（单个）
const getTableData = () => {
  return {
    code: 2000,
    data: {
      tableData: [
        {
          name: '小霸王点读机',
          todayBuy: Mock.Random.float(100, 200, 0, 0),
          monthBuy: Mock.Random.float(1000, 3000, 0, 0),
          totalBuy: Mock.Random.float(10000, 100000, 0, 0)
        },
        {
          name: '小霸王打火机',
          todayBuy: Mock.Random.float(100, 200, 0, 0),
          monthBuy: Mock.Random.float(1000, 3000, 0, 0),
          totalBuy: Mock.Random.float(10000, 100000, 0, 0)
        },
        {
          name: '小霸王打桩机',
          todayBuy: Mock.Random.float(100, 200, 0, 0),
          monthBuy: Mock.Random.float(1000, 3000, 0, 0),
          totalBuy: Mock.Random.float(10000, 100000, 0, 0)
        },
        {
          name: '小霸王破壁机',
          todayBuy: Mock.Random.float(100, 200, 0, 0),
          monthBuy: Mock.Random.float(1000, 3000, 0, 0),
          totalBuy: Mock.Random.float(10000, 100000, 0, 0)
        },
        {
          name: '小霸王莎莉鸡',
          todayBuy: Mock.Random.float(100, 200, 0, 0),
          monthBuy: Mock.Random.float(1000, 3000, 0, 0),
          totalBuy: Mock.Random.float(10000, 100000, 0, 0)
        },
        {
          name: '小霸王小灰机',
          todayBuy: Mock.Random.float(100, 200, 0, 0),
          monthBuy: Mock.Random.float(1000, 3000, 0, 0),
          totalBuy: Mock.Random.float(10000, 100000, 0, 0)
        }
      ]
    }
  }
}

export { getHomeData, getCountData, getTableData }
