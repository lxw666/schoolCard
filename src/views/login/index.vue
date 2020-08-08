<template>
	<!-- 登录 -->
	<div class="login">
		<div class="login-container flex-default" ref="loginContainer">
			<div class="login-box flex-default">
				<img src="@/assets/img/headImg.png" alt="">
				<div class="login-box-form flex-default">
					<input type="text" placeholder="请输入工号" v-model="userName">
					<input type="text" placeholder="请输入身份证号" v-model="cardId">
					<button type="button" @click="submit" data-name="myInfo">登 录</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped="">
@import './index';
</style>

