import Mock from 'mockjs'
import { getHomeData, getCountData, getTableData } from './home'

Mock.setup({
  timeout: '200-1000'
})

//getHomeData
Mock.mock(/\/home\/getHomeData/, 'get', getHomeData)

//getCountData
Mock.mock(/\/home\/getCountData/, 'get', getCountData)

//getTableData
Mock.mock(/\/home\/getTableData/, 'get', getTableData)
