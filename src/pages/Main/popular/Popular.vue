<template>
  <div>
    <div class="popularContainer">
      <div class="popular">
        <div class="popularTitle">
          <span>人气推荐</span>
          <span>更多></span>
        </div>
        <div class="popularContent">
          <div class="pcTop">
            <img src="../images/popular/pt.png" alt=""/>
            <div class="right">
              <p class="rTitle">限时购</p>
              <p class="rText">60s镜眠贡缎四件套</p>
              <p class="rText1">400根纯棉贡缎,入门奢华享受生活</p>
              <p class="rPrice">￥375</p>
            </div>
          </div>
          <div class="pcBottom">
            <ul class="pcList">
              <li class="pcItem" v-for="(popular,index) in populars" :key="index">
                <a href="javascript:;">
                  <div class="pcPosi" v-if="popular.design">
                    {{popular.design}}
                  </div>
                  <img :src="popular.image" alt=""/>
                  <p class="pcTitle">
                    <span class="pcText">{{popular.text}}</span>
                    <span class="pcPrice">￥{{popular.price}}</span>
                  </p>
                  <p class="pcBtn">
                    <span class="pcGoods" v-if="popular.goods">{{popular.goods}}</span>
                    <span class="pcFull" v-if="popular.full">{{popular.full}}</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // 人气推荐图片
  import pt from '../images/popular/pt.png'
  import p1 from '../images/popular/p1.png'
  import p2 from '../images/popular/p2.png'
  import p3 from '../images/popular/p3.png'
  export default {
    name: "Popular",
    data(){
      return{
        populars:[]
      }
    },
    mounted() {
      setTimeout(()=>{
        this.populars = [
          {
            image: p1,
            goods: '特价',
            full: '满赠',
            design: '英国设计',
            text: '英国设计 便携式榨汁机',
            price: '199'
          },
          {
            image: p2,
            goods: '特价',
            full: '',
            design: '',
            text: '无提风味 超即溶糖品咖啡',
            price: '189'
          },
          {
            image: p3,
            goods: '',
            full: '',
            design: '',
            text: '轻便污水折叠床',
            price: '299'
          }
        ]
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.popularContainer
  width 100%
  .popular
    width 100%
    background-color #ffffff
    box-sizing border-box
    padding 10px
    .popularTitle
      width 100%
      height 50px
      display flex
      justify-content space-between
      font-size 18px
      span
        font-size 18px
    .popularContent
      width 100%
      .pcTop
        background-color #fef3e6
        display flex
        img
          width 50%
          height 20%
        .right
          width 50%
          display flex
          flex-direction column
          justify-content center
          p
            margin-bottom 10px
            font-size 14px
          .rTitle
            width 50px
            height 18px
            line-height 18px
            text-align center
            border-radius 3px
            color #f00
            border 1px solid #f00
          .rText
            color #000
          .rText1
            color #9c9995
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
          .rPrice
            color #f00
      .pcBottom
        width 100%
        .pcList
          width 100%
          display flex
          justify-content space-between
          .pcItem
            width 32%
            a
              position relative
              background-color #f5f5f5
              .pcPosi
                position absolute
                left 10px
                width 20px
                font-size 12px
                font-weight 700
                text-align center
                border 1px solid #b4a078
                color #b4a078
              img
                width 100%
              .pcTitle
                color #000
                font-size 13px
                margin-bottom 10px
                .pcText
                  color #000
                  width 100px
                  overflow hidden
                  text-overflow ellipsis
                .pcPrice
                  color #f00
              .pcBtn
                color #f00
                font-size 12px
                display flex
                .pcGoods, .pcFull
                  display inline-block
                  width 35px
                  height 16px
                  line-height 16px
                  text-align center
                  border-radius 10px
                  border 1px solid #f00
                  margin-right 3px

</style>