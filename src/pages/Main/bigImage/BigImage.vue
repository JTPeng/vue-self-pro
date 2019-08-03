<template>
  <div>
    <div class="bigImageContainer">
      <div class="bigImg">
        <br />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BigImage"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.bigImageContainer
  width 100%
  .bigImg
    background-image url('../images/bigPic/bg.jpg')
    width 100%
    height 150px
    background-size 100%
</style>