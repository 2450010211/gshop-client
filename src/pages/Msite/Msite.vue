<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.address">
      <router-link to="/search" class="header_search" slot="left">
        <i class="iconfont icon-search"></i>
      </router-link>
      <router-link :to="userInfo._id ? '/userinfo' : '/login'" class="header_login" slot="right">
        <span class="header_login_text" v-if="!userInfo._id">登录/注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="category.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categoryArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="`https://fuss10.elemecdn.com${category.image_url}`">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList />
    </div>
  </div>
</template>
<script>
  import {mapState,mapActions} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from "../../components/ShopList/ShopList";
  import Swiper from 'swiper/swiper-bundle.min'
  import 'swiper/swiper-bundle.min.css'

  export default {
    components:{
      HeaderTop,
      ShopList
    },
    mounted() {
      //mapActions只能写在methods中
      //this.$store.dispatch('getCategory');
      this.getCategory();
      this.getShops();
    },
    computed:{
      ...mapState(['address','category','userInfo']),

      /*
      后台返回category的数据是一个一维数组
      把返回category一维数组转成二维数组，小组元素中的个数最大是8
       */
      categoryArr(){
        const {category} = this;
        const resulrArr = [];
        let subArr = [];
        category.forEach(c =>{
          if(subArr.length === 8){
            subArr = [];
          }
          if(subArr.length === 0){
            resulrArr.push(subArr);
          }
          subArr.push(c);
        })
        return resulrArr;
      }
    },
    methods:{
      ...mapActions(['getCategory','getShops'])
    },
    watch:{
      category(value){
        //创建一个swiper对象
        this.$nextTick(() => {  //一旦完成界面更新，立即调用(数据更新之后)
          new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
            pagination: {// 如果需要分页器
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    overflow hidden
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
