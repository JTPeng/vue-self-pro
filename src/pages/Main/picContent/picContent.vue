<template>
  <div>
    <div class="picContent">
      <ul class="contentList">
        <li class="listItem" v-for="(content,index) in contentListPic" :key="index">
          <img :src="content.image" alt="" />
          <span>{{content.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // contentPic
  import c1 from '../images/contentPic/c1.png'
  import c2 from '../images/contentPic/c2.png'
  import c3 from '../images/contentPic/c3.png'
  import c4 from '../images/contentPic/c4.png'
  import c5 from '../images/contentPic/c5.png'
  import c6 from '../images/contentPic/c6.png'
  import c7 from '../images/contentPic/c7.png'
  import c8 from '../images/contentPic/c8.png'
  import c9 from '../images/contentPic/c9.png'
  import c10 from '../images/contentPic/c10.gif'
  export default {
    data(){
      return {
        contentListPic:[]
      }
    },
    mounted() {
      setTimeout(()=>{
        this.contentListPic = [
          { image: c1, title: '新品首发' },
          { image: c2, title: '居家生活' },
          { image: c3, title: '服饰鞋包' },
          { image: c4, title: '美食酒水' },
          { image: c5, title: '个人清洁' },
          { image: c6, title: '母婴亲子' },
          { image: c7, title: '运动旅行' },
          { image: c8, title: '数码家电' },
          { image: c9, title: '全球特色' },
          { image: c10, title: '超级会员' }
        ]
      },1000)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.picContent
  width 100%
  .contentList
    width 100%
    display flex
    flex-wrap wrap
    justify-content center
    align-items center
    .listItem
      width 20%
      display flex
      flex-direction column
      justify-content center
      align-items center
      img
        width 50px
        height 50px
      span
        font-size 12px
</style>