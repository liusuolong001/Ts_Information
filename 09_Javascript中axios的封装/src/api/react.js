/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-12 19:32:40
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-12 19:57:11
 */

import { reactRequest } from '@/request'

export const getReactApiMethod = () => {
  return reactRequest.get({
    url: '/home/discount'
  })
}
