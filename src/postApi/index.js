import Axios from 'axios';
import common from '@/util/common';

// Axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export default {
	_callBak(content, response) {
		console.log('response', response);
		common.loading(content, 'close');
		if (response.data && response.data.code == 1) {
			return response.data;
		} else if (response.data && response.data.code == 40001) {
			common.gotoIndex(content);
			return false;
		} else {
			common.toast(response.data.msg, 'error');
			return false;
		}
	},
	_failBack(content, error) {
		common.loading(content, 'close');
		common.toast(error, 'error');
	},
	/* 登录接口 */
	async login(param) {
		console.log(process.env.NODE_ENV)
		const content = param.content;
		const url = 'index.php/api/user/getAccountByCertNo';
		common.loading(content, 'open')
		const response = await Axios({
			url: url,
			method: 'post',
			data: param.data,
		});
		return this._callBak(content, response);
	},
	/* 用户信息接口 */
	async getUserData(param) {
		const content = param.content;
		const url = 'index.php/api/user/getAccountByNo';
		common.loading(content, 'open');
		const response = await Axios({
			url: url,
			method: 'post',
		});
		return this._callBak(content, response);
	},
	/* 挂失解挂接口 */
	async lostAccount(param) {
		const content = param.content;
		const url = 'index.php/api/user/lostAccount';
		common.loading(content, 'open');
		const response = await Axios({
			url: url,
			method: 'post',
			data: param.data,
		});
		return this._callBak(content, response);
	},
	/* 挂失解挂接口 */
	async setPassword(param) {
		const content = param.content;
		const url = 'index.php/api/user/setPassword';
		common.loading(content, 'open');
		const response = await Axios({
			url: url,
			method: 'post',
			data: param.data,
		});
		return this._callBak(content, response);
	},
	/* 交易记录接口 */
	async transaction(param) {
		const content = param.content;
		const url = 'index.php/api/user/transaction';
		common.loading(content, 'open');
		const response = await Axios({
			url: url,
			method: 'post',
			data: param.data,
		});
		return this._callBak(content, response);
	},
	/* 交易记录加载更多接口 */
	async transactionMore(param) {
		const content = param.content;
		const url = 'index.php/api/user/transaction';
		const response = await Axios({
			url: url,
			method: 'post',
			data: param.data,
		});
		return this._callBak(content, response);
	},
	/* 充值接口 */
	async recharge(param) {
		const content = param.content;
		const url = 'index.php/api/user/recharge';
		common.loading(content, 'open');
		const response = await Axios({
			url: url,
			method: 'post',
			data: param.data,
		});
		return this._callBak(content, response);
	},
	/* 充值j结果页接口 */
	async rechargeResult(param) {
		const content = param.content;
		const url = 'index.php/api/user/rechargeDetail';
		common.loading(content, 'open');
		const response = await Axios({
			url: url,
			method: 'post',
			data: param.data,
		});
		return this._callBak(content, response);
	},
}
