/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-12 17:59:53
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-16 09:36:06
 */
import { BASE_VUE_URL, TIME_VUE_OUT, BASE_REACT_URL, TIME_REACT_OUT } from './config'
import { Request } from './service'

export const request = new Request({
  baseURL: BASE_VUE_URL,
  timeout: TIME_VUE_OUT
})

export const reactRequest = new Request({
  baseURL: BASE_REACT_URL,
  timeout: TIME_REACT_OUT,

  interceptors: {
    interceptorsRequest: (config) => {
      // console.log('REACT请求', config)
      return config
    },
    interceptorsRequestFail: (error) => {
      return error
    },
    interceptorsResponse: (res) => {
      // console.log('REACT响应')
      return res
    },
    interceptorsResponseFail(error) {
      return error
    }
  }
})
