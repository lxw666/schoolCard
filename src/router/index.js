import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/login/index.vue"; //登录
import MyInfo from "@/views/myInfo/index.vue"; //我的信息
import ConsumeRecords from "@/views/consumeRecords/index.vue"; //消费记录
import AccountRecharge from "@/views/accountRecharge/index.vue"; //账户充值
import Result from "@/views/result/index.vue"; //账户充值结果页
import Password from "@/views/password/index.vue"; //修改密码
import Error from "@/views/error/index.vue"; //404界面

Vue.use(VueRouter);

const routes = [{
		path: "/",
		name: "login",
		component: Login
	}, {
		path: "/myInfo",
		name: "myInfo",
		component: MyInfo
	}, {
		path: "/consumeRecords",
		name: "consumeRecords",
		component: ConsumeRecords
	}, {
		path: "/accountRecharge",
		name: "accountRecharge",
		component: AccountRecharge
	}, {
		path: "/result",
		name: "result",
		component: Result
	},{
		path: "/password",
		name: "password",
		component: Password
	},{
		path: '*',
		name: '404',
		component: Error
	}

];

const router = new VueRouter({
	mode: "history",
	base: '/',
	routes
});

export default router;
