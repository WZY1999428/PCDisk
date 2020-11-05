<template>
	<div class="xianqing">
		<div class="thead">
			<div class="file-name">文件</div>
			<div class="other">大小</div>
			<div class="other">修改日期</div>
		</div>
		<div class="tbody">
				<div class="file-item" v-for="item in 20">
				<div class="file-name"><span class="icon iconfont icon-wenjian1"></span>音乐</div>
				<div class="other">4.3G</div>
				<div class="other">2020-03-09</div>
			</div>
		<div class="file-item" v-for="item in 20">
				<div class="file-name"><span class="icon iconfont icon-01"></span>少林足球.mp4</div>
				<div class="other">330M</div>
				<div class="other">2020-03-09</div>
			</div>
		<div class="file-item" v-for="item in 20">
				<div class="file-name"><span class="icon iconfont icon-yinlewenjian"></span>偶尔还是会想起你 - 牛奶@咖啡.mp4</div>
				<div class="other">310M</div>
				<div class="other">2020-03-09</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.xianqing {
		width: 100%;
		height: calc(100% - 35px);
		#BG() {
			width: 100%;
			display: flex;
			align-items: center;
			padding-left: 30px;
			border-bottom: 1px solid rgba(52, 152, 219, 0.3);
			user-select: none;
			.file-name {
				width: 70%;
			}
			.other {
				flex: 1;
			}
		}

		.thead {
			height: 30px;
			cursor: default;
			background-color: rgba(52, 152, 219, 0.1);
			color: rgba(52, 73, 94, 1.0);
			#BG();
			div {
				font-size: 0.8rem;
			}
		}
		.tbody {
			width: 100%;
			height: calc(100% - 30px);
			overflow: auto;
			.file-item {
				height: 35px;
				#BG();
				div{
					font-size: 0.75rem;
					color: #747d8c;
				}
				.file-name{
					display: flex;
					align-items: center;
					.icon{
						margin-right: 5px;
						font-size: 1.3rem;
						color: rgba(241, 196, 15,1.0);
					}
				}
			}
			.file-item:hover{
				background-color:rgba(52, 152, 219, 0.1) ;
			}
		}
	}
</style>
