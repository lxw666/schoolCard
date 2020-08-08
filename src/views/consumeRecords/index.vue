<template>
	<!-- 消费记录 -->
	<div class="consume-records">
		<div class="cr-head">
			<common-nav></common-nav>
			<div class="common-box box-head">
				<header class="common-head">消费记录</header>
				<section class="cr-box">
					<div class="crb-t">余额 {{ balance }}</div>
					<div class="crb-b flex-three">
						<div class="crbb-l flex-one">
							<button :class="[tabIndex == '1' ? 'active' : '']" type="button" data-index="1" @click="selectTab">7天</button>
							<button :class="[tabIndex == '2' ? 'active' : '']" type="button" data-index="2" @click="selectTab">一个月</button>
							<button :class="[tabIndex == '3' ? 'active' : '']" type="button" data-index="3" @click="selectTab">三个月</button>
						</div>
						<div class="crbb-r" data-type="selectDate" @click="openModal"><button>自定义日期</button></div>
					</div>
				</section>
				<section class="common-btn">
					<a  class="btn" :href="downUrl" download>下载</a>
				</section>
			</div>
		</div>
		<template v-if="transList.length > 0">
			<div class="common-box m-b-40">
				<section class="cr-item-box">
					<template v-for="(item,index) in transList">
						<div class="cr-item" :key="index">
							<div class="cr-item-t">
								<p>{{item.addr}}</p>
								<p :class="[item.TransMoney < 0?'color-red' : item.TransMoney > 0?'color-blue' : '']">{{item.TransMoney}}</p>
							</div>
							<div class="cr-item-c">
								{{item.Trans}}
							</div>
							<div class="cr-item-b">
								{{item.OccurTime}}
							</div>
						</div>
					</template>
				</section>
				<infinite-loading :distance="distance" :identifier="infiniteId" @infinite="infiniteHandler">
					<div slot="spinner" class="load-more">加载中...</div>
					//加载中的文字
					<div slot="no-more" class="load-more">没有更多数据</div>
					//加载完毕的文字
					<div slot="no-results" class="load-more">没有更多数据</div>
					//没有数据的文字
				</infinite-loading>
			</div>
		</template>
		<template v-else>
			<div class="common-box">
				<div class="empty">暂无数据</div>
			</div>	
		</template>
		<template v-if="isModalShow">
			<common-modal :isModalShow.sync="isModalShow" page="consumeRecords" :title="modalTitle" :type="modalType" @modalSure="modalSure"></common-modal>
		</template>
	</div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped="">
@import './index';
</style>
<style lang="scss">
@import '../../assets/sass/calendar';
</style>
