const vConsolePlugin = require('vconsole-webpack-plugin');
module.exports = {
	runtimeCompiler: true,
	devServer: {
		open: true,
		disableHostCheck: false,
		host: "192.168.1.5",
		port: 8001,
		overlay: {
			errors: true
		},
		proxy: { // 配置代理
			'/index.php': {
				target: 'https://xqb.sce.sjtu.edu.cn/index.php', //源地址
				changeOrigin: true, //改变源
				ws: true, //是否代理websockets
				pathRewrite: {
					'^/index.php': ''
				}
			}
		},
	},

	assetsDir: 'static',
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require("postcss-px2rem")({
						remUnit: 75
					})
				]
			},
			scss: {
				prependData: `@import "~@/assets/sass/core.scss";`
			}
		}
	},

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				// console.log(config.plugin('preload'))
				args[0].title = '校园卡充值'
				return args;
			})
	},

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: []
		}
	},

	configureWebpack: config => {
		const enable = process.env.NODE_ENV !== 'production';
		const vconsolePlugin = [
			new vConsolePlugin({
				filter: [], // 需要过滤的入口文件
				enable: enable // 是否可用
			})
		]
		config.plugins = [...config.plugins, ...vconsolePlugin];
	}
};
