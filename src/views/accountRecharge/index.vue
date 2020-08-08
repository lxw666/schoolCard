<template>
	<!-- 账户充值 -->
	<div class="account-recharge">
		<common-nav></common-nav>
		<div class="common-box">
			<header class="common-head">
				账户充值
			</header>
			<section class="ar-banner">
				<swiper :options="swiperOption" class="swiper">
					<swiper-slide>
						<img src="@/assets/img/banner.png" alt="">
					</swiper-slide>
				</swiper>
			</section>
			<section class="ar-tab">
				<header>
					充值金额
				</header>
				<div class="tab-item flex-one">
					<button type="button" :class="[tabIndex == 0?'active':'']" data-index="0" data-value="50" @click="selectMoney">50元</button>
					<button type="button" :class="[tabIndex == 1?'active':'']" data-index="1" data-value="100" @click="selectMoney">100元</button>
					<button type="button" :class="[tabIndex == 2?'active':'']" data-index="2" data-value="200" @click="selectMoney">200元</button>
					<button type="button" :class="[tabIndex == 3?'active':'']" data-index="3" data-value="500" @click="selectMoney">500元</button>
					<button type="button" :class="[tabIndex == 4?'active':'']" data-index="4" data-value="1000" @click="selectMoney">1000元</button>
				</div>
			</section>
			<section class="common-btn">
				<button type="button" @click="submit" data-name="result">确认充值 ￥{{money}}元</button>
			</section>
		</div>
		<template v-if="rechargeData">
			<form :action="rechargeData.url" method="post" ref="rechargeForm">
				<input type="hidden" name="sign" :value="rechargeData.sign">
				<input type="hidden" name="sysid" :value="rechargeData.sysid">
				<input type="hidden" name="subsysid" :value="rechargeData.subsysid">
				<input type="hidden" name="data" :value="rechargeData.data">
			</form>
		</template>
	</div>
</template>
<script src="./index.js"></script>
<style lang="scss">
@import 'swiper/swiper.scss';
</style>
<style lang="scss" scoped="">
@import './index';
</style>
