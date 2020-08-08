import PostApi from '@/postApi';
export default {
	namespaced: true,
	state: {
		transaction: null,
	},
	actions: {
		async transactionFun({
			commit
		},param) {
			console.log(param)
			let transaction = await PostApi.transaction(param);
			transaction = transaction?transaction.data : null;
			return commit('transaction', transaction);
		},
		async transactionMoreFun({
			commit,
			state
		},param) {
			console.log(param)
			let transaction = await PostApi.transactionMore(param);
			transaction = transaction?transaction.data : null;
			console.log(commit,state,transaction)
			return transaction;
		},
	},
	mutations: {
		transaction(state, payload) {
			state.transaction = payload;
		},
	},
}
