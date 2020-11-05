<template>
	<div class="Completed">
		<div class="title">
			<span class="name">上传中</span>
			<div class="btns">
				<span class="icon iconfont icon-close" title="清空列表"></span>
				<span class="icon iconfont icon-shuaxin" title="刷新"></span>
			</div>
		</div>
		<div class="CompletedList">
			<div class="CompletedItem" v-for="item in 55">
				<div class="dHeader">
					<div class="file-name">千与千寻.mp4</div>
					<div class="btns">
						<span class="icon iconfont icon-close" title="删除此列表文件"></span>
						<span class="icon iconfont icon-wenjian1" title="打开文件所在位置"></span>
					</div>
				</div>
				<div class="CompletedInfo">
					<div class="progressBar">
						<div class="progress"></div>
					</div>
					<div class="info">
						1.5G/1.5G
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
	}
</script>

<style scoped="scoped" lang="less">
	.Completed {
		width: 100%;
		height: 100%;

		.btns {
			width: 100px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			cursor: pointer;

			.icon {
				margin: 0 10px;
				font-size: 1.2rem;
			}

			.icon-close {
				font-size: 0.9rem;
			}
		}

		.title {
			width: 100%;
			height: 35px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 0.5rem;
			border-bottom: 1px solid #0077AA;

			.name {
				color: #7f8c8d;
				font-size: 0.9rem;
			}
		}

		.CompletedList {
			width: 100%;
			user-select: none;
			height: calc(100% - 35px);
			overflow: auto;
			padding: 0 10px;

			.CompletedItem {
				width: 100%;
				height: 60px;
				border: 1px solid rgba(189, 195, 199, 1.0);
				margin: 10px 0;
				padding: 5px;
				border-radius: 5px;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.dHeader {
					display: flex;
					justify-content: space-between;

					.file-name {
						width: calc(100% - 100px);
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-size: 0.8rem;
					}
				}
			}

			.CompletedInfo {
				width: 100%;
				display: flex;
				align-items: center;

				.progressBar {
					flex: 1;
					height: 10px;
					border-radius: 10px;
					background-color: rgba(189, 195, 199, 0.5);
					position: relative;

					.progress {
						position: absolute;
						left: 0;
						top: 0;
						height: 100%;
						width: 100%;
						background-color: rgba(52, 152, 219, 1.0);
						border-radius: 10px;
					}
				}

				.info {
					width: 100px;
					font-size: 0.75rem;
					text-align: center;
					color: rgba(189, 195, 199, 1.0);
				}
			}
		}
	}
</style>
