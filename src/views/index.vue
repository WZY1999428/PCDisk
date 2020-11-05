<template>
	<div class="index">
		<iHeader />
		<div class="views">
			<left-menu />
			<div class="container">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import iHeader from '../components/index/header.vue'
	import leftMenu from '../components/index/left-menu.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			iHeader,
			leftMenu
		}
	}
</script>

<style lang="less">
	.index{
		width: 100%;
		height: 100%;
		.views{
			width: 100%;
			height: calc(100% - 40px);
			display: flex;
			.container{
				flex: 1;
				height: 100%;
			}
		}
	}
</style>
