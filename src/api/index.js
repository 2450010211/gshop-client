/*
  包含n个接口请求函数模块
 */

import ajax from './ajax'

// 1、根据经纬度获取位置详情  /position/:geohash 40.10038,116.36867
export const reqAddress = (geohash) => ajax(`/position/${geohash}`);

// 2、获取食品分类列表 /index_category
export const reqCategory = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表  /shops?latitude=40.10038&longitude=116.36867
export const reqShops = (latitude,longitude) => ajax('/shops',{latitude,longitude})

// 4、根据经纬度和关键字搜索商铺列表  /search_shops?keyword=test&geohash=40.10038,116.36867
export const reqSearchShops = (keyword,geohash) => ajax('/search_shops',{keyword,geohash})

// 5、获取一次性验证码 /captcha
export const reqCaptcha = () => ajax('/captcha')

// 6、用户名密码登陆 /login_pwd
export const reqLogin = (name,pwd,captcha) => ajax('/login_pwd',{name,pwd,captcha},'POST')

// 7、发送短信验证码  /sendcode
export const reqSendCode = (phone) => ajax('/sendcode',{phone})

// 8、手机号验证码登陆 /login_sms
export const reqLoginSms =(phone,code)=> ajax('/login_sms',{phone,code},'POST')

// 9、根据会话获取用户信息 /userinfo
export const reqUserInfo = () => ajax('/userinfo')

// 10、用户登出  /logout
export const reqLogout = () => ajax('/logout')