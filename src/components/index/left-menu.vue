<template>
	<div class="left-menu">
		<div class="photos">
			<div class="box">
				<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2274310026,2001298271&fm=11&gp=0.jpg" alt="">
			</div>
			<p>用户123</p>
		</div>
		<div class="file-type">
			<ul>
				<router-link to="/index/all" tag="li"><span class="icon iconfont icon-quanbu"></span>全部文件</router-link>
				<router-link to="/index/type/pic" tag="li"><span class="icon iconfont icon-tupian"></span>图片</router-link>
				<router-link to="/index/type/document" tag="li"><span class="icon iconfont icon-wendang"></span>文档</router-link>
				<router-link to="/index/type/video" tag="li"><span class="icon iconfont icon-01"></span>视频</router-link>
				<router-link to="/index/type/audio" tag="li"><span class="icon iconfont icon-music"></span>音乐</router-link>
				<router-link to="/index/type/other" tag="li"><span class="icon iconfont icon-qita"></span>其他</router-link>
			</ul>
		</div>
		<div class="uploadBox">
			<ul>
				
				<router-link to="/index/recycle" tag="li"><span class="icon iconfont icon-huishouzhan"></span>回收站 <span class="number">55</span></router-link>
				<router-link to="/index/download" tag="li" class="yunpanlogo-_huabanfuben"><span class="icon iconfont icon-yunpanlogo-_huabanfuben"></span>正在下载<span
					 class="number">5/12</span></router-link>
				<router-link to="/index/upload" tag="li" class="yunpanlogo--1"><span class="icon iconfont icon-yunpanlogo--1"></span>正在上传<span class="number">5/50</span></router-link>
				<router-link to="/index/Completed" tag="li" class="yiwancheng"><span class="icon iconfont icon-yiwancheng"></span>已完成 <span class="number">55</span></router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped" lang="less">
	@Fsize: 13px;

	.left-menu {
		width: 240px;
		height: 100%;
		background-color: rgba(245, 249, 252, 1);
		position: relative;
        border-right: 1px solid rgba(41, 128, 185,0.5);
		.photos {
			width: 100%;
			height: 150px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.box {
				width: 70px;
				height: 70px;
				overflow: hidden;
				border-radius: 50%;
				border: 1px solid rgba(52, 152, 219, 1.0);
				display: flex;
				justify-content: center;
				margin-bottom: 10px;

				img {
					width: 100px;
					height: 100px;
				}
			}

			p {
				width: 100px;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				text-align: center;
			}
		}

		#liflex() {
			li {
				flex: 1;
				padding-left: 30px;
				display: flex;
				align-items: center;
				font-size: @Fsize;
				cursor: pointer;
				user-select: none;
				.iconfont {
					margin-right: 6px;
					font-size: 1.3rem;
				}
			}
		}

		.file-type {
			width: 100%;
			height: 250px;
			ul {
				#liflex();
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.router-link-active{
					background-color: rgba(227, 241, 252, 1);
					color: rgb(87, 147, 243);
				}
			}
		}

		.uploadBox {
			width: 100%;
			height: 180px;
			position: absolute;
			bottom: 0;

			ul {
				height: 100%;
				display: flex;
				flex-direction: column;

				#liflex();

				li {
					background-color: rgba(232, 239, 245, 1);
					margin-top: 1px;
				}

				.yunpanlogo-_huabanfuben {
					color: rgba(52, 152, 219, 1.0);
				}

				.yunpanlogo--1 {
					color: rgba(241, 196, 15, 1.0);
				}

				.yiwancheng {
					color: rgba(39, 174, 96, 1.0);
				}

				.number {
					position: absolute;
					right: 10px;
					font-size: 11px;
					color: rgba(149, 165, 166, 1.0);
				}
			}
		}
	}
</style>
