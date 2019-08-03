<template>
  <div>
    <div class="personalContainer">
      <header class="perHeader">
        <div class="perHome">
          <a href="javascript:;" @click="$router.push('/main')">
            <i class="iconfont icon-home" style="font-size:22px;"></i>
          </a>
        </div>
        <div class="perFind">
          <span>网易严选</span>
        </div>
        <div class="perSearchCar">
          <a href="javascript:;">
            <i
              class="iconfont icon-search "
              @click="$router.push('/search')"
              style="font-size:22px;margin-right:10px"></i>
            <i
              class="iconfont icon-shopCart "
              style="font-size:22px"
              @click="$router.push('/shopcart')"></i>
          </a>
        </div>
      </header>
      <section class="perContent">
        <!-- 登录方式 -->
        <div class="toggleWays" :class="{ on: !loginWays }">
          <div class="perBgPic"></div>
          <div class="loginWays">
            <div class="phoneLogin" @click="phoneLogins()">
              <i class="iconfont icon-phone"></i>
              <span>手机号快速登录</span>
            </div>
            <div class="emailLogin" @click="emailLogins()">
              <i class="iconfont icon-mail"></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
          <ul class="loginList">
            <li class="loginItem" style="margin-right:14px">
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </li>
            <li
              class="loginItem"
              style="border-right:1px solid #000;border-left:1px solid #000"
            >
              <i class="iconfont icon-qq"></i>
              <span>QQ</span>
            </li>
            <li class="loginItem" style="margin-left:14px">
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </li>
          </ul>
        </div>
        <!-- 手机登录 -->
        <div class="phoneLogin" :class="{ on: !phoneLogin }">
          <div class="phoneBg"></div>
          <form class="login">
            <input type="text" placeholder="请输入手机号" class="username" v-model="phone" name="phone" v-validate="'required|phone'"/>
            <span style="color:red" v-show="errors.has('phone')">{{
                errors.first("phone")
              }}</span>
            <div class="password">
              <input type="text" placeholder="请输入短信验证码" v-model="msgCode" name="msgCode" v-validate="'required|msgCode'"/>
              <!-- {seconds>0?`已发送(${seconds}s)`:'获取验证码'} -->
              <button
                @click.prevent="sendCode()"
                :disabled="seconds > 0 ? true : false"
              >
                {{ seconds > 0 ? `已发送(${seconds}s)` : "获取验证码" }}
              </button>
            </div>
            <span style="color:red" v-show="errors.has('msgCode')">{{
                errors.first("msgCode")
              }}</span>
            <div class="loginText">
              <span class="loginProblem">遇到问题?</span>
              <span @click="pwdLogins()">使用密码验证登录</span>
            </div>
            <input type="button" value="登录" class="loginSub" />
            <div class="check">
              <!-- selected控制是否被选中  -->
              <span class="checked selected"></span>
              <span>
                我同意<a href="javascript:;">《服务条款》</a>和
                <a href="javascript:;">《网易隐私条款》</a>
              </span>
            </div>
          </form>
          <div class="otherWays" @click="otherWays()">
            其他登录方式 >
          </div>
        </div>
        <!-- 邮箱登录 -->
        <div class="emailLogin" :class="{ on: !emailLogin }">
          <div class="emailBg"></div>
          <form class="login">
            <input type="text" placeholder="邮箱账号" class="emailUsername" name="emailUsername" v-model="emailUsername" v-validate="'required|emailUsername'"/>
            <span style="color:red" v-show="errors.has('emailUsername')">{{
                errors.first("emailUsername")
              }}</span>
            <input type="text" placeholder="密码" class="password" name="emailPassword" v-model="emailPassword" v-validate="'required|emailPassword'"/>
            <span style="color:red" v-show="errors.has('emailPassword')">{{
                errors.first("emailPassword")
              }}</span>
            <div class="loginText">
              <span>注册账号</span>
              <span>忘记密码</span>
            </div>
            <input type="button" value="登录" class="loginSub" />
          </form>
          <div class="otherWays" @click="otherWays()">
            其他登录方式 >
          </div>
        </div>
        <!-- 密码登录 -->
        <div class="pwdLogin" :class="{ on: !pwdLogin }">
          <div class="pwdBg"></div>
          <form class="login">
            <input
              type="text"
              placeholder="请输入账号/手机号"
              class="pwdUsername"
              name="username"
              v-model="username"
              v-validate="'required|username'"
            />
            <span style="color:red" v-show="errors.has('username')">{{
                errors.first("username")
              }}</span>
            <input type="text" placeholder="密码" class="password" name="password" v-model="password" v-validate="'required|password'"/>
            <span style="color:red" v-show="errors.has('password')">{{
                errors.first("password")
              }}</span>
            <div class="loginText">
              <span>忘记密码</span>
              <span class="emailLogin" @click="phoneLogins()">
                短信快捷登录
              </span>
            </div>
            <input type="button" value="登录" class="loginSub" />
          </form>
          <div class="otherWays" @click="otherWays()">
            其他登录方式 >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginWays: true,
      phoneLogin: false,
      emailLogin: false,
      pwdLogin: false,
      seconds: 0,
      phone:'', // 手机号码
      msgCode:'', // 手机验证码
      username:'',// 用户名
      password:'',// 密码
      emailUsername:'',// 邮箱
      emailPassword:'', // 密码
    };
  },
  methods: {
    phoneLogins() {
      this.loginWays = false;
      this.phoneLogin = true;
      this.emailLogin = false;
      this.pwdLogin = false;
    },
    emailLogins() {
      this.loginWays = false;
      this.phoneLogin = false;
      this.emailLogin = true;
      this.pwdLogin = false;
    },
    pwdLogins() {
      this.loginWays = false;
      this.phoneLogin = false;
      this.emailLogin = false;
      this.pwdLogin = true;
    },
    otherWays() {
      this.loginWays = true;
      this.phoneLogin = false;
      this.emailLogin = false;
      this.pwdLogin = false;
    },
    sendCode() {
      clearInterval(this.timeId);
      let seconds = this.seconds;
      seconds = 5;
      this.timeId = setInterval(() => {
        seconds--;
        this.seconds = seconds;
        if (seconds <= 0) {
          clearInterval(this.timeId);
        }
      }, 1000);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.personalContainer
  width 100%
  .perHeader
    position fixed
    left 0
    top 0
    z-index 1000
    width 100%
    height 50px
    line-height 30px
    box-sizing border-box
    padding 10px 10px
    display flex
    justify-content space-around
    background-color #ffffff
    border-bottom 1px solid #dedede
    .perFind
      margin-left 50px
      span
        font-size 16px
        color #000000
        font-weight 700
        vertical-align middle
      .find
        color red
        font-size 20px
        font-weight 700
        margin-right 18px
	.perContent
		padding-top 50px
		width 100%
		background-color #ffffff
		/* 登录方式 */
		.toggleWays
			&.on
				display none
			.perBgPic
				width 100%
				height 300px
				margin 0 auto
				background-image url('./images/yanxuan.png')
				background-size 40%
				background-repeat no-repeat
				background-position center center
			.loginWays
				width 100%
				margin-bottom 100px
				.phoneLogin
					width 80%
					height 50px
					text-align center
					line-height 50px
					margin 0 auto
					font-size 16px
					color #ffffff
					background-color #dd1a21
					border-radius 5px
					i
						margin-right 5px
				.emailLogin
					width 80%
					height 50px
					text-align center
					line-height 50px
					margin 10px auto 0
					font-size 16px
					color #dd1a21
					background-color #ffffff
					border 1px solid #dd1a21
					border-radius 5px
					i
						margin-right 5px
			.loginList
				width 100%
				display flex
				justify-content center
				.loginItem
					width 20%
					font-size 16px
					text-align center
					color #7f7f7f
					i
						font-size 22px
						margin-right 5px
		/* 手机登录 */
		.phoneLogin
			&.on
				display none
			.phoneBg
				width 100%
				height 100px
				background-image url('./images/yanxuan.png')
				background-size 30%
				background-repeat no-repeat
				background-position center center
				background-color #ffffff
			.login
				width 100%
				height 300px
				background-color #ffffff
				box-sizing border-box
				padding 0 20px
				.username
					width 100%
					height 50px
					border-bottom 1px solid #eeeeee
				.password
					width 100%
					display flex
					align-items center
					border-bottom 1px solid #eeeeee
					input
						width 70%
						height 50px
						border-bottom 1px solid #eeeeee
					button
						background-color #ffffff
						display inline-block
						width 30%
						height 30px
						text-align center
						line-height 30px
						border 1px solid #eeeeee
				.loginText
					width 100%
					height 50px
					display flex
					justify-content space-between
					align-items center
					span
						font-size 14px
					.loginProblem
						color #dedede
				.loginSub
					width 100%
					height 50px
					background-color #f00
					color #ffffff
					font-size 16px
					border-radius 5px
				.check
					width 100%
					height 50px
					line-height 50px
					span
						display inline-block
						font-size 16px
						vertical-align middle
						a
							color #a0c5e8
					.checked
						margin-top 2px
						width 16px
						height 16px
						border 1px solid #d5d5d5
						margin-right 10px
						&.selected
							background-image url('./images/check.png')
							background-size cover
			.otherWays
				width 100%
				text-align center
				font-size 16px
				color #000
	/* 邮箱登录 */
	.emailLogin
		&.on
			display none
		.emailBg
			width 100%
			height 100px
			background-image url('./images/yanxuan.png')
			background-size 30%
			background-repeat no-repeat
			background-position center center
			background-color #ffffff
		.login
			width 100%
			height 300px
			background-color #ffffff
			box-sizing border-box
			padding 0 20px
			.emailUsername
				width 100%
				height 50px
				border-bottom 1px solid #eeeeee
			.password
				width 100%
				height 50px
				border-bottom 1px solid #eeeeee
			.loginText
				width 100%
				height 50px
				display flex
				justify-content space-between
				align-items center
				span
					font-size 14px
					color #dedede
			.loginSub
				width 100%
				height 50px
				background-color #f00
				color #ffffff
				font-size 16px
				border-radius 5px
		.otherWays
			width 100%
			text-align center
			font-size 16px
			color #000
	/* 密码登录 */
	.pwdLogin
		&.on
			display none
		.pwdBg
			width 100%
			height 100px
			background-image url('./images/yanxuan.png')
			background-size 30%
			background-repeat no-repeat
			background-position center center
			background-color #ffffff
		.login
			width 100%
			height 300px
			background-color #ffffff
			box-sizing border-box
			padding 0 20px
			.pwdUsername
				width 100%
				height 50px
				border-bottom 1px solid #eeeeee
			.password
				width 100%
				height 50px
				border-bottom 1px solid #eeeeee
			.loginText
				width 100%
				height 50px
				display flex
				justify-content space-between
				align-items center
				span
					font-size 14px
					color #dedede
				.emailLogin
					color #000
			.loginSub
				width 100%
				height 50px
				background-color #f00
				color #ffffff
				font-size 16px
				border-radius 5px
		.otherWays
			width 100%
			text-align center
			font-size 16px
			color #000
	</style>
