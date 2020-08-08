import Vue from "vue";
import Vuex from "vuex";
import accountRecharge from './accountRecharge';
import consumeRecords from './consumeRecords';
import login from './login';
import myInfo from './myInfo';
import password from './password';
import result from './result';
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		accountRecharge,
		consumeRecords,
		login,
		myInfo,
		password,
		result
	}
})
