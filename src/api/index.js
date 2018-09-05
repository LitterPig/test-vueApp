import axios from 'axios'
import Qs from 'Qs'

axios.defaults.headers = {
  'Accept':'application/json'
  //'Accept': 'text/plain, */*'
  //'Accept': 'text/json'
  //'X-Requested-With':'XMLHttpRequest'
};
//axios.defaults.baseURL="http://10.9.35.238"
axios.defaults.baseURL="http://localhost:8081"
//axios.defaults.baseURL="http://localhost:9090"
axios.defaults.timeout = 10000
axios.defaults.withCredentials=true
//let loadingInstance

/*axios.interceptors.request.use(function (config) {
　　// 在发送请求之前做些什么
  loadingInstance = Loading.service({ fullscreen: true,background:'rgba(0,0,0,0.6)' });
  return config
}, function (error) {
　　// 对请求错误做些什么
  return Promise.reject(error)
});*/

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  var msg=response.data.message
  if(msg && msg.indexOf("oauth2/authorize")!=-1){
    window.location.href = msg
  }else{
    return response
  }
}, function (error) {
　　// 对响应错误做点什么
　return Promise.reject(error)
});
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url,  Qs.stringify(params)).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchQuickSearch (url) {
    return new Promise((resolve, reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {},config) {
    return new Promise((resolve, reject) => {
      axios.post(url, Qs.stringify(params),config).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchDelete (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, Qs.stringify(params)).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
