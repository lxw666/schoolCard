<template>
	<!-- 我的信息 -->
	<div class="my-info">
		<common-nav name="login"></common-nav>
		<div class="common-box">
			<header class="common-head">
				我的信息
			</header>
			<section class="common-card">
				<img v-if="accountStatus == 0" src="@/assets/img/normal.png" alt="">
				<img v-else-if="accountStatus == 1" src="@/assets/img/dongjie.png" alt="">
				<img v-else-if="accountStatus == 2" src="@/assets/img/reportLoss.png" alt="">
				<img v-else src="@/assets/img/error.png" alt="">
				<section class="text">
					<div class="top">
						一卡通余额（元）
					</div>
					<div class="center">
						{{balance}}
					</div>
					<div class="bottom">
						<p>{{userName}}</p>
						<p class="line"></p>
						<p>{{certCode}}</p>
						<p class="line"></p>
						<p>{{department}}</p>
					</div>
				</section>
			</section>
			<section class="mi-notice flex-one">
				<img src="@/assets/img/laba.png" alt="">
				<p class="more-text">{{notice}}</p>
			</section>
			<section class="mi-item-box">
				<div v-if="accountStatus == 0" class="mi-item" @click="jumpPage" data-name="accountRecharge">
					<p>充值</p>
					<img src="@/assets/img/jiantou.png" alt="">
				</div>
				<div class="mi-item" data-title="挂失" data-type="loss" @click="openModal">
					<p>挂失</p>
					<img src="@/assets/img/jiantou.png" alt="">
				</div>
				<div class="mi-item" data-title="解挂" data-type="uncoupling" @click="openModal">
					<p>解挂</p>
					<img src="@/assets/img/jiantou.png" alt="">
				</div>
				<div class="mi-item" @click="jumpPage" data-name="consumeRecords">
					<p>消费记录</p>
					<img src="@/assets/img/jiantou.png" alt="">
				</div>
				<div v-if="accountStatus == 0" class="mi-item" @click="jumpPage" data-name="password">
					<p>修改密码</p>
					<img src="@/assets/img/jiantou.png" alt="">
				</div>
			</section>
		</div>
		<template v-if="isModalShow">
			<common-modal :isModalShow.sync="isModalShow" page="myInfo" :title="modalTitle" :type="modalType" @modalSure="modalSure"></common-modal>
		</template>
	</div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped="">
@import './index';
</style>
