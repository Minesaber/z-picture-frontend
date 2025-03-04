// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** login GET /api/wx/login */
export async function loginUsingGet(options?: { [key: string]: any }) {
  return request<API.ResponseBoolean_>('/api/wx/login', {
    method: 'GET',
    ...(options || {}),
  })
}

/** resendCode GET /api/wx/login/fetch */
export async function resendCodeUsingGet(options?: { [key: string]: any }) {
  return request<API.ResponseString_>('/api/wx/login/fetch', {
    method: 'GET',
    ...(options || {}),
  })
}

/** refresh GET /api/wx/login/refresh */
export async function refreshUsingGet(options?: { [key: string]: any }) {
  return request<API.ResponseCodeRefreshVO_>('/api/wx/login/refresh', {
    method: 'GET',
    ...(options || {}),
  })
}

/** subscribe GET /api/wx/subscribe */
export async function subscribeUsingGet(options?: { [key: string]: any }) {
  return request<API.SseEmitter>('/api/wx/subscribe', {
    method: 'GET',
    ...(options || {}),
  })
}
