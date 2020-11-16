import {request} from './request';

// 首页数据请求
export function getHomeMultiData () {
  return request ({
    url: '/home/multidata',
  })
}

export function getHomeGoods (type, page) {
  return request ({
    url: 'http://106.54.54.237:8000/api/mn/home/data',
    params: {
      type,
      page
    }
  })
}
