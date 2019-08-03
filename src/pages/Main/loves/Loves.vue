<template>
  <div>
    <div class="loveContainer">
      <div class="loves">
        <ul class="lovesList">
          <li class="lovesItem" v-for="(love,index) in loves" :key="index">
            <a href="javascript:;">
              <div
                class="picPosi" v-if="love.design"
              >
                {{love.design}}
              </div>
              <div class="lovesItemPic">
                <img :src="love.image" alt=""/>
              </div>
              <span class="lovesTitle">{{love.title}}</span>
              <p class="price">
                <span class="newPrice">￥{{love.newPrice}}</span>
                <span class="oldPrice">￥{{love.oldPrice}}</span>
              </p>
              <div class="sellBtn">
                <span class="sell" v-if="love.sell">{{love.sell}}</span>
                <span class="full">{{love.full}}</span>
              </div>
            </a>
          </li>
          <li class="lovesItem">
            <a href="javascript:;">
              <div class="lovesItemPic">
                查看更多 >
              </div>
            </a>
          </li>
        </ul>
      </div>


    </div>
  </div>
</template>

<script>
  // 恋爱穿搭图片
  import lo1 from '../images/loves/lo1.png'
  import lo2 from '../images/loves/lo2.png'
  import lo3 from '../images/loves/lo3.png'
  import lo4 from '../images/loves/lo4.png'
  import lo5 from '../images/loves/lo5.png'
  import lo6 from '../images/loves/lo6.png'
  import lo7 from '../images/loves/lo7.png'

  import BScroll from 'better-scroll'

  export default {
    name: "Loves",
    data() {
      return {
        loves: [],
      }
    },
    mounted() {
      setTimeout(() => {
        this.loves = [
          {
            image: lo1,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '七色可选',
            sell: '特价',
            full: '满减'
          },
          {
            image: lo2,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '七色可选',
            sell: '特价',
            full: '满减'
          },
          {
            image: lo3,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: ''
          },
          {
            image: lo4,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: '满减'
          },
          {
            image: lo5,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '七色可选',
            sell: '',
            full: '满减'
          },
          {
            image: lo6,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: ''
          },
          {
            image: lo7,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '七色可选',
            sell: '',
            full: '满减'
          },
          {
            image: lo1,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: '满减'
          }
        ]

      })
      this.$nextTick(()=>{
        new BScroll('.loves', {
          click: true,
          scrollX: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loveContainer
    width 100%

    .loves
      width 100%
      overflow hidden
      background-color #ffffff

      .lovesList
        width 300%
        box-sizing border-box
        padding 10px
        display flex

        .lovesItem
          width 32%
          display flex
          flex-direction column
          justify-content center
          margin-right 10px

          a
            position relative

            .picPosi
              position absolute
              left 2px
              width 20px
              height 66px
              border 1px solid #6a4120
              text-align center

            .lovesItemPic
              width 100%
              height 93px
              text-align center
              color #000
              line-height 93px
              background-color #f4f4f4

              img
                width 80%

            .lovesTitle
              font-size 14px
              color #000

            .price
              font-size 14px
              margin-top 5px

              .newPrice
                color #f00

              .oldPrice
                color #fafafa
                text-decoration line-through

            .sellBtn
              color #f00

              span
                display inline-block
                width 40px
                height 20px
                text-align center
                line-height 20px
                border 1px solid #f00
                border-radius 10px
                margin-top 5px
                margin-right 5px
</style>