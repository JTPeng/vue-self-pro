<template>
  <div>
    <div class="mainContainer">
      <header class="mainHeader" ref="mainHeader">
        <div class="headerTop">
          <h1 class="logo">网易严选</h1>
          <input
            type="text"
            placeholder="搜索商品,共21622款好物"
            @click="$router.push('/search')"
          />
          <div class="login" @click="$router.push('/personal')">登 陆</div>
        </div>
        <div class="nav">
          <ul class="navList">
            <li class="navItem" :class="selected === index?'on':''" v-for="(navList,index) in navLists" :key="index"
                @click="togglePath(index)">
              {{navList.title}}
            </li>
          </ul>
          <div class="arrow">
            <div class="toggleTop">
              <div class="text" v-if="isShow">全部频道</div>
              <div class="tgArrow" @click="isShow = !isShow" >
                <img src="./images/arrow.png" alt="">
              </div>
            </div>
            <ul class="allList" v-if="isShow">
              <li class="allItem" :class="selected === index ? 'on':''" v-for="(navList,index) in navLists" :key="index" @click="selected = index">{{navList.title}}</li>
            </ul>
          </div>
        </div>
      </header>
      <div class="mainContent" ref="mainContent">
        <section class="content">
          <Swiper/>
          <PicContent/>
          <Split/>
          <NewPeople/>
          <Split/>
          <Brand/>
          <Split/>
          <HotSale/>
          <Split/>
          <Popular/>
          <Split/>
          <Limit/>
          <Split/>
          <NewGood/>
          <Split/>
          <Kill/>
          <Split/>
          <BigImage/>
          <Split/>
          <Food/>
          <Split/>
          <LoveImg/>
          <Split/>
          <Loves/>
          <Split/>
          <ManImg/>
          <Split/>
          <Mans/>
          <Split/>
          <Footer/>
        </section>
      </div>
    </div>
    <div class="mask" v-show="isShow" @click="isShow = !isShow"></div>
  </div>
</template>

<script>
  // 引入better-scroll
  import BScroll from 'better-scroll'
  // 组件引入
  import Swiper from './swiper/Swiper.vue';
  import PicContent from './picContent/picContent.vue'
  import NewPeople from './newPeople/NewPeople.vue'
  import Brand from './brand/Brand.vue'
  import HotSale from './hotSale/hotSale.vue'
  import Popular from './popular/Popular.vue'
  import Limit from './limit/Limit.vue'
  import NewGood from './newGood/NewGood.vue'
  import Kill from './kill/Klii.vue'
  import BigImage from './bigImage/BigImage.vue'
  import Food from './foods/Foods.vue'
  import LoveImg from './loveImg/LoveImg.vue'
  import Loves from './loves/Loves.vue'
  import ManImg from './manImg/ManImg.vue'
  import Mans from './mans/Mans.vue'
  import Footer from './footer/Footer.vue'
  export default {
    data() {
      return {
        isShow:false,
        navLists: [
          {id: 1, title: '推荐专区'},
          {id: 2, title: '夏凉专区'},
          {id: 3, title: '爆品专区'},
          {id: 4, title: '爆品专区'},
          {id: 5, title: '新品专区'},
          {id: 6, title: '居家生活'},
          {id: 7, title: '服饰鞋包'},
          {id: 8, title: '美食酒水'},
          {id: 9, title: '个户清洁'},
          {id: 10, title: '夏凉专区'},
          {id: 11, title: '母婴亲子'},
          {id: 12, title: '运动旅行'},
          {id: 13, title: '服饰鞋包'},
          {id: 14, title: '美食酒水'},
          {id: 15, title: '个户清洁'}
        ],
        selected: -1,
      }
    },
    components:{
      Swiper,
      PicContent,
      NewPeople,
      Brand,
      HotSale,
      Popular,
      Limit,
      NewGood,
      Kill,
      BigImage,
      Food,
      LoveImg,
      Loves,
      ManImg,
      Mans,
      Footer
    },
    mounted() {
      this.selected = 0;
      // mainContent mainHeader
      const mainHeaderHeight = this.$refs.mainHeader.offsetHeight;
      // this.$refs.mainContent.style.paddingTop = mainHeaderHeight + 'px'
      this.$refs.mainContent.style.height = document.documentElement.clientHeight - mainHeaderHeight - 50 + 'px';
      this.$nextTick(()=>{
        new BScroll('.nav', {
          scrollX: true,
          click: true
        });
        new BScroll('.mainContent',{
          click:true
        })
      })
    },
    methods:{
      arrowToggle(){
        // this.isShow
      },
			togglePath(index){
				this.selected = index
			}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  //清除浮动
  .mainContainer
    width 100%

    .mainHeader
      width 100%
      background-color #fff
      position fixed
      left 0
      top 0
      z-index 100
      .headerTop
        position relative
        z-index 2
        height 50px
        padding 5px 10px
        display flex
        flex-flow row nowrap
        align-items center
        background-color #ffffff

        .logo
          width 80px
          height 20px
          font-size 16px
          line-height 20px
          margin-right 6px

        input
          height 30px
          background-color #ededed
          border-radius 5px
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          font-size 16px
          margin-right 10px
          padding 2px 2px 0px 25px
          background-image url('./images/search.png')
          background-size 18px
          background-position-y center
          background-position-x 5px
          background-repeat no-repeat

        .login
          width 50px
          height 25px
          text-align center
          line-height 25px
          border 1px solid red
          border-radius 5px

      .nav
        width 80%
        overflow hidden

        .navList
          box-sizing border-box
          padding 10px
          display flex
          flex-wrap nowrap
          float left

          .navItem
            white-space nowrap
            color #000
            font-size 16px
            padding 0 10px 5px

            &.on
              color #f00
              border-bottom 2px solid #f00

        // 全部频道
        .arrow
          position absolute
          top 55px
          right 0
          width 100%
          z-index 50
          box-sizing border-box
          padding 10px
          .toggleTop
            width 100%
            height 30px
            line-height 30px
            .text
              width 85%
              float left
              background-color #fff
            .tgArrow
              float right
              padding-right 15px
              img
                width 25px
                height 25px
          .allList
            width 100%
            display flex
            justify-content left
            flex-wrap wrap
            background-color #fff
            .allItem
              width 21%
              height 30px
              line-height 30px
              font-size 14px
              margin-top 10px
              margin-right 12px
              border 1px solid #7e8c8d
              text-align center
              background-color #fff
              &.on
                color #f00
                border 1px solid #f00

    .mainContent
      width 100%
      box-sizing border-box
      padding  10px
      .content
        padding-top 101px
  .mask
    width 100%
    position: fixed;
    z-index: 10000;
    background: rgba(0,0,0,.5);
    top: 266px;
    left: 0;
    right: 0;
    bottom: 0;
</style>