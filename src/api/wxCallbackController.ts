// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** health GET /api/wx/forward */
export async function healthUsingGet1(options?: { [key: string]: any }) {
  return request<string>('/api/wx/forward', {
    method: 'GET',
    ...(options || {}),
  })
}

/** callBack POST /api/wx/forward */
export async function callBackUsingPost(
  body: API.WxTxtMsgRequest,
  options?: { [key: string]: any }
) {
  return request<API.WxMsgRequest>('/api/wx/forward', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/xml',
    },
    data: body,
    ...(options || {}),
  })
}
