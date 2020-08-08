<template>
	<div class="commmon-modal flex-default" data-type="closeModal" @click="closeModal">
		<template v-if="page == 'myInfo'">
			<div class="c-modal" @click.stop>
				<header class="cm-head" :class="[type == 'uncoupling'?'':'m-b-50']">您确定要{{title}}卡片吗？</header>
				<template v-if="type == 'uncoupling'">
					<section class="cm-input flex-default">
						<input :type="inputType" :placeholder="placeholderText" v-model="inputValue">
					</section>
				</template>
				<section class="cm-btn flex-one">
					<button type="button" data-type="closeModal" @click="closeModal">取消</button>
					<button type="button" @click.stop="sure">确定</button>
				</section>
			</div>
		</template>
		<template v-else-if="page == 'consumeRecords'">
			<div class="c-modal-big" @click.stop>
				<section class="cm-input flex-three">
					<label for="">开始日期</label>
					<input type="text" readonly="readonly" placeholder="选择开始日期" data-type="startTime" v-model="startTime" @click="showCalendarDialog">
				</section>
				<section class="cm-input flex-three">
					<label for="">结束日期</label>
					<input type="text" readonly="readonly" placeholder="选择结束日期" data-type="endTime" v-model="endTime" @click="showCalendarDialog">
				</section>
				<section class="cm-btn flex-one">
					<button type="button" @click.stop="sure">确定</button>
				</section>
			</div>
			<div class="div">
				<vue-hash-calendar
					ref="picker"
					model="dialog"
					pickerType="date"
					format="YY-MM-DD"
					:visible.sync="isShowCalendar"
					:default-datetime="defaultDatetime"
					@confirm="pickConfirm"
				>
					<template #today>
						回到今天吧
					</template>
				</vue-hash-calendar>
			</div>
		</template>
	</div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped="">
@import './index';
</style>
<style lang="scss">
@import '@/assets/sass/calendar';
</style>