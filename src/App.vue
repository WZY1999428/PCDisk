<template>
	<div id="app" v-cloak>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {

			}
		},
		
	}
</script>

<style>
	@import url("./assets/icon/iconfont.css");

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "微软雅黑";
	}

	#app {
		width: 100vw;
		height: 100vh;
	}
	@font-face {
		font-family:"华文彩云";
		src: url("./assets/font/华文彩云.ttf");
	}
</style>
