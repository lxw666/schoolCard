<template>
	<!-- 账户充值结果页 -->
	<div class="result">
		<common-nav name="myInfo"></common-nav>
		<div class="common-box">
			<div class="result-t flex-default">
				<img src="@/assets/img/jieguo.png" alt="">
				<h4>您已充值（元）</h4>
				<h2>{{money}}</h2>
			</div>
			<section class="common-btn">
				<button type="button" @click="goBack">返回</button>
			</section>
			<div class="result-b flex-default">
				<div class="result-b-box">
					<p>订单号：{{orderNo}}</p>
					<p>账户信息：{{name}}</p>
					<p>支付时间：{{time}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped="">
@import './index';
</style>
