import PostApi from '@/postApi';
export default {
	namespaced: true,
	state: {
		
	},
	actions: {
		async setPassword({
			commit
		},param) {
			const setPassword = await PostApi.setPassword(param);
			console.log('setPassword',setPassword,commit)
			return setPassword;
		},
	},
	mutations: {
		
	},
}
