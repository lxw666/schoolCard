import commonNav from '@/components/common-nav/index.vue';
import commonModal from '@/components/common-modal/index.vue';
import common from '@/util/common';
import {
	createNamespacedHelpers
} from 'vuex';
const sroreName = {
	myInfo: 'myInfo',
};
const {
	mapState,
	mapActions,
} = createNamespacedHelpers(sroreName.myInfo);
export default {
	data() {
		return {
			modalType: '',
			modalTitle: '',
			isModalShow: false,
		};
	},
	async mounted() {
		// common.loading(this,'open');
		await this.getUserData({content: this});
		// common.loading(this,'close');
	},
	components: {
		'common-nav': commonNav,
		'common-modal': commonModal,
	},
	watch: {
		
	},
	computed:{
		...mapState({
			userData(state){
				return state.userData
			} 
		}),
		balance(){
			/* 余额 */
			const userData = this.userData;
			if(userData && userData.Balance){
				return userData.Balance/10000;
			}
		},
		userName(){
			/* 用户名 */
			const userData = this.userData;
			if(userData && userData.Name){
				return userData.Name;
			}
		},
		certCode(){
			/* 手机号 */
			const userData = this.userData;
			if(userData && userData.CertCode){
				if(userData.CertCode.indexOf('\u0000')){
					return userData.CertCode.replace('\u0000','&').split('&')[0];
				}else{
					return userData.CertCode;
				}
			}
		},
		department(){
			/* 部门 */
			const userData = this.userData;
			if(userData && userData.department){
				return userData.department;
			}
		},
		notice(){
			/* 通告 */
			const userData = this.userData;
			if(userData && userData.notice){
				return userData.notice;
			}
		},
		accountStatus(){
			/* 账户状态 */
			const userData = this.userData;
			if(userData && (userData.status || userData.status == 0)){
				return userData.status;
			}
		},
	},
	methods: {
		...mapActions({
			getUserData: 'getUserData',
			lostAccount: 'lostAccount',
		}),
		openModal(e){
			let dataset = e.currentTarget.dataset,
				title = dataset.title,
				type = dataset.type;
			this.modalType = type;
			this.modalTitle = title;
			this.isModalShow = true;
		},
		jumpPage(e){
			common.jumpPage(this,e.currentTarget);
		},
		async modalSure(data){
			const param = {
				content: this,
				data: {
					AccountNo: this.userData.AccountNo,
					PassWord: data?data.password : '',
					Operation: this.modalType == 'loss'?1 : 2,
				}
			};
			console.log(param);
			this.isModalShow = false;
			const lossStatus = await this.lostAccount(param);
			if(lossStatus){
				this.getUserData({content: this});
			}
		}
	},
};
