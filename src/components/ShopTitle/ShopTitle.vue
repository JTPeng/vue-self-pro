<template>
  <div>
    <div class="shopTitle">
      <slot name="left">{this.tittle}</slot>
      <slot name="right">{this.more}></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopTitle",
    props:{
      title:String,
      more:String
    },
    data(){
      return{

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brandTitle
    width 100%
    /*height 50px*/
    margin-bottom 10px
    display flex
    justify-content space-between
    font-size 18px
    span
      font-size 18px
</style>