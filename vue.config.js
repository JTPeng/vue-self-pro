const path = require('path')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}
module.exports = {
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'@': resolve('src'),
			}
		},
	},
	// 配置代理
	devServer:{
		proxy:{
			'/api':{
				target:'http://m.you.163.com',
				changeOrigin:true,
				pathRewrite:{
					'^/api':''
				}
			}
		}
	},
	// 静态资源打包
	publicPath: './'
}