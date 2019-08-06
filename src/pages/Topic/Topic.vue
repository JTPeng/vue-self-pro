<template>
  <div>
    <div class="topicContainer">
      <header class="topicHeader">
        <div class="topicHome">
          <a href="javascript:;" @click="$router.push('/main')">
            <i class="iconfont icon-home" style="font-size:22px;"></i>
          </a>
        </div>
        <div class="topicFind">
          <span class="find">发现</span>
          <span>甄选家</span>
        </div>
        <div class="topicSearchCar">
          <a href="javascript:;">
            <i
              class="iconfont icon-search "
              @click="goTo('/search')"
              style="font-size:22px;margin-right:10px"></i>
            <i
              class="iconfont icon-shopCart "
              style="font-size:22px"
              @click="goTo('/shopcart')"></i>
          </a>
        </div>
      </header>
      <nav class="tabsList" style="height:36px;">
        <ul class="navLists">
          <li
            class="navItem"
            :class="selected === index ? 'on':''"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selected = index"
          >
            <router-link
              :to="`/topic/topicDetail/${tab.id}`"
              class="navLink"
              :class="selected === index ? 'on':''"
            >{{ tab.title }}
            </router-link
            >
          </li>
        </ul>
      </nav>
<!--      <Split/>-->
      <div class="topicDetailList">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    data() {
      return {
        tabs: [
          {id: 1, title: "盛夏特别版"},
          {id: 2, title: "推荐"},
          {id: 3, title: "好货内部价"},
          {id: 4, title: "回购榜"},
          {id: 5, title: "晒单"},
          {id: 6, title: "开发者日记"},
          {id: 7, title: "达人"},
          {id: 8, title: "HOME"}
        ],
        selected:-1,
      };
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll(".tabsList", {
          scrollX: true,
          click: true
        });
      });
      this.selected = 1
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topicContainer
    width 100%

    .topicHeader
      width 100%
      height 50px
      position fixed
      left 0
      top 0
      z-index 1000
      line-height 30px
      box-sizing border-box
      padding 10px
      display flex
      justify-content space-around
      border-bottom 1px solid #dedede
      background-color #fff

      .topicFind
        color #7f7f7f
        font-size 12px

        .find
          margin-left 50px
          font-size 18px
          color #f00
          margin-right 10px

    .tabsList
      position fixed
      left 0
      top 50px
      z-index 1000
      width 100%
      background-color #fff
      color #fff

      .navLists
        display flex
        flex-wrap nowrap
        float left

        .navItem
          white-space nowrap
          padding 10px 10px

        &.on
          border-bottom 1px solid #f00

      .navLink
        font-size 16px
        width 100%
        height 100%

        &.on
          color #f00

  .topicDetailList
    width 100%
    padding-top 86px
</style>