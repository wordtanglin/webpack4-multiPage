let comUrl = `//${window.location.host}`, //平台服务器地址
  crossDomain = false, //跨域，默认false（解决post请求contentType跨域时无法指定问题）
  devUrl = ''; //开发环境接口地址

//前端本地请求，接口连t100环境；非本地请求从disConf获取（util.js中实现）
let host = window.location.host.split(':')[0];
if (host == 'localhost' || host == '127.0.0.1' || host.indexOf('172.31.') >= 0) {
  comUrl = devUrl;
  crossDomain = true; //本地调试时存在跨域问题
}


export default {
  toastTime: 1200,    //弹框时间
  indicatorTime: 1200,//loading加载
  pageSize: 15,   //分页每页显示的大小
  comUrl: comUrl,
  crossDomain: crossDomain,
}


