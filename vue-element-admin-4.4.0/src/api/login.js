import request from '@/utils/request'

let localhostUrl = 'http://localhost:8201'
export default {
  // denglu
  login(loginObj) {
    return request({
      url: localhostUrl + `/admin/hosp/hospitalSet/login`,
      method: 'post',
      data: loginObj // 使用json将searchObj传递
    })
  }

}

