<template>
	<div class="header">
		<div class="left">
			<div class="logo"><span class="icon iconfont icon-B"></span>个人网盘</div>
		</div>
		<div class="right">
			<div class="search">
				<span class="icon iconfont icon-search"></span>
				<input type="text" placeholder="搜索需要的文件">
			</div>
			<div class="load">
				<div class="btn shangchuan"><span class="icon iconfont icon-yunpanlogo--1"></span>上传</div>
				<div class="btn xinjian"><span class="icon iconfont icon-yunpanlogo--"></span>新建文件夹</div>
			</div>
			<div class="setUp">
				<span class="icon iconfont icon-shezhi" @click.stop="showMenu=!showMenu"></span>
				<div class="down-menu" v-show="showMenu">
					<router-link to="/exit">修改密码</router-link>
					<router-link to="/reg">退出登录</router-link>
				</div>
			</div>
			<win />
		</div>
	</div>
</template>

<script>
	import win from '../win.vue'
	export default {
		data() {
			return {
				showMenu: false
			}
		},
		components: {
			win
		},
		mounted() {
			document.addEventListener('click', () => {
				console.log(123456)
				if (this.showMenu == true) {
					this.showMenu = false;
				}
				return false;
			})
		}
	}
</script>

<style scoped="scoped" lang="less">
	.header {
		width: 100%;
		height: 40px;
		background-color: rgba(56, 153, 232, 1);
		-webkit-app-region: drag;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		user-select: none;

		.left,
		.right {
			height: 100%;
		}

		.left {
			width: 35%;

			.logo {
				display: flex;
				align-items: center;
				height: 100%;
				color: white;
				font-family: "华文彩云";

				.icon {
					font-size: 35px;
					margin-right: 10px;
				}
			}
		}

		.right {
			width: 65%;
			display: flex;
			align-items: center;
			position: relative;

			.search {
				-webkit-app-region: no-drag;
				border: 1px solid rgba(236, 240, 241, 0.5);
				padding: 5px 10px;
				border-radius: 30px;
				display: flex;
				align-items: center;
				background-color: rgba(60, 160, 233, 1);
				color: white;

				input {
					border: none;
					background: none;
					outline: none;
					color: rgba(236, 240, 241, 1.0);
				}

				input::placeholder {
					font-size: 0.7rem;
					color: rgba(236, 240, 241, 0.8);
				}

				.icon {
					width: 20px;
				}
			}

			.load {
				margin-left: 20px;
				display: flex;
				width: 190px;
				justify-content: space-between;
				-webkit-app-region: no-drag;

				.btn {
					padding: 4px 10px;
					font-size: 13px;
					color: white;
					border-radius: 0.1rem;
					cursor: pointer;

					.icon {
						margin-right: 5px;
					}
				}

				.shangchuan {
					background: rgba(250, 180, 101, 1);
				}

				.xinjian {
					background: white;
					color: rgba(44, 62, 80, 1.0);
				}

				.shangchuan:hover {
					background: rgba(250, 180, 101, 0.8);
				}

				.xinjian:hover {
					background: rgba(255, 255, 255, 0.8);
				}

				.shangchuan:active {
					background: rgba(250, 180, 101, 0.5);
				}

				.xinjian:active {
					background: rgba(255, 255, 255, 0.5);
				}
			}

			.setUp {
				margin-left: 30px;
				color: #dfe6e9;
				cursor: pointer;
				-webkit-app-region: no-drag;
				position: relative;

				.down-menu {
					position: relative;
					position: absolute;
					width: 120px;
					left: -50px;
					top: 32px;

					a {
						transform: translateZ(100px);
						display: inline-block;
						width: 100%;
						text-align: center;
						text-decoration: none;
						padding: 10px 0;
						font-size: 0.8rem;
						color: #2d3436;
						background-color: #dfe6e9;
					}

					a:hover {
						background-color: #636e72;
						color: white;
					}

					a:first-child {
						border-top-left-radius: 3px;
						border-top-right-radius: 3px;
					}

					a:last-child {
						border-bottom-left-radius: 3px;
						border-bottom-right-radius: 3px;
					}
				}

				.down-menu::before {
					position: absolute;
					z-index: 0;
					content: "";
					top: -7px;
					left: calc(50% - 9px);
					width: 16px;
					height: 8px;
					background-color: #dfe6e9;
					clip-path: polygon(50% 0%, 0% 100%, 100% 100%)
				}
			}
		}
	}
</style>
