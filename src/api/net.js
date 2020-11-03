import axios from 'axios'
import { Message } from 'element-ui'
import { getToken, TOKEN_FIELD_NAME } from '@/store/modules/user'

class Request {
  constructor (baseUrl, headers = {'content-type': 'application/json'}) {
    this.request = axios.create({
      timeout: 30000,
      baseURL: baseUrl,
      headers,
      withCredentials: true
    })
    this.request.interceptors.request.use(config => new Promise((resolve) => {
      const token = getToken()
      if (token === undefined || token === '') {
        throw new Error('从cookie中获取token失败')
      }
      config.headers[TOKEN_FIELD_NAME] = token
      resolve(config)
    }), error => {
      return Promise.reject(error)
    })
    this.request.interceptors.response.use(config => {
      if (~~config.data.code !== 0) {
        Message.error(config.data.message)
      }
      return config
    }, error => {
      Message.error(error.toString())
      return Promise.reject(error)
    })
  }
  get (url, params) {
    return this.request.get(url, {params})
  }
  post (url, data, config) {
    return this.request.post(url, data, config)
  }
}

class Net {
  constructor (baseUrl, headers = { 'Content-Type': 'application/json;charset=UTF-8' }, customProps = {}) {
    return new Request(baseUrl, headers, customProps)
  }
}

export default Net
