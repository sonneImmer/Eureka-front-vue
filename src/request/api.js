/**
 * api接口统一管理
 */
import { get, getParam, post } from './http'

export const contractAll = get('../static/test.json')
export const contractDetails1 = p => getParam('', p)
export const contractDetails = p => post('', p)

//draft
export const contractInfo = get('../static/testTemplate1.json')
export const parties = get('../static/contractTemplate_party.json')

//admin
export const contracts = get('../static/adminTemplate.json')
