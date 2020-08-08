import PostApi from '@/postApi';
// import common from '@/util/common';
export default {
	namespaced: true,
	state: {
		
	},
	actions: {
		async login({commit},param) {
			const login = await PostApi.login(param);
			console.log(commit);
			return login;
		},
	},
	mutations: {
		
	},
}
