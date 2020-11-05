<template>
	<div class="header">
		<div class="logo"><span class="icon iconfont icon-B"></span>个人网盘</div>
		<div class="win">
			<span class="icon iconfont icon-minimum" @click="setWin('minimize')"></span>
			<span class="icon iconfont icon-zuidahua" v-if="isMax" @click="setWin('maximize')"></span>
			<span class="icon iconfont icon-huanyuan" v-else @click="setWin('restore')"></span>
			<span class="icon iconfont icon-close" @click="setWin('close')"></span>
		</div>
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
		methods: {
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
	
	.header,{
		width: 100%;
		height: 35px;
		-webkit-app-region: drag;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10px;
		.logo{
			padding-left: 10px;
			color: rgba(52, 152, 219,1.0);
			font-size: 15px;
			display: flex;
			align-items: center;
			font-family: "华文彩云";
			.icon-B{
				font-size:35px;
				margin-right:10px;
			}
		}
		.win {
			width: 80px;
			display: flex;
			justify-content: space-between;
			-webkit-app-region: no-drag;
			.icon {
				color:#34495e;
				cursor: pointer;
				font-size: 0.8rem;
			}
		}
	}
</style>
