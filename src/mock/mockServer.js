/*
  使用mockjs提供mock数据
 */
import Mock from 'mockjs'
import data from './data'

//返回food
Mock.mock('/food',{code: 0,data: data.goods});

//返回rating
Mock.mock('/rating',{code: 0,data: data.ratings});

//返回info
Mock.mock('/info',{code: 0,data: data.info});

//不需要向外暴露
