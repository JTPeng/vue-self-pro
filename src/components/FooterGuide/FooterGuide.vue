<template>
  <footer class="footer_guide">
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: '/main' === $route.path}"
      @click="goTo('/main')"
    >
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: $route.path.match(/^(\/category)/)}"
      @click="goTo('/category')"
    >
      <span class="item_icon">
        <i class="iconfont icon-category"></i>
      </span>
      <span>分类</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on:$route.path.match(/^(\/topic)/) }"
      @click="goTo('/topic')"
    >
      <span class="item_icon">
        <i class="iconfont icon-category"></i>
      </span>
      <span>识物</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: '/shopcart' === $route.path }"
      @click="goTo('/shopcart')"
    >
      <span class="item_icon">
        <i class="iconfont icon-shopCart"></i>
      </span>
      <span>我的</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: '/personal' === $route.path }"
      @click="goTo('/personal')"
    >
      <span class="item_icon">
        <i class="iconfont icon-personal"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer_guide // footer
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #f00
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>