/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-12 19:32:40
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-16 09:48:41
 */

import { reactRequest } from '@/request'

export const getReactApiMethod = () => {
  return reactRequest.get({
    url: '/home/discount',
    headers: {
      'Content-Type': 'multipart/form-data'
    },

    interceptors: {
      interceptorsRequest: (config) => {
        console.log('REACT请求', config)
        return config
      },
      interceptorsResponse: (res) => {
        console.log('REACT响应')
        return res
      }
    }
  })
}
