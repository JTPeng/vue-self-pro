<template>
  <div>
    <div class="newGoodContainer">
      <div class="newGood">
        <div class="newGoodTitle">
          <span>新品首发</span>
          <span>更多></span>
        </div>
        <div class="newGoodContent">
          <ul class="ngList">
            <li class="ngItem" v-for="(newGood,index) in newGoods" :key="index">
              <a href="###">
                <div class="ngPosi" v-if="newGood.design">
                  {{newGood.design}}
                </div>
                <div class="ngItemPic">
                  <img :src="newGood.image" alt=""/>
                </div>
                <div class="ngText">
                  <span class="title">{{newGood.title}}</span>
                  <span class="price">￥{{newGood.price}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // 新品首发
  import g1 from '../images/newGood/g1.png'
  import g2 from '../images/newGood/g2.png'
  import g3 from '../images/newGood/g3.jpg'
  import g4 from '../images/newGood/g4.png'
  import g5 from '../images/newGood/g5.png'
  import g6 from '../images/newGood/g6.png'
  export default {
    name: "NewGood",
    data(){
      return{
        newGoods:[],
      }
    },
    mounted() {
      this.newGoods = [
        {
          image: g1,
          title: '时尚按摩筋膜枪',
          price: '1299',
          design: '日本设计'
        },
        { image: g2, title: '是时候回家吃饭了', price: '299', design: '' },
        { image: g3, title: '时尚按摩筋膜枪', price: '1299', design: '' },
        {
          image: g4,
          title: '时尚按摩筋膜枪',
          price: '5299',
          design: '中国制造'
        },
        {
          image: g5,
          title: '时尚按摩筋膜枪',
          price: '199',
          design: '中国制造'
        },
        { image: g6, title: '时尚按摩筋膜枪', price: '129', design: '' }
      ]
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.newGoodContainer
  width 100%
  .newGood
    width 100%
    background-color #ffffff
    box-sizing border-box
    padding 10px
    .newGoodTitle
      width 100%
      height 50px
      display flex
      justify-content space-between
      font-size 18px
      line-height 50px
      span
        font-size 18px
    .newGoodContent
      width 100%
      .ngList
        width 100%
        display flex
        justify-content space-between
        flex-wrap wrap
        .ngItem
          width 32%
          a
            position relative
            .ngPosi
              position absolute
              left 10px
              top 10px
              height 60px
              width 20px
              text-align center
              z-index 100
              font-size 14px
              border 1px solid #bdac8a
            .ngItemPic
              background-color #f5f5f5
              img
                width 90%
                height 90%
            .ngText
              margin 10px 0
              .title
                color #000
                display inline-block
                margin-bottom 5px
              .price
                color #f00
</style>