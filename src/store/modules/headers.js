import UserRoleComponent from './../../json/UserRoleComponent.json'
import LeftMenuJson from './../../json/LeftMenuData.json'
import axios from 'axios'
export default {
  state: {
    roleContentJson: UserRoleComponent,
    leftMenuJsonData: LeftMenuJson,
    RoleContent: [],
    pageInfo: {},
    LeftmenuObject: {},
    brandData: {
      exchangeLogo: '',
      exchangeName: '',
      largeAppMenuItems: '',
      smallMenuItems: '',
      themeColors: '',
      userName: ''
    }
  },
  getters: {
    getRoleJson: state => state.roleContentJson,
    getRoleContent: state => state.RoleContent,
    getPageInfo: state => state.pageInfo,
    getLeftMenuData: state => state.leftMenuJsonData,
    getLeftMenuName: state => state.LeftmenuObject,
    getbrandData: state => state.brandData
  },
  actions: {
    sendRoleContent({
      commit
    }, payload) {
      commit('setRoleContent', payload)
    },
    sendContentInfo({
      commit
    }, payload) {
      commit('setPageTitle', payload)
    },
    LeftMenuContentName({
      commit
    }, payload) {
      commit('setMenuName', payload)
    },
    //============ APIs ======
    async fetchJson({
      state,
      commit
    }, payload) {
      let res = await axios
        .get(`http://localhost/json/${payload.role}.json`)
        .then((res) => {
          commit('updateUserData', res.data)
        })
        .catch((err) => {
          return err
        })
    },
  },
  mutations: {
    setRoleContent: (state, data) => {
      state.RoleContent = data
    },
    setPageTitle: (state, data) => {
      state.pageInfo = data
    },
    setMenuName: (state, data) => {
      state.LeftmenuObject = data
    },
    updateUserData: (state, data) => {
      state.brandData.exchangeLogo = data.exchangeLogo
      state.brandData.exchangeName = data.exchangeName
      state.brandData.largeAppMenuItems = data.largeAppMenuItems
      state.brandData.smallMenuItems = data.smallMenuItems
      state.brandData.themeColors = data.themeColors
      state.brandData.userName = data.userName
    }
  }
}
