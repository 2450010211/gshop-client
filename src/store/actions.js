/*
  通过mutations间接更新state的多个方法对象
 */

import {RECEIVE_ADDRESS,RECEIVE_CATEGORY,RECEIVE_SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_FOODS,RECEIVE_RATINGS,RECEIVE_INFO} from './mutation-types'

import {reqAddress,reqCategory,reqShops,reqUserInfo,reqLogout,reqShopFood,reqShopRating,reqShopInfo} from '../api/index'

export default {

  async getAddress({commit,state}){
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude;
    const result = await reqAddress(geohash);
    //提交一个mutations
    if(result.code === 0){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address});
    }
  },
  async getCategory({commit}){
    const result = await reqCategory();
    if(result.code === 0){
      const category = result.data;
      commit(RECEIVE_CATEGORY,{category})
    }
  },
  async getShops({commit,state}){
    const latitude = state.latitude;
    const longitude = state.longitude;
    const result = await reqShops(latitude,longitude);
    if(result.code === 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //记录用户信息
  recordUser({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo});
  },
  //获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo();
    if(result.code === 0){
      const userInfo = result.data;
      commit(RECEIVE_USER_INFO,{userInfo});
    }
  },
  //异步退出登录
  async getLogout({commit}){
    const result = await reqLogout();
    if(result.code === 0){
      console.log('退出登录成功');
      commit(RESET_USER_INFO);
    }
  },
  async getShopFoods({commit},callback){
    const result = await reqShopFood();
    if(result.code === 0){
      const foods = result.data;
      commit(RECEIVE_FOODS,{foods});
      //数据更新了，通知组件
      callback && callback();
    }
  },
  async getShopRatings({commit}){
   const result = await reqShopRating();
   if(result.code === 0){
     const ratings = result.data;
     commit(RECEIVE_RATINGS,{ratings});
   }
  },
  async getShopInfo({commit}){
    const result = await reqShopInfo();
    if(result.code === 0){
      const info = result.data;
      commit(RECEIVE_INFO,{info});
    }
  }
}
