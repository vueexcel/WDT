import { getField, updateField } from 'vuex-map-fields'
import UserData from './../../json/UserData.json'
export default {
  state: {
    data: UserData,
    error: false,
    errorMessage: '',
    user: {}
  },
  getters: {
    getField,
    getErrorMessage: state => state.errorMessage,
    isError: state => state.error,
    getUser: state => state.user
  },
  actions: {
    loginDetail ({commit}, payload) {
      commit('login', payload)
    },
    dologout ({commit}) {
      commit('logout')
    }
  },
  mutations: {
    updateField,
    login: (state, data) => {
      state.role = ''
      state.errorMessage = ''
      state.user = {}
      for (var i = 0; i < state.data.length; i++) {
        if (state.data[i].email === data.email && state.data[i].password === data.password) {
          state.role = state.data[i].role
          state.user = state.data[i]
        }
      }
      if (state.role !== '') {
        console.log(state, '9999999999999999999')
      } else {
        state.error = true
        state.errorMessage = 'Invalid email or Password'
      }
    },
    logout: state => {
      state.user = {}
    }
  }
}
