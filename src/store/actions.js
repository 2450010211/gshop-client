/*
  通过mutations间接更新state的多个方法对象
 */

import {RECEIVE_ADDRESS,RECEIVE_CATEGORY,RECEIVE_SHOPS} from './mutation-types'

import {reqAddress,reqCategory,reqShops} from '../api/index'

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
  }

}
