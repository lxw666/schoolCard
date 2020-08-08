import {
	createNamespacedHelpers
} from 'vuex';
import common from '@/util/common';
const sroreName = {
	login: 'login',
};
const {
	mapState,
	mapActions,
} = createNamespacedHelpers(sroreName.login);
export default {
	data() {
		return {
			loginData: null, //登录cookie数据
			userName: '', //工号
			cardId: '', //身份证
			clientHeight: '', //可视区域高度
		};
	},
	async mounted() {
		this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		this.setInfo();
		this.screenResize();
	},
	components: {

	},
	watch: {

	},
	computed: {
		...mapState({
			userInfo(state) {
				return state.userInfo
			}
		})
	},
	methods: {
		...mapActions({
			login: 'login',
		}),
		async submit(e) {
			const param = {
				content: this,
				data: {
					CertNo: this.userName,
					PersonId: this.cardId,
				}
			};
			const currentTarget = e.currentTarget;
			const loginData = await this.login(param);
			if (loginData && loginData.code == 1) {
				console.log(loginData, currentTarget);
				if (!this.loginData) {
					const d = new Date();
					d.setTime(d.getTime() + (90 * 24 * 60 * 60 * 1000));
					common.Cookie().setAll('loginData', {
						SessionId: loginData.data.SessionId,
						userName: this.userName,
						cardId: this.cardId
					}, d);
				}
				common.jumpPage(this, currentTarget);
			}
		},
		setInfo() {
			this.loginData = common.Cookie().getAll('loginData');
			console.log('loginData', this.loginData);
			if (this.loginData) {
				this.userName = this.loginData.userName;
				this.cardId = this.loginData.cardId;
			}
		},
		/* 监控可是区域高度变化 */
		screenResize() {
			window.onresize = () => {
				const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
				const marginTop = clientHeight - this.clientHeight;
				this.$refs.loginContainer.style.marginTop = (2*marginTop)/3 + 'px';
			}
		},
	}
};
