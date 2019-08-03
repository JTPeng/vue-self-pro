<template>
  <div>
    <div class="sContainer">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(swiper,index) in swpiers" :key="index">
            <img :src="swiper" alt="">
          </li>
        </ul>
        <div class="swiper-pagination"></div>
      </div>
      <div class="contentTitle">
            <span>
              <i class="iconfont icon-pinpai"></i>
              网易自营品牌
            </span>
        <span>
              <i class="iconfont icon-protect"></i>
              30天无忧退货
            </span>
        <span>
              <i class="iconfont icon-money"></i>
              48小时快速退款
            </span>
      </div>

    </div>
  </div>
</template>

<script>
  // 引入Swiper
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
  // swiper图片
  import swiper1 from '../images/swiper-01.jpg'
  import swiper2 from '../images/swiper-02.jpg'
  import swiper3 from '../images/swiper-03.jpg'

  export default {
    name: 'Swiper',
    data() {
      return {
        swpiers: [swiper1, swiper2, swiper3]
      }
    },
    mounted() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sContainer
    width 100%
    box-sizing border-box
    padding 0 10px
    background-color #fff

    .swiper-container
      width 100%

      .swiper-wrapper
        width 100%

        .swiper-slide
          width 100%
          justify-content center
          align-items flex-start
          flex-wrap wrap

          img
            width 100%
            height 200px

      .swiper-pagination
        color blue

        > span.swiper-pagination-bullet
          height 4px
          width 40px
          background #fff
          opacity 0.4
          border-radius 10px
          transform translateY(-10px)

        > span.swiper-pagination-bullet-active
          background-color #f00
          opacity 1
    .contentTitle
      width 100%
      margin-top 10px
      display flex
      justify-content space-around
      span
        font-size 14px
        .iconfont
          color red
</style>