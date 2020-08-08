import Vue from 'vue';

function config() {
	const vconfig = Vue.config;
	vconfig.productionTip = false;
	/* 组件的渲染和观察期间未捕获错误的处理函数 */
	vconfig.errorHandler = function(err,vm,info){
		console.error(`错误组件：${err}----${vm}`);
		console.error(`错误信息：${info}`);
	};
	/* 为 Vue 的运行时警告赋予一个自定义处理函数，只会在开发者环境下生效 */
	vconfig.warnHandler = function(err,vm,info){
		console.warn(`警告组件：${err}----${vm}`);
		console.warn(`警告信息：${info}`);
	};
	/* 自定义合并策略 */
	vconfig.optionMergeStrategies.hello = function(from, self) {
		// 返回合并后的值
		console.log(from,self)
		return self?self : from
	}
}
export default config;
