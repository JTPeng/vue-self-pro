<template>
  <div>
    <div class="searchContainer">
      <header class="scHeader">
        <div class="schTop">
          <i class="iconfont icon-cha" @click="searchKeyword=''"></i>
          <input type="text" placeholder="颜值款电蚊拍" v-model="searchKeyword"/>
          <a href="javascript:;" class="scCancel" @click="$router.push('/main')">
            取消
          </a>
        </div>
      </header>
      <section class="toggleHide">
        <div class="schBottom" :class="{on:historyIsShow}">
          <div class="scHistory" :class="{on:historyIsShow}">
            <span>历史记录</span>
            <i class="iconfont icon-del" @click="delHistory()"></i>
          </div>
          <ul class="historyList">
            <li class="historyItem" v-for="(history, index) in historyLists" :key="index">
              {{history}}
            </li>
          </ul>
        </div>
        <ul class="searchContent" v-if="searchContentLists.length>0">
          <li class="contentItem" @click="saveText(index)" v-for="(searchContent,index) in searchContentLists"
              :key="index">{{searchContent}}
          </li>
        </ul>
        <Split/>
        <section class="hotSearch">
          <div class="hsTitle">热门搜索</div>
          <ul class="searchList">
            <li class="searchItem" :class=" selected === index ? 'on':''"
                v-for="(hotKeywordVO, index) in hotKeywordVOList" :key="index" @click="selected = index">
              {{hotKeywordVO.keyword}}
            </li>
          </ul>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  import {reqSearchContent, reqSearchInput} from '../../api/index.js'

  export default {
    name: 'search',
    data() {
      return {
        historyLists: [], // 历史记录
        hotKeywordVOList: [], // 热门关键字
        searchContentLists: [], // 搜索结果内容数组
        historyIsShow: false, // 历史记录是否显示
        searchKeyword: '', // 搜索框关键字
        selected: -1, //是否被选中
      }
    },
    watch: {
      async searchKeyword() {
        const result = await reqSearchInput('/xhr/search/searchAutoComplete.json?', this.searchKeyword);
        // console.log(result)
        if (result.code === '200') {
          this.searchContentLists = result.data
        }
      }
    },
    async mounted() {
      this.timeId = setTimeout(() => {
        this.historyLists = ['web前端教程', 'JAVA实战', 'node.js', '全栈工程师']
      }, 1000);
      const result = await reqSearchContent('/xhr/search/init.json');
      // console.log(result)
      if (result.code === "200") {
        this.hotKeywordVOList = result.data.hotKeywordVOList
      }
      // console.log(this.hotKeywordVOList)
    },
    methods: {
      delHistory() {
        this.historyLists = [];
        this.historyIsShow = true
      },
      saveText(id) {
        const result = this.searchContentLists.filter((a, index) => id === index);
        this.historyLists = [...this.historyLists, ...result];
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    width 100%
    background-color #fff

    .scHeader
      width 100%
      box-sizing border-box
      padding 10px
      position relative
      /* 头顶部 */

      .schTop
        width 100%
        display flex

        i
          position absolute
          top 17px
          right 70px
          color #cccccc

        input
          width 85%
          background-color #eee
          box-sizing border-box
          height 30px
          padding 5px 10px 5px 30px
          background-image url('./images/search.png')
          background-repeat no-repeat
          background-size 18px
          background-position-y center
          background-position-x 8px
          border-radius 5px

        .scCancel
          width 15%
          height 30px
          text-align center
          line-height 30px
          font-size 18px

  /* 头底部 */
  .toggleHide
    width 100%

    .schBottom
      width 100%
      box-sizing border-box
      padding 10px 4px

      &.on
        display none

      .scHistory
        width 100%
        display flex
        justify-content space-between
        align-items center
        color #d7d7d7
        font-size 18px

        i
          color #666666
          font-size 18px

    .historyList
      width 100%
      margin-top 10px
      display flex
      flex-wrap wrap

      .historyItem
        text-align center
        margin-right 16px
        margin-bottom 16px
        border 1px solid #cccccc
        padding 5px 10px
        font-size 16px

    /* 111 */

    .searchContent
      position absolute
      left 0
      top 45px
      width 100%
      min-height 100%
      box-sizing border-box
      padding 0 10px
      background-color #ffffff

      .contentItem
        width 100%
        padding 10px 0
        font-size 20px

  /* 热门搜索 */
  .hotSearch
    width 100%
    box-sizing border-box
    padding 10px

    .hsTitle
      width 100%
      font-size 16px
      color #d7d7d7

    .searchList
      width 100%
      margin-top 10px
      display flex
      flex-wrap wrap

      .searchItem
        text-align center
        margin-right 16px
        margin-bottom 16px
        border 1px solid #cccccc
        padding 5px 10px
        font-size 16px

        &.on
          border 1px solid #f00
</style>