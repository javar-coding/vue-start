// import { userAccount } from '@/api'
import cookie from 'js-cookie'
const avatarPath = '../../../assets/account.jpg'
const user = {
  state: {
    userInfo: { name: '', avatar: '' }
  },
  getters: {
    userInfo: (state) => state.userInfo
  },
  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    logout (context, payload) {
      context.commit('SET_USER_INFO', { name: '', avatar: '' })
      cookie.set(TOKEN_FIELD_NAME, '')
    },
    login (context, payload) {
      const userInfo = login(payload.account, payload.password)
      context.commit('SET_USER_INFO', userInfo)
    },
    getUserInfo (context, payload) {
      const userInfo = getCurrentInfo()
      context.commit('SET_USER_INFO', userInfo)
    }
  }
}

/**
 * 登录账户
 * 注意:
 * 1、需要引入userAccount模块
 * 2、设置cookie的token
 * @param account
 * @param password
 * @returns {*|undefined}
 */
function login (account, password) {
  // const data = userAccount.login({'account': account, 'password': password})
  const data = { name: 'lyc', avatar: avatarPath }
  cookie.set(TOKEN_FIELD_NAME, 'sdfsgd')
  return data
}

function getCurrentInfo () {
  // const  data = userAccount.getCurrentInfo({})
  const data = { name: 'lyc', avatar: avatarPath }
  return data
}
export function getToken () {
  if (cookie.get(TOKEN_FIELD_NAME)) {
    return cookie.get(TOKEN_FIELD_NAME)
  }
  return undefined
}
export const TOKEN_FIELD_NAME = 'System_token'
export default user
