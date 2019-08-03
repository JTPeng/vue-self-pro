<template>
  <div>
    <div class="foodsContainer">
      <div class="foods">
        <ul class="foodsList">
          <li class="foodsItem" v-for="(food,index) in foods" :key="index">
            <a href="javascript:;">
              <div class="picPosi" v-if="food.design">
                {{food.design}}
              </div>
              <div class="foodsItemPic">
                <img :src="food.image" alt=""/>
              </div>
              <span class="foodsTitle">{{food.title}}</span>
              <p class="price">
                <span class="newPrice">￥{{food.newPrice}}</span>
                <span class="oldPrice">￥{{food.oldPrice}}</span>
              </p>
              <div class="sellBtn">
                <span class="sell" v-if="food.sell">{{food.sell}}</span>
                <span class="full" v-if="food.full">{{food.full}}</span>
              </div>
            </a>
          </li>
          <li class="foodsItem">
            <a href="javascript:;">
              <!--          style={{ marginBottom: '70px' }}-->
              <div class="foodsItemPic"> 查看更多 >
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  // 食品
  import ch1 from '../images/foods/ch1.png'
  import ch2 from '../images/foods/ch2.png'
  import ch3 from '../images/foods/ch3.png'
  import ch4 from '../images/foods/ch4.png'
  import ch5 from '../images/foods/ch5.png'
  import ch6 from '../images/foods/ch6.png'
  import ch7 from '../images/foods/ch7.png'
  import ch8 from '../images/foods/ch8.png'
  import BScroll from 'better-scroll'
  export default {
    name: "Foods",
    data(){
      return{
        foods:[]
      }
    },
    mounted() {
      setTimeout(()=>{
        this.foods = [
          {
            image: ch1,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '永不变味',
            sell: '特价',
            full: '满减'
          },
          {
            image: ch2,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: '满减'
          },
          {
            image: ch3,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '永不变味',
            sell: '',
            full: '满减'
          },
          {
            image: ch4,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: ''
          },
          {
            image: ch5,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '永不变味',
            sell: '',
            full: '满减'
          },
          {
            image: ch6,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '永不变味',
            sell: '特价',
            full: ''
          },
          {
            image: ch7,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: '满减'
          },
          {
            image: ch8,
            title: '酸梅汤 350毫升*9瓶',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '特价',
            full: '满减'
          }
        ]
      })
      this.$nextTick(()=>{
        new BScroll('.foods', {
          click: true,
          scrollX: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .foodsContainer
    width 100%
    .foods
      width 100%
      overflow hidden
      background-color #ffffff
      .foodsList
        width 300%
        box-sizing border-box
        padding 10px
        display flex
        .foodsItem
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
            .foodsItemPic
              width 100%
              height 93px
              text-align center
              color #000
              line-height 93px
              background-color #f4f4f4
              img
                width 80%
            .foodsTitle
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