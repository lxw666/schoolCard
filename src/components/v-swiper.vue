<template>
	<div class="swiper-box">
		<swiper class="swiper">
			<swiper-slide>Slide 1</swiper-slide>
			<swiper-slide>Slide 2</swiper-slide>
			<swiper-slide>Slide 3</swiper-slide>
			<swiper-slide>Slide 4</swiper-slide>
			<swiper-slide>Slide 5</swiper-slide>
			<swiper-slide>Slide 6</swiper-slide>
			<swiper-slide>Slide 7</swiper-slide>
			<swiper-slide>Slide 8</swiper-slide>
			<swiper-slide>Slide 9</swiper-slide>
			<swiper-slide>Slide 10</swiper-slide>
		</swiper>
		<slot name="head"></slot>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
export default {
	name: 'custom-swiper',
	components: {
		Swiper,
		SwiperSlide
	},
	props: {
		swiperList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			swiperOption: {
				//显示分页
				pagination: {
					el: '.swiper-pagination'
				},
				//设置点击箭头
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				//自动轮播
				autoplay: {
					delay: 2000,
					//当用户滑动图片后继续自动轮播
					disableOnInteraction: false
				},
				//开启循环模式
				loop: true
			}
		};
	},
	mounted() {
		console.log(this.$el, this.$parent, this.$root,this.$attrs);
	}
};
</script>
<style lang="scss">
@import 'swiper/swiper.scss';
</style>
<style lang="scss" scoped="scoped">
.swiper {
	font-size: 40px;
	color: #fff;
}
.swiper-slide {
	@extend %flex-default;
	height: 200px;
	background-color: red;
}
</style>
