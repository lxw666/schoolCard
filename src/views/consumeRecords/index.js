import commonNav from '@/components/common-nav/index.vue';
import commonModal from '@/components/common-modal/index.vue';
import InfiniteLoading from 'vue-infinite-loading';
import {
	createNamespacedHelpers
} from 'vuex';
const sroreName = {
	consumeRecords: 'consumeRecords',
};
const {
	mapState,
	mapActions,
} = createNamespacedHelpers(sroreName.consumeRecords);
export default {
	data() {
		return {
			modalType: '',
			modalTitle: '',
			isModalShow: false,
			defaultDatetime: new Date(),
			tabIndex: '1',
			startTime: '', //默认开始日期为空
			endTime: '', //默认结束日期为空
			type: 1, //默认1本月，2前三个月，3近半年
			transList: [],//消费记录数据列表
			page: 1, //默认第一页
			pageSize: 50, //默认展示50条
			distance: 100, //临界值，距离底部多少距离时触发函数  infiniteHandler
			infiniteId: +new Date(),
		};
	},
	async mounted() {
		// common.loading(this,'open');
		await this.initData();
		// common.loading(this,'close');
	},
	components: {
		'common-nav': commonNav,
		'common-modal': commonModal,
		'infinite-loading': InfiniteLoading,
	},
	watch: {
		
	},
	computed: {
		...mapState({
			transaction(state) {
				const transaction = state.transaction;
				if (transaction && transaction.TransList) {
					this.transList = transaction.TransList;
				}else{
					this.transList = [];
				}
				return state.transaction
			}
		}),
		balance() {
			/* 余额 */
			const transaction = this.transaction;
			if (transaction && transaction.Balance) {
				return transaction.Balance;
			}
		},
		downUrl(){
			/* 下载地址 */
			const transaction = this.transaction;
			if (transaction && transaction.downUrl) {
				return transaction.downUrl;
			}
		}
	},
	methods: {
		...mapActions({
			transactionFun: 'transactionFun',
			transactionMoreFun: 'transactionMoreFun',
		}),
		async initData(type) {
			const param = {
				content: this,
				data: {
					StartTime: this.startTime,
					EndTime: this.endTime,
					Type: this.type,
					Page: this.page,
					PageSize: this.pageSize,
				}
			};
			console.log('param', param);
			if(type == 'loadMore'){
				return await this.transactionMoreFun(param);
			}else{
				await this.transactionFun(param);
			}
		},
		async selectTab(e) {
			let dataset = e.currentTarget.dataset,
				getIndex = dataset.index;
			if (this.tabIndex != getIndex) {
				this.tabIndex = getIndex;
				this.type = getIndex;
				this.startTime = '';
				this.endTime = '';
				this.page = 1;
				this.transList = [];
				this.infiniteId += 1;
				await this.initData();
				console.log('数据请求完毕');
				this.setScrollTop();
			}
		},
		openModal(e) {
			let dataset = e.currentTarget.dataset,
				title = dataset.title,
				type = dataset.type;
			this.modalType = type;
			this.modalTitle = title;
			this.isModalShow = true;
		},
		async modalSure(data) {
			this.isModalShow = false;
			this.type = '',
				this.tabIndex = -1,
				this.startTime = data.startTime;
			this.endTime = data.endTime;
			this.page = 1;
			this.transList = [];
			this.infiniteId += 1;
			await this.initData();
			console.log('数据请求完毕');
			this.setScrollTop();
		},
		async infiniteHandler($state) {
			// const data = this.transaction;
			this.page++;
			const data = await this.initData('loadMore');
			console.log($state,data)
			if(data && data.TransList && data.TransList.length > 0){
				const moreList = data.TransList;
				this.transList = this.transList.concat(moreList);
				$state.loaded();
			}else{
				$state.complete();
			}
		},
		setScrollTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	}

};
