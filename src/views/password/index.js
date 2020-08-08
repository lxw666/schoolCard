import commonNav from '@/components/common-nav/index.vue';
import common from '@/util/common';
import {
	createNamespacedHelpers
} from 'vuex';
const sroreName = {
	password: 'password',
};
const {
	mapActions,
} = createNamespacedHelpers(sroreName.password);
export default {
	data() {
		return {
			oldPassword: '',
			newPassword: '',
			sureNewPassword: '',
		};
	},
	components: {
		'common-nav': commonNav,
	},
	watch: {
		
	},
	methods: {
		...mapActions({
			setPassword: 'setPassword'
		}),
		goBack(){
			common.goBack(this);
		},
		async submit(){
			// const currentTarget = e.currentTarget;
			const param = {
				content: this,
				data: {
					OldPassWord: this.oldPassword,
					NewPassWord: this.newPassword,
					NewRePassWord: this.sureNewPassword,
				}
			};
			if(this.oldPassword && this.newPassword === this.sureNewPassword){
				const setPasswordStatus = await this.setPassword(param);
				if(setPasswordStatus){
					common.toast('修改密码成功','success',()=>{
						common.goBack(this);
					});
				}
			}else{
				if(this.oldPassword == '' || this.newPassword  == '' || this.sureNewPassword  == ''){
					common.toast('输入信息不能为空','error');
				}else if(this.newPassword !== this.sureNewPassword){
					common.toast('输入新密码不同','error');
				}
			}
		},
	}
};
