import PostApi from '@/postApi';
export default {
	namespaced: true,
	state: {
	},
	actions: {
		async rechargeResult({
			commit
		},param) {
			let rechargeResult = await PostApi.rechargeResult(param);
			rechargeResult = rechargeResult?rechargeResult.data : null;
			console.log(commit);
			return rechargeResult;
		},
	},
	mutations: {
	},
}
