import commonNav from '@/components/common-nav/index.vue';
import common from '@/util/common';
import {
	createNamespacedHelpers
} from 'vuex';
const sroreName = {
	result: 'result',
};
const {
	mapActions
} = createNamespacedHelpers(sroreName.result);
export default {
	data() {
		return {
			name: '',
			money: '',
			orderNo: '',
			time: '',
			rechargeId: '',
		};
	},
	components: {
		'common-nav': commonNav,
	},
	mounted() {
		this.loadData();
	},
	watch: {
		
	},
	methods: {
		...mapActions({
			rechargeResult: 'rechargeResult'
		}),
		async loadData(){
			if(location.search){
				let getParam = decodeURIComponent(location.search).substring(1);
				getParam = getParam.split('?')[0];
				getParam = getParam.split('&');
				getParam.forEach((item)=>{
					item = item.split('=');
					this[item[0]] = item[1];
				});
				const resultData = await this.rechargeResult({
					content: this,
					data: {
						id: this.rechargeId
					}
				});
				this.name = resultData.name;
				this.money = resultData.money;
				this.orderNo = resultData.order_no;
				this.time = resultData.time;
			}
		},
		goBack(){
			common.jump(this,'myInfo');
		}
	}
};
