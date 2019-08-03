<template>
  <div>
    <div class="brandContainer">
      <div class="brand">
        <div class="brandTitle">
          <span>品牌制造商直供</span>
          <span>更多></span>
        </div>
        <!--<ShopTitle/>-->
        <ul class="brandList">
          <li class="brandItem" v-for="(brand,index) in brands" :key="index">
            <p class="title">{{brand.title}}</p>
            <p class="price">{{brand.price}}</p>
            <img :src="brand.image" alt="" />
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  // 品牌
  import b1 from '../images/brand/b1.png'
  import b2 from '../images/brand/b2.png'
  import b3 from '../images/brand/b3.png'
  import b4 from '../images/brand/b4.png'
  export default {
    name: "Brand",
    data(){
      return{
        brands:[]
      }
    },
    mounted() {
      setTimeout(()=>{
        this.brands = [
          { image: b1, title: '海外制造商', price: '9.9元起' },
          { image: b2, title: 'CK制造商', price: '29.9元起' },
          { image: b3, title: '新秀丽制造商', price: '169元起' },
          { image: b4, title: 'Nine West制造商', price: '219元起' }
        ]
      },1000)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.brandContainer
  width 100%
  .brand
    width 100%
    background-color #ffffff
    box-sizing border-box
    padding 10px
    .brandTitle
      width 100%
      /*height 50px*/
      margin-bottom 10px
      display flex
      justify-content space-between
      font-size 18px
      span
        font-size 18px
    .brandList
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-between
      .brandItem
        width 49%
        background-color #f7fbfb
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin-bottom 10px
        .title
          width 100%
          text-align center
        .price
          width 100%
          text-align center
          margin 10px 0
        img
          width 80%
          height 65%

</style>