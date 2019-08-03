<template>
  <div>
    <div class="cateGoryContainer">
      <header class="catHeaderContainer" ref="header">
        <input
          class="search"
          type="text"
          placeholder="搜索商品,共21594款好物"
        />
      </header>
      <section class="catContent" ref="content">
        <div class="leftNav">
          <ul class="navList">
            <li class="navItem" :class="selected === index?'on':''" v-for="(navList,index) in navLists" :key="index"
                @click="togglePath(index)" >
              {{navList.title}}
            </li>
          </ul>
<!--          <div class="navList">-->
<!--            <router-link class="navItem" :class="selected === index?'on':''" v-for="(navList,index) in navLists" :key="index"-->
<!--                :to="`/category/categoryDetail/${index+1}`" >-->
<!--              {{navList.title}}-->
<!--            </router-link>-->
<!--          </div>-->
        </div>
        <div class="rightContent">
          <router-view>
            <CategoryDetail/>
          </router-view>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import CategoryDetail from '../../components/CategoryDetails/CategoryDetail.vue'
  // 引入better-scroll
  import BScroll from 'better-scroll';

  export default {
    name:'Category',
    data() {
      return {
        navLists: [
          {id: 0, title: '推荐专区'},
          {id: 1, title: '日常用品'},
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
          {id: 15, title: '个户清洁'},
        ],
        selected: -1, // nav选中状态初始值
      }
    },
    components: {
      CategoryDetail
    },
    mounted() {
      // 设置内容区域的高度
      const height = this.$refs.header.offsetHeight;
      this.$refs.content.style.height = document.documentElement.clientHeight - height - 50 + 'px';
      /*console.log(document.documentElement.clientHeight-height-50);
      console.log(this.$refs.content);*/
      // 滚动条设置
      this.$nextTick(() => {
        new BScroll(".leftNav", {
          click: true
        });
        // new BScroll(".rightContent", {
        //   click: true
        // })
      })
      this.selected = 0
    },
    methods:{
      togglePath(index){
        this.selected = index;
        this.$router.push(`/category/categoryDetail/${index+1}`)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cateGoryContainer
    width 100%

    .catHeaderContainer
      width 100%
      position fixed
      left 0
      top 0
      z-index 1000
      padding 10px 20px
      box-sizing: border-box
      border-bottom 1px solid #ffffff
      background-color #fff

      .search
        width 77%
        height 30px
        line-height: 30px
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        font-size 18px
        background-color #ededed
        border-radius 8px
        background-image: url('./images/search.png')
        background-position: 60px center
        background-repeat: no-repeat
        background-size: 18px
        padding-left: 80px
        outline none

    .catContent
      width 100%
      padding-top 51px
      display flex
      justify-content center

      .leftNav
        width 20%

        .navList
          width 100%

          .navItem
            width 100%
            height 50px
            text-align center
            line-height 50px
            font-size 14px
            color #000
            &.on
              color #f00
              border-left 2px solid #f00

      .rightContent
        width 80%
        box-sizing border-box
        padding 10px

</style>