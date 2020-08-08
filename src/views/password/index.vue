<template>
	<!-- 修改密码 -->
	<div class="password">
		<common-nav></common-nav>
		<div class="common-box">
			<header class="common-head">
				修改密码
			</header>
			<section class="password-box">
				<div class="form-input flex-one">
					<label for="">原密码</label>
					<input type="text" placeholder="请输入原密码" v-model="oldPassword">
				</div>
				<div class="form-input flex-one">
					<label for="">新密码</label>
					<input type="password" placeholder="请输入新密码" v-model="newPassword">
				</div>
				<div class="form-input flex-one">
					<label for="">确认密码</label>
					<input type="password" placeholder="请确认新密码" v-model="sureNewPassword">
				</div>
			</section>
		</div>
		<section class="common-btn">
			<button type="button" @click="submit" data-name="myInfo">确认</button>
		</section>
	</div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped="">
@import './index';
</style>
