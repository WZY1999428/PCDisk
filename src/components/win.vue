<template>
	<div class="win">
		<span class="icon iconfont icon-minimum" @click="setWin('minimize')"></span>
		<span class="icon iconfont icon-zuidahua" v-if="isMax" @click="setWin('maximize')"></span>
		<span class="icon iconfont icon-huanyuan" v-else @click="setWin('restore')"></span>
		<span class="icon iconfont icon-close" @click="setWin('close')"></span>
	</div>
</template>

<script>
	const remote = window.require('electron').remote;
	const win = remote.getCurrentWindow();
	export default {
		data() {
			return {
               isMax: true
			}
		},
		methods:{
			setWin(type) {
				console.log(type)
				switch (type) {
					case 'close':
						win.close();
						break;
					case 'minimize':
						win.minimize();
						break;
					case 'maximize':
						this.isMax = false;
						win.maximize();
						break;
					case 'restore':
						this.isMax = true;
						win.restore();
						break;
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.win {
		position: absolute;
		right: 0;
		width: 80px;
		display: flex;
		justify-content: space-between;
		-webkit-app-region: no-drag;
	
		.icon {
			color: #ffffff;
			cursor: pointer;
			padding:3px;
			font-size: 0.8rem;
		}
	}
</style>
