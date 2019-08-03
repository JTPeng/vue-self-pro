import Vue from 'vue'
import Validate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文文件

Vue.use(Validate);
// 配置必须的规则
Validator.localize('zh_CN',{
	messages:zh_CN.messages,
	attributes: {
		phone:'手机号', // 手机号码
		msgCode:'短信验证码', // 手机验证码
		username:'用户名',// 用户名
		password:'密码',// 密码
		emailUsername:'邮箱',// 邮箱
		emailPassword:'邮箱密码', // 密码
	}
});
// 自定义规则
Validator.extend('phone', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  messages: field => field + '必须是11位手机号码'
});

Validator.extend('username', {
	validate: value => {
		return /^1\d{10}$/.test(value)
	},
	messages: field => field + '用户名的长度有误'
});
Validator.extend('password', {
	validate: value => {
		return value.length>0 && value.length<15
	},
	messages: field => field + '密码格式输入错误'
});
Validator.extend('emailUsername', {
	validate: value => {
		return /^1\d{10}$/.test(value)
	},
	messages: field => field + '邮箱账号的长度有误'
});
Validator.extend('emailPassword', {
	validate: value => {
		return value.length>0 && value.length<7
	},
	messages: field => field + '密码格式输入错误'
});
Validator.extend('msgCode', {
	validate: value => {
		return value.length>0 && value.length<7
	},
	messages: field => field + '验证码输入错误'
});
