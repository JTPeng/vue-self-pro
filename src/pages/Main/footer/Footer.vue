<template>
  <div>
    <div class="footerContainer">
      <footer class="footer">
        <div class="footerBtn">
          <span>下载APP</span>
          <span>电脑版</span>
        </div>
        <div class="footerText">
          <p>网易公司版权所有&copy;1997-2019</p>
          <p>食品经营许可证:JY13301080111719</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footerContainer
  width 100%
  .footer
    width 100%
    height 150px
    box-sizing: border-box
    padding:20px 20px 52px
    background-color: #414141
    display: flex
    justify-content: center
    align-self: center
    flex-direction: column
    .footerBtn
      display: flex
      justify-content: center
      span
        display: inline-block
        width 80px
        height 30px
        border: 1px solid #575757
        border-radius: 5px
        text-align: center
        line-height: 30px
        color: #ffffff
        margin-right: 20px
    .footerText
      margin-top: 2px
      display: flex
      flex-direction: column
      align-items: center
      p
        color #eee
        margin: 4px 0
</style>