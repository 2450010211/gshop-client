/*
  包含n个接口请求函数模块
 */
import ajax from './ajax'

const BASE_URL = '/api';

// 1、根据经纬度获取位置详情  /position/:geohash 40.10038,116.36867
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`);

// 2、获取食品分类列表 /index_category
export const reqCategory = () => ajax(BASE_URL + '/index_category')

// 3、根据经纬度获取商铺列表  /shops?latitude=40.10038&longitude=116.36867
export const reqShops = (latitude,longitude) => ajax(BASE_URL + '/shops',{latitude,longitude})

// 4、根据经纬度和关键字搜索商铺列表  /search_shops?keyword=test&geohash=40.10038,116.36867
export const reqSearchShops = (keyword,geohash) => ajax(BASE_URL + '/search_shops',{keyword,geohash})

// 5、获取一次性验证码 /captcha
export const reqCaptcha = () => ajax(BASE_URL + '/captcha')

// 6、用户名密码登陆 /login_pwd
export const reqLogin = (name,pwd,captcha) => ajax(BASE_URL + '/login_pwd',{name,pwd,captcha},'POST')

// 7、发送短信验证码  /sendcode
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode',{phone})

// 8、手机号验证码登陆 /login_sms
export const reqLoginSms =(phone,code)=> ajax(BASE_URL + '/login_sms',{phone,code},'POST')

// 9、根据会话获取用户信息 /userinfo
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

// 10、用户登出  /logout
export const reqLogout = () => ajax(BASE_URL + '/logout')
