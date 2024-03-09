import request from '@/utils/request'

// login
/**
 * @description: login
 * @param {*} data { mobile,password}
 * @return {*} promise
 */
export function loginAPI(data) {
  return request({
    url: '/park/login',
    method: 'POST',
    data: data
  })
}
/**
 * 
 * @param {*} params {name:String, page:String,pageSize: String}
 * @returns 
 */
export function getEnterpriseListAPI(params){
  return request({
    url: '/park/enterprise',
    method: 'GET',
    params
  })
}
/**
 * @param {*} id string
 * @returns 
 */
export function delEnterpriseAPI(){
  return request({
    url:'/park/enterprise/${id}',
    method: 'DELETE'
  })
}