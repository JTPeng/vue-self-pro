<template>
  <div>
    <div class="killContainer">
      <div class="kill">
        <ul class="killList">
          <li class="killItem" v-for="(kill,index) in kills" :key="index">
            <a href="javascript:;">
              <p class="title">{{kill.title}}</p>
              <p class="text">{{kill.text}}</p>
              <div class="imgTwo">
                <img :src="kill.image" alt="" />
                <img :src="kill.pic" alt="" />
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  // 秒杀系列
  import k1 from '../images/kills/k1.png'
  import k2 from '../images/kills/k2.png'
  import k3 from '../images/kills/k3.png'
  import k4 from '../images/kills/k4.png'
  import k5 from '../images/kills/k5.png'
  import k6 from '../images/kills/k6.png'
  import k7 from '../images/kills/k7.png'
  import k8 from '../images/kills/k8.png'
  export default {
    name: "Klii",
    data(){
      return{
        kills:[]
      }
    },
    mounted() {
      this.kills = [
        {
          title: '9.9超值专区首发',
          text: '180款爆品新定价',
          image: k1,
          pic: k2
        },
        {
          title: '9.9超值专区首发',
          text: '180款爆品新定价',
          image: k3,
          pic: k4
        },
        {
          title: '9.9超值专区首发',
          text: '180款爆品新定价',
          image: k5,
          pic: k6
        },
        {
          title: '9.9超值专区首发',
          text: '180款爆品新定价',
          image: k7,
          pic: k8
        }
      ]
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.killContainer
  width 100%
  .kill
    width 100%
    box-sizing border-box
    padding 10px
    background-color #ffffff
    .killList
      width 100%
      display flex
      justify-content space-between
      flex-wrap wrap
      background-color #f5f5f5
      .killItem
        width 49%
        margin-bottom 10px
        a
          display flex
          flex-direction column
          justify-content center
          align-items center
          .title
            font-size 16px
            color #000000
            margin-bottom 10px
          .text
            font-size 14px
            color #7f7f7f
          .imgTwo
            display flex
            justify-content center
            img
              width 50%
              height 50%
</style>