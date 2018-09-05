import http from './index'
//获取左侧菜单
export const goodsInfos = (params) =>{
    return http.fetchGet('../../static/dataList/goodsInfos.json',params)
}