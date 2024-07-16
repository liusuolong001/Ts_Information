import { HyRequestReact } from '@/request'

interface IDiscountType {
  dest_address: any[]
  dest_list: []
  subtitle: string
  title: string
  type: string
}

export const getReactApi = () => {
  HyRequestReact.request<IDiscountType>({
    url: '/home/discount',
    method: 'get',
    interceptors: {
      interceptorsRequest: (config) => {
        // console.log('@@', 'config')
        return config
      },
      interceptorsResponse: (res) => {
        // console.log('@!!!!', 'response')
        return res
      }
    }
  })
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getReactApiMethod = () => {
  return HyRequestReact.get<IDiscountType>({
    url: '/home/discount',
    interceptors: {
      interceptorsRequest: (config) => {
        // console.log('@@', 'config')
        return config
      },
      interceptorsResponse: (res) => {
        // console.log('@!!!!', 'response')
        return res
      }
    }
  })
}
