<template>
  <div>
    <div class="limitContainer">
      <div class="limit">
        <div class="limitTitle">
          <span>限时购</span>
          <span>更多></span>
        </div>
        <div class="limitContent">
          <ul class="limitList">
            <li class="limitItem" v-for="(limit,index) in limits" :key="index">
              <div class="limitPic">
                <img :src="limit.image" alt="" />
              </div>
              <div class="limitPrice">
                <span class="newPrice">￥{{limit.newPrice}}</span>
                <span class="oldPrice">￥{{limit.oldPrice}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 限时购
  import lm1 from '../images/limit/lm1.png'
  import lm2 from '../images/limit/lm2.png'
  import lm3 from '../images/limit/lm3.png'
  import lm4 from '../images/limit/lm4.png'
  import lm5 from '../images/limit/lm5.png'
  import lm6 from '../images/limit/lm6.png'
  export default {
    name: "Limit",
    data(){
      return{
        limits:[],
      }
    },
    mounted() {
      this.limits = [
        { image: lm1, newPrice: '425', oldPrice: '499' },
        { image: lm2, newPrice: '109', oldPrice: '169' },
        { image: lm3, newPrice: '219', oldPrice: '249' },
        { image: lm4, newPrice: '545', oldPrice: '679' },
        { image: lm5, newPrice: '69', oldPrice: '89' },
        { image: lm6, newPrice: '4399', oldPrice: '5499' }
      ]
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.limitContainer
  width 100%
  .limit
    width 100%
    background-color #ffffff
    box-sizing border-box
    padding 10px
    .limitTitle
      width 100%
      height 50px
      display flex
      justify-content space-between
      font-size 18px
      line-height 50px
      span
        font-size 18px
    .limitContent
      width 100%
      .limitList
        width 100%
        display flex
        justify-content space-between
        align-items center
        flex-wrap wrap
        margin-bottom 10px
        .limitItem
          width 32%
          margin-bottom 15px
          .limitPic
            width 100%
            height 100%
            background-color #f5f5f5
            display flex
            justify-content center
            img
              width 80%
              height 80%
          .limitPrice
            margin-top 15px
            text-align center
            font-size 13px
            .newPrice
              color #f00
            .oldPrice
              text-decoration line-through
              color #eee

</style>