import { HyRequestVue } from '@/request'

export const getVueApi = () => {
  return HyRequestVue.request({
    url: '/home/multidata'
  })
}
