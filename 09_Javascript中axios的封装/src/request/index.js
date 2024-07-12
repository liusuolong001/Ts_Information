/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-12 17:59:53
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-12 19:55:13
 */
import { BASE_VUE_URL, TIME_VUE_OUT, BASE_REACT_URL, TIME_REACT_OUT } from './config'
import { Request } from './service'

export const request = new Request({
  baseURL: BASE_VUE_URL,
  timeout: TIME_VUE_OUT
})

export const reactRequest = new Request({
  baseURL: BASE_REACT_URL,
  timeout: TIME_REACT_OUT
})
