import {request} from './request';

// 首页数据请求
export function getHomeMultiData () {
  return request ({
    url: '/home/multidata',
  })
}
