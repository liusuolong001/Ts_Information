/*
 * @Description:
 * @Author: liusuolong001
 * @Date: 2024-07-12 16:07:54
 * @LastEditors: liusuolong001
 * @LastEditTime: 2024-07-16 09:47:24
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

    if (config?.interceptors) {
      this.instance.interceptors.request.use(config.interceptors?.interceptorsRequest, config.interceptors?.interceptorsRequestFail)
      this.instance.interceptors.response.use(config.interceptors?.interceptorsResponse, config.interceptors?.interceptorsResponseFail)
    }
  }

  request(config) {
    if (config.interceptors?.interceptorsRequest) {
      config = config.interceptors.interceptorsRequest(config)
    }
    return new Promise((resolve, reject) => {
      this.instance(config)
        .then((res) => {
          if (config.interceptors?.interceptorsResponse) {
            res = config.interceptors.interceptorsResponse(res)
          }
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
