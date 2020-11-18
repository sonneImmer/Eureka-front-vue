/**
 * api接口统一管理
 */
import { get, getParam, post } from './http'

export const contractAll = get('../static/test.json')
export const contractDetails1 = p => getParam('', p)
export const contractDetails = p => post('', p)

// draft
export const contractInfo = get('../static/testTemplate2.json')
export const parties = get('../static/contractTemplate_party.json')

// admin
export const contracts = get('../static/adminTemplate.json')
export const serviceRequest = get('../static/serviceAdminRequest.json')
export const registerData = get('http://mockjs.docway.net/mock/1XJX0v2QztB/getGeneralStats')
export const discoverData = get('http://mockjs.docway.net/mock/1XJX0v2QztB/getApplicationStats')
export const serviceDiscover = get('http://mockjs.docway.net/mock/1XJX0v2QztB/getApplicationStats')
//all_details
export const tableDataList = get('../static/allDetailsList.json')


