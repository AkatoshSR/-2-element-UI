import request from '@/utils/request'

let localhostUrl = 'http://localhost:8201'
export default {
  // 医院设置列表
  getHospSetList(current, limit, searchObj) {
    return request({
      url: localhostUrl + `/admin/hosp/hospitalSet/findPageHospitalSet/${current}/${limit}`,
      method: 'post',
      data: searchObj // 使用json将searchObj传递
    })
  },

  // 删除医院设置
  deleteHospSet(id) {
    return request({
      url: localhostUrl + `/admin/hosp/hospitalSet/${id}`,
      method: 'delete'
    })
  },

  // 批量删除医院设置
  batchRemoveHospSet(idList) {
    return request({
      url: localhostUrl + `/admin/hosp/hospitalSet/batchRemove`,
      method: 'delete',
      data: idList
    })
  },

  // 锁定和取消锁定
  lockHospSet(id, status) {
    return request({
      url: localhostUrl + `/admin/hosp/hospitalSet/localHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },

  // 添加医院设置
  saveHospSet(hospitalSet) {
    return request({
      url: localhostUrl + `/admin/hosp/hospitalSet/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },

  //医院设置id查询
  getHospSet(id) {
    return request({
      url: localhostUrl + `/admin/hosp/hospitalSet/getHospitalSet/${id}`,
      method: 'get'
    })
  },

  //修改医院设置
  updateHospSet(hospitalSet) {
    return request({
      url: localhostUrl + `/admin/hosp/hospitalSet/updateHospitalSet`,
      method: 'post',
      data:hospitalSet
    })
  }

}

