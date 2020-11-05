<template>
	<div class="crumbs">
		<ul class="crumbsBox">
			<li>{{name}}</li>
		</ul>
		<div class="layout">
			<span class="icon iconfont icon-xiangqing" title="详情" @click="$emit('setlayout',true)"></span>
			<span class="icon iconfont icon-leimupinleifenleileibie" title="图标" @click="$emit('setlayout',false)"></span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props:{
			name:{
				default:'全部文件',
				type:String
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.crumbs {
		width: 100%;
		height: 35px;
		background-color: rgb(255, 255, 255);
		border-bottom: 1px solid rgba(41, 128, 185, 0.5);
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;
		user-select: none;

		.crumbsBox {
			max-width: calc(100% - 80px);

			li {
				font-size: 12px;
				color: rgba(52, 152, 219, 1.0);
				position: relative;
				list-style: none;
				cursor: pointer;
				display: flex;
				justify-content: flex-start;
			}

			li::after {
				position: absolute;
				right: -8px;
				top: 4px;
				content: "";
				width: 8px;
				height: 8px;
				border: 1px solid;
				border-color: transparent rgba(52, 152, 219, 0.5) rgba(52, 152, 219, 0.5) transparent;
				transform: rotateZ(-45deg);
			}
		}

		.layout {
			width: 80px;
			display: flex;
			justify-content: space-around;

			.icon {
				font-size: 1.3rem;
				cursor: pointer;
				color: rgba(52, 152, 219, 1.0);
			}
		}
	}
</style>
