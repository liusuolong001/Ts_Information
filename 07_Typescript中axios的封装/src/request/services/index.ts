import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { InterceptorsConfig } from './interceptors' /* 需要添加type */

export class HyRequest {
  instance: AxiosInstance

  /*  创建axios实列 */
  constructor(config: InterceptorsConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config) => {
        // console.log('VUE请求')
        return config
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('VUE响应')
        return res
      },
      (error) => {
        return error
      }
    )

    /*    针对特定的请求实列添加拦截器 */
    if (config?.interceptors) {
      // console.log('!!', config.interceptors?.interceptorsRequest)
      this.instance.interceptors.request.use(
        config.interceptors?.interceptorsRequest,
        config.interceptors?.interceptorsRequestFail
      )
      this.instance.interceptors.response.use(
        config.interceptors?.interceptorsResponse,
        config.interceptors?.interceptorsResponseFail
      )
    }
  }

  /*   封装网络请求 axios实列方法 */
  request<T = any>(methodConfig: InterceptorsConfig<T>) {
    // 单独拦截器不能加入实例里面this.instance 因为此实例是共同一个的
    if (methodConfig.interceptors?.interceptorsRequest) {
      methodConfig = methodConfig.interceptors.interceptorsRequest(methodConfig)
    }
    // 单次响应的成功拦截
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(methodConfig)
        .then((res) => {
          if (methodConfig.interceptors?.interceptorsResponse) {
            // res = methodConfig.interceptors.interceptorsResponse(res)
          }
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  get<T = any>(config: InterceptorsConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: InterceptorsConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
}
