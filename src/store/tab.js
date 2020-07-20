export default {
  state: {
    // menu: [],
    isCollapse: false,
    currentMenu: null,
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home'
      }
    ]
  },
  mutations: {
    //点击menu
    selectMenu(state, val) {
      if (val.name !== 'home') {
        //点击后得到的route
        state.currentMenu = val
        //去重设置
        let result = state.tabsList.findIndex(item => item.name === val.name)
        result === -1 ? state.tabsList.push(val) : ''
      } else {
        state.currentMenu = null
      }
    },
    //面包屑的关闭
    closeTab(state, val) {
      let result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    },
    //菜单栏的收缩
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
