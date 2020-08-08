import common from '@/util/common';
export default {
	name: 'common-nav',
	props: {
		name: {
			type: String,
		}
	},
	data(){
		return {
			
		}
	},
	methods: {
		goBack(){
			console.log()
			if(this.name){
				common.jump(this,this.name);
			}else{
				common.goBack(this);
			}
		}
	}
}