<template>
	<div class="tubiao">
		<div class="file-item" v-for="item in 20">
			<span class="icon iconfont icon-wenjian1"></span>
			<div class="file-name">音乐</div>
		</div>
		<div class="file-item" v-for="item in 20">
			<span class="icon iconfont icon-shipin-tianchong"></span>
			<div class="file-name">少林足球.mp4</div>
		</div>
		<div class="file-item" v-for="item in 20">
			<span class="icon iconfont icon-yinlewenjian"></span>
			<div class="file-name">偶尔还是会想起你 - 牛奶@咖啡.mp3</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.tubiao {
		width: 100%;
		height:calc(100% - 35px);
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		overflow: auto;
		.file-item {
			width: 100px;
			height: 100px;
			display: flex;
			padding: 5px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-right: 10px;
			cursor: pointer;
			border-radius: 3px;

			.icon {
				font-size: 4rem;
			}

			.icon-yinlewenjian {
				color: #ff7979;
			}
 
			.icon-wenjian1 {
				color: rgba(241, 196, 15, 1.0);
			}
			.icon-shipin-tianchong{
				color: #74b9ff;
			}

			.file-name {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				width: 100%;
				text-align: center;
				font-size: 0.75rem;
			}
		}
		.file-item:hover {
			background-color:rgba(52, 152, 219, 0.1) ;
		}
	}
</style>
