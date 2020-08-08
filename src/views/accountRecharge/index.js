import commonNav from '@/components/common-nav/index.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import common from '@/util/common';
import {
	createNamespacedHelpers
} from 'vuex';
const sroreName = {
	accountRecharge: 'accountRecharge',
};
const {
	mapState,
	mapActions,
} = createNamespacedHelpers(sroreName.accountRecharge);
export default {
	data() {
		return {
			swiperOption: {
				//自动轮播
				autoplay: {
					delay: 5000,
					//当用户滑动图片后继续自动轮播
					disableOnInteraction: false
				},
				//开启循环模式
				loop: true
			},
			money: '50',//充值金额
			tabIndex: 0,//默认选tab
		};
	},
	components: {
		'common-nav': commonNav,
		Swiper,
		SwiperSlide
	},
	watch: {
		
	},
	computed: {
		...mapState({
			rechargeData(state){
				return state.rechargeData
			}
		})
	},
	methods: {
		...mapActions({
			recharge: 'recharge'
		}),
		selectMoney(e){
			let dataset = e.currentTarget.dataset,
				getIndex = dataset.index,
				getValue = dataset.value;
			this.money = getValue;
			this.tabIndex = getIndex;
		},
		async submit(e){
			console.log(e);
			const param = {
				content: this,
				data: {
					money: this.money
				}
			};
			await this.recharge(param);
			console.log('rechargeData over');
			this.$nextTick(()=>{
				console.log(this.$refs.rechargeForm);
				this.$refs.rechargeForm.submit();
			})
		}
	}
};
