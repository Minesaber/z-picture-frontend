// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** health GET /api/wx/example/forward */
export async function healthUsingGet1(options?: { [key: string]: any }) {
  return request<string>('/api/wx/example/forward', {
    method: 'GET',
    ...(options || {}),
  })
}

/** callBack POST /api/wx/example/forward */
export async function callBackUsingPost(body: API.WxMsgRequest, options?: { [key: string]: any }) {
  return request<API.WxMsgVO>('/api/wx/example/forward', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/xml',
    },
    data: body,
    ...(options || {}),
  })
}
