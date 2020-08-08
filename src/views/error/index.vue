<template>
	<!-- 404界面 -->
	<div class="error-box flex-default">
		<h2>404</h2>
		<p>界面不存在</p>
		<button type="button" @click="gotoIndex">返回登录页</button>
	</div>
</template>

<script>
	import common from '@/util/common';
	export default{
		methods: {
			gotoIndex(){
				common.gotoIndex(this);
			}
		}
	}
</script>

<style lang="scss" scoped="">
.error-box {
	flex-direction: column;
	margin-top: 200px;
	h2 {
		font-size: 150px;
		color: #000;
		font-weight: 600;
		margin-bottom: 30px;
		text-shadow: 2px 10px 4px rgba(0,0,0,.2);
	}
	p{
		font-size: 40px;
		color: #666;
		margin-bottom: 30px;
	}
	button{
		height: 70px;
		font-size: 25px;
		color: #fff;
		border-radius: 14px;
		background-color: #1c83fc;
		padding: 0 50px;
	}
}
</style>
