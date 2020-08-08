import PostApi from '@/postApi';
export default {
	namespaced: true,
	state: {
		userData: null,
	},
	actions: {
		async getUserData({
			commit
		},param) {
			let userData = await PostApi.getUserData(param);
			userData = userData?userData.data : null;
			console.log('userData',userData);
			return commit('setUserData', userData);
		},
		async lostAccount({
			commit
		},param) {
			let userData = await PostApi.lostAccount(param);
			// userData = userData?userData.data : null;
			console.log('userData',userData,commit);
			return userData;
		},
	},
	mutations: {
		setUserData(state, payload) {
			state.userData = payload;
		},
	},
}
