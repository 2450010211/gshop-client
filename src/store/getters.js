/*
  包含多个基于state的getters计算属性对象
 */
export default {

  totalCount(state){
    //reduce用来迭代一个数组，并且把它累积到一个值中
    return state.cartFoods.reduce((preTotal,food) => preTotal + food.count,0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((prePrice,food) => prePrice + food.count * food.price ,0)
  }
}
