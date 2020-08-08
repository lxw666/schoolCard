import common from '@/util/common';
export default {
	name: 'common-modal',
	props: {
		title: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: '',
		},
		placeholderText: {
			type: String,
			default: '请输入卡片密码',
		},
		inputType:{
			type: String,
			default: 'password',
		},
		isModalShow: {
			type: Boolean,
		},
		page:{
			type: String,
			default: '',
		},
	},
	data(){
		return {
			isShowCalendar: false, // 是否显示日期弹窗
			defaultDatetime: new Date(),//默认日期
			startTime: '',//开始日期
			endTime: '',//结束日期
			dateType: 'startTime',//日期类型
			inputValue: '',//输入框value
		}
	},
	methods: {
		showCalendarDialog(e) { // 显示日历
			let dataset = e.currentTarget.dataset;
			this.isShowCalendar = true;
			this.dateType = dataset.type;
		},
		pickConfirm(date) {
			console.log(date)
			this[this.dateType] = date;
		},
		closeModal(e){
			const dataset = e.target.dataset;
			if(dataset && dataset.type == 'closeModal'){
				this.$emit('update:isModalShow',false)
			}
		},
		sure(){
			this[this.type+'Sure']();
		},
		lossSure(){
			console.log('lossSure');
			this.$emit('modalSure');
		},
		uncouplingSure(){
			console.log('uncouplingSure');
			this.$emit('modalSure',{password: this.inputValue});
		},
		selectDateSure(){
			console.log('selectDateSure');
			if(this.startTime && this.endTime){
				let startTime = this.startTime?this.startTime.replace(/-/g,'') : '',
					endTime = this.endTime?this.endTime.replace(/-/g,'') : '';
				if((startTime * 1 > endTime * 1)){
					common.toast('开始日期不能大于结束日期','error');
					return false;
				}
				this.$emit('modalSure',{
					startTime: this.startTime,
					endTime: this.endTime,
				});
			}else{
				common.toast('开始日期和结束日期不能为空','error');
			}
		}
	}
}