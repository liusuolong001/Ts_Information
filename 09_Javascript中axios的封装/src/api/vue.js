/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-12 19:32:40
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-12 19:55:33
 */

import { request } from '@/request'

/**
 * @description:调用request中get方法
 * @return {*}
 */
export const getVueApiMethod = () => {
  return request.get({
    url: '/home/multidata'
  })
}
