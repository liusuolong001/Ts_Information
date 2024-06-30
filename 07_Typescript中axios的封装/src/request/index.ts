import { BASE_VUE_URL, TIME_VUE_OUT, BASE_REACT_URL, TIME_REACT_OUT } from './config'
import { HyRequest } from './services'

export const HyRequestVue = new HyRequest({
  baseURL: BASE_VUE_URL,
  timeout: TIME_VUE_OUT
})

// 多个实列
export const HyRequestReact = new HyRequest({
  baseURL: BASE_REACT_URL,
  timeout: TIME_REACT_OUT,

  interceptors: {
    interceptorsRequest: (config) => {
      // console.log('REACT请求', config)
      return config
    },
    interceptorsRequestFail: (error: any) => {
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

// Test
/* class Person {
  config: any

  constructor(config) {
    this.config = config
    console.log(config.inter.running)
  }

  running() {
    console.log(this.config)
  }
}
const p1 = new Person({
  name: 'Ts',
  inter: {
    running: (config) => {
      console.log('asdasd')
      return config
    }
  }
})

p1.running()
p1.config.name = 'Axios' */
