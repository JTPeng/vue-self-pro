<template>
  <div>
    <div class="mansContainer">
      <div class="mans">
        <ul class="mansList">
          <li class="mansItem" v-for="(man,index) in mans" :key="index">
            <a href="javascript:;">
              <div class="picPosi" v-if="man.design">
                {{man.design}}
              </div>
              <div class="mansItemPic" >
                <img :src="man.image" alt=""/>
              </div>
              <span class="mansTitle">{{man.title}}</span>
              <p class="price">
                <span class="newPrice">￥{{man.newPrice}}</span>
                <span class="oldPrice">￥{{man.oldPrice}}</span>
              </p>
              <div class="sellBtn">
                <span class="sell" v-if="man.sel">{{man.sell}}</span>
                <span class="full" >{{man.full}}</span>
              </div>
            </a>
          </li>
          <li class="mansItem">
            <a href="javascript:;">
              <div class="mansItemPic">
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
  // 男士精选
  import m1 from '../images/mans/m1.png'
  import m2 from '../images/mans/m2.png'
  import m3 from '../images/mans/m3.png'
  import m4 from '../images/mans/m4.png'
  import m5 from '../images/mans/m5.png'
  import m6 from '../images/mans/m6.png'
  import m7 from '../images/mans/m7.png'
  import m8 from '../images/mans/m8.png'
  import BScroll from 'better-scroll'
  export default {
    name: "Mans",
    data(){
      return{
        mans:[]
      }
    },
    mounted() {
      this.$nextTick(()=>{
        new BScroll('.mans', {
          click: true,
          scrollX: true
        })
      });
      setTimeout(()=>{
        this.mans = [
          {
            image: m1,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: '满减'
          },
          {
            image: m2,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: '满减'
          },
          {
            image: m3,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: '满减'
          },
          {
            image: m4,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: ''
          },
          {
            image: m5,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: '满减'
          },
          {
            image: m6,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: '满减'
          },
          {
            image: m7,
            title: '全球通用转换插座',
            newPrice: '38',
            oldPrice: '40',
            design: '',
            sell: '',
            full: ''
          },
          {
            image: m8,
            title: '头层牛皮,凉鞋也时髦',
            newPrice: '38',
            oldPrice: '40',
            design: '2个规格',
            sell: '',
            full: '满减'
          }
        ]
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.mansContainer
  width 100%
  .mans
    width 100%
    overflow hidden
    background-color #ffffff
    .mansList
      width 300%
      box-sizing border-box
      padding 10px
      display flex
      .mansItem
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
          .mansItemPic
            width 100%
            height 93px
            text-align center
            color #000
            line-height 93px
            background-color #f4f4f4
            img
              width 80%
          .mansTitle
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