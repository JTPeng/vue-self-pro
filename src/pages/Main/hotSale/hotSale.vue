<template>
  <div>
    <div class="hotSaleContainer">
      <div class="hotSale">
        <div class="hsTitle">类目热销榜</div>
        <div class="hsPic">
          <div class="hsPicTop">
            <div class="left">
              <div class="text">
                <p>热销榜</p>
                <p class="line"></p>
              </div>
              <img src="../images/hotSale/l1.png" alt="" />
            </div>
            <div class="right">
              <div class="text">
                <p>好评榜</p>
                <p class="line"></p>
              </div>
              <img src="../images/hotSale/l2.png" alt="" />
            </div>
          </div>
          <div class="hsPicBottom">
            <ul class="hsPicList">
              <li class="hsPicItem" v-for="(hotSale,index) in hotSales" :key="index">
                <a href="javascript:;">
                  <p>{{hotSale.title}}</p>
                  <img :src="hotSale.image" alt="" />
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
  // 类目热销榜
  // import l1 from '../images/hotSale/l1.png'
  // import l2 from '../images/hotSale/l2.png'
  import r1 from '../images/hotSale/r1.png'
  import r2 from '../images/hotSale/r2.png'
  import r3 from '../images/hotSale/r3.png'
  import r4 from '../images/hotSale/r4.png'
  import r5 from '../images/hotSale/r5.png'
  import r6 from '../images/hotSale/r6.png'
  import r7 from '../images/hotSale/r7.png'
  import r8 from '../images/hotSale/r8.png'
  export default {
    name: "hotSale",
    data(){
      return{
        hotSales:[],
      }
    },
    mounted() {
      this.hotSales = [
        { image: r1, title: '居家生活榜' },
        { image: r2, title: '服饰鞋包榜' },
        { image: r3, title: '美食酒水榜' },
        { image: r4, title: '个户清理榜' },
        { image: r5, title: '数码家电榜' },
        { image: r6, title: '运动旅行榜' },
        { image: r7, title: '母婴亲子榜' },
        { image: r8, title: '全球特色榜' }
      ]
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.hotSaleContainer
  width 100%
  .hotSale
    width 100%
    padding 10px
    box-sizing border-box
    background-color #ffffff
    .hsTitle
      width 100%
      height 40px
      font-size 16px
      text-align left
      line-height 40px
    .hsPic
      width 100%
      .hsPicTop
        width 100%
        display flex
        justify-content space-around
        .left
          width 48%
          height 110px
          background-color #f9f3e4
          display flex
          align-items center
          box-sizing border-box
          padding 8px
          .text
            width 50%
            p
              font-size 14px
              font-weight 700
            .line
              margin-top 10px
              width 25px
              height 2px
              background-color #96938c
          img
            width 70%
            height 140%
        .right
          width 48%
          height 110px
          display flex
          align-items center
          box-sizing border-box
          padding 8px
          background-color #ebeff6
          .text
            width 50%
            p
              font-size 14px
              font-weight 700
            .line
              margin-top 10px
              width 25px
              height 2px
              background-color #96938c
          img
            width 70%
            height 140%
      .hsPicBottom
        width 100%
        .hsPicList
          width 100%
          display flex
          flex-wrap wrap
          justify-content space-around
          .hsPicItem
            width 23%
            margin-top 10px
            background-color #f5f5f5
            a
              p
                font-size 12px
                font-weight 700
                color #000000
                text-align center
              img
                width 100%
                height 90%

</style>