/**
 * api接口统一管理
 */
import { get, post } from './http'

export const contractAll = get('../static/test.json')
export const contractDetails = p => post('', p)
