/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-12 16:07:54
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-12 19:54:10
 */

import axios from 'axios'

export class Request {
  constructor(config) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return error
      }
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  get(config) {
    return this.request({ ...config, methods: 'get' })
  }
  post(config) {
    return this.request({ ...config, methods: 'post' })
  }
}
