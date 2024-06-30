import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// T 设置默认值
interface HyInterceptors<T = AxiosResponse> {
  interceptorsRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig
  interceptorsRequestFail?: (error: any) => any
  interceptorsResponse?: (res: T) => T
  interceptorsResponseFail?: (error: any) => any
}

/*  扩展请求响应拦截器 */
export interface InterceptorsConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HyInterceptors<T>
}
