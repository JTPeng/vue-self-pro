import ajax from './ajax.js'
const BASE = '/api';
// 评论相关
export const reqComment = (url,page,size) => ajax(BASE+url,{page,size})
// 搜索接口默认显示内容
export const reqSearchContent = url => ajax(BASE+url)
// 搜索框输入内容触发
export const reqSearchInput = (url, value) => ajax(BASE+url, {keywordPrefix:value})
