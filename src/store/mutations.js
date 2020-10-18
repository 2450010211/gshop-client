/*
  直接更新state的多个方法对象
 */
import {RECEIVE_ADDRESS,RECEIVE_CATEGORY,RECEIVE_SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_FOODS,RECEIVE_RATINGS,RECEIVE_INFO} from './mutation-types'
import state from "./state";

export default {
  [RECEIVE_ADDRESS] (state,{address}){
    state.address = address;
  },
  [RECEIVE_CATEGORY] (state,{category}){
    state.category = category;
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops;
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO](state){
    state.userInfo = {};
  },
  [RECEIVE_FOODS](state,{foods}){
    state.foods = foods;
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings;
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info;
  }
}
