/*
  直接更新state的多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_FOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

import Vue from 'vue'

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
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count++;
    }else{
      //food.count = 1; 没有数据绑定效果
      Vue.set(food,'count',1);//让新增的属性值也有数据绑定
      //将food添加到cartFoods中
      state.cartFoods.push(food);
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--;
      if(food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1);
      }
    }
  },
  [CLEAR_CART](state){
    //清除food中的count
    state.cartFoods.forEach(food => food.count = 0);
    //移除购物车中所有购物项
    state.cartFoods = [];
  }
}
