import PostApi from '@/postApi';
export default {
	namespaced: true,
	state: {
		rechargeData: null
	},
	actions: {
		async recharge({
			commit
		},param) {
			let getRecharge = await PostApi.recharge(param);
			getRecharge = getRecharge?getRecharge.data : null;
			return commit('setRecharge', getRecharge);
		},
	},
	mutations: {
		setRecharge(state, payload) {
			state.rechargeData = payload;
		},
	},
}
