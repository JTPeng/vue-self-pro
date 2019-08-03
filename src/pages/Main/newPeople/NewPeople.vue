<template>
  <div>
    <div class="newPeopleContainer">
      <div class="newPeople">
        <p class="npTitle"> -- 新人专享 --</p>
        <div class="npContent">
          <div class="npLeft">
            <a href="javascript:;">
              <span class="giftText">新人专享礼包</span>
              <img src='../images/newPeople/n1.png' alt="" />
            </a>
          </div>
          <div class="npRight">
            <div class="rightTop">
              <a href="javascript:;">
                <div>
                  <span>福利社</span>
                  <span class="text">今日特价</span>
                </div>
                <img src='../images/newPeople/n2.png' alt="" />
              </a>
            </div>
            <div class="rightBottom">
              <a href="javascript:;">
                <div>
                  <span>新人拼团</span>
                  <span class="text">一元起包邮</span>
                </div>
                <img src='../images/newPeople/n3.png' alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewPeople"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.newPeopleContainer
  width 100%
  .newPeople
    padding 10px
    background-color #ffffff
    .npTitle
      width 100%
      text-align center
      font-size 20px
      margin 10px 0px
      background-color #ffffff
    .npContent
      display flex
      justify-content space-around
      .npLeft
        background-color #f9e9cf
        width 49%
        height 200px
        a
          display flex
          flex-direction column
          justify-content center
          align-items center
          // text-align: center
          height 200px
          .giftText
            width 80%
            padding-left 20px
            color #000000
          img
            width 80%
            height 130px
            margin 20px 0px
      .npRight
        width 49%
        display flex
        flex-direction column
        justify-content space-around
        height 200px
        .rightTop
          width 100%
          height 98px
          background-color #f9e9cf
          a
            display flex
            div
              span
                display inline-block
                color #000000
                font-size 16px
                padding 4px
                &.text
                  color #9f9995
            img
              width 50%
              height 50%
        .rightBottom
          width 100%
          height 98px
          background-color #f9e9cf
          a
            display flex
            div
              width 100%
              span
                display inline-block
                color #000000
                font-size 16px
                padding 4px
                &.text
                  color #9f9995
                  background-color #cbb693
                  border-radius 5px
            img
              width 50%
              height 50%
</style>