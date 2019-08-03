<template>
  <div>
    <div class="shopCartContainer">
      <header class="header">
        <span class="shopCart">购物车</span>
        <span>领券</span>
      </header>
      <ul class="sellList">
        <li class="sellItem" v-for="(sell, index) in sells" :key="index">
          {{ sell }}
        </li>
      </ul>
      <div class="shopCartBg"></div>
			<div class="loginBtn" @click="$router.push('/personal')">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sells: ["30天无忧退货", "48小时快速退款", "满88元免邮费"]
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopCartContainer
  width 100%
	/* 头部 */
	.header
		width 100%
		box-sizing border-box
		padding 10px 20px
		display flex
		justify-content space-between
		align-items center
		font-size 16px
		background-color #ffffff
		span
			color #f00
		.shopCart
			font-size 20px
			color #000
	/* 优惠信息 */
	.sellList
		width 100%
		background-color #eeeeee
		display flex
		justify-content space-around
		align-items center
		.sellItem
			height 30px
			line-height 30px
			font-size 14px
			color #666666
	/* 购物车背景图 */
	.shopCartBg
		width 100%
		height 300px
		background-image url('./images/backImage.png')
		background-size 50%
		background-repeat no-repeat
		background-position center 100px
	.loginBtn
		width 80%
		height 60px
		line-height 40px
		box-sizing border-box
		padding 10px
		font-size 20px
		margin-left 40px 
		text-align center
		background-color #b4282d
		border-radius 5px
		color #ffffff
</style>
