import request from '@/utils/request'

let localhostUrl = 'http://localhost:8202'
export default {
  // 数据字典列表
  dictList(id) {
    return request({
      url: localhostUrl + `/admin/cmn/dict/findChildData/${id}`,
      method: 'get'
    })
  }

}

