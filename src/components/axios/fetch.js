import axios from 'axios'
import router from "../../router";
import qs from "qs";
//添加请求拦截器
axios.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('tokenID');
    if (token != '') {
      config.headers.Authorization = token
    }
    if (config.method == 'post') {
      config.data = qs.stringify({
        TOKEN: token,
        ...config.data,
      })
    } else if (config.method == 'get') {
      config.params = {
        TOKEN: token,
        ...config.params
      }
    }
    return config
  }, error => {
    //请求错误时做些事
    return Promise.reject(error)
  }
)

//添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code == '4014') {
    alert(response.data.msg);
    sessionStorage.clear();
  }
  return response;
}, function (err) {
  // 对响应错误做点什么
  let _message = null;
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        _message = '请求出错(400)';
        break;
      case 401:
        _message = '未授权，请重新登录(401)';
        break;
      case 403:
        _message = '拒绝访问(403)';
        break;
      case 404:
        _message = '请求出错(404)';
        break;
      case 408:
        _message = '请求超时(408)';
        break;
      case 500:
        _message = '服务器错误(500)';
        break;
      case 501:
        _message = '服务未实现(501)';
        break;
      case 502:
        _message = '网络错误(502)';
        break;
      case 503:
        _message = '服务不可用(503)';
        break;
      case 504:
        _message = '网络超时(504)';
        break;
      case 505:
        _message = 'HTTP版本不受支持(505)';
        break;
      default:
        _message = '连接出错(${err.response.status})!';
    }
  } else {
    _message = '连接服务器失败!';
  }
  //请求错误时做些事
  return Promise.reject(err);
});
