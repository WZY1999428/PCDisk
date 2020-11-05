<template>
	<div class="all">
		<crumbs @setlayout="setlayout"/>
		<xianqing v-if="layout" />
		<tubiao v-else />
	</div>
</template>

<script>
	import crumbs from '../../components/index/crumbs.vue'
	import xianqing from './all/xiangqing.vue';
	import tubiao from './all/tubiao.vue'
	export default {
		data() {
			return {
				layout: false
			}
		},
		methods: {
            setlayout(bool){
				this.layout=bool
			}
		},
		components: {
			crumbs,
			xianqing,
			tubiao
		}
	}
</script>

<style lang="less">
	.all{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
</style>
