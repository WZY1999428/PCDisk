<template>
	<div class="loginBox">
		<LHeader />
		<div class="container">
			<div class="login">
				<h2>账号登录</h2>
				<div class="text"><span class="icon iconfont icon-user"></span><input type="text" @focus="active(0,'a')" @blur="active(0,'r')"></div>
				<div class="text"><span class="icon iconfont icon-icon_huabanfuben"></span><input type="password" @focus="active(1,'a')"
					 @blur="active(1,'r')"></div>
				<div class="cheBox">
					<label><input type="checkbox">自动登录</label>
				</div>
				<div class="btn" @click="$router.replace({name:'index'})">登录</div>
				<div class="reg">
					<router-link to="/reg" tag="span">注册</router-link>
					<router-link to="/exit" tag="span">忘记密码?</router-link>
				</div>
			</div>
		</div>
		<div class="footer">
			<a href="javascript:;">11111111111111111111111111111111</a>
		</div>
	</div>
</template>

<script>
	import LHeader from '../components/login/header.vue'
	export default {
		data() {
			return {}
		},
		methods: {
			active(index, t) {
				const text = document.getElementsByClassName('text')[index];
				const icon = document.getElementsByClassName('icon')[index];
				console.log(icon)
				if (t == 'a') {
					text.style.borderColor = "rgba(52, 152, 219,1.0)";
				} else {
					text.style.borderColor = "rgba(149, 165, 166,1.0)";
				}
			},
		},
		components: {
			LHeader
		}
	}
</script>

<style scoped="scoped" lang="less">
	.loginBox {
		width: 100%;
		height: 100%;
		user-select: none;

		.container {
			width: 100%;
			height: calc(100% - 90px);
			background: url(../assets/loginBg.jpg);
			background-size: 100% 100%;
			position: relative;

			.login {
				background-color: white;
				position: absolute;
				top: 10%;
				right: 10%;
				width: 300px;
				height: 320px;
				padding: 20px;
				border-radius: 3px;
				z-index: 2;

				h2 {
					text-align: center;
					margin-bottom: 20px;
					font-weight: 300;
				}

				.text {
					width: 100%;
					display: flex;
					align-items: center;
					border: 2px solid rgba(149, 165, 166,1.0);
					margin: 20px 0;
					border-radius: 3px;
					overflow: hidden;
					input {
						padding: 8px 0;
						flex: 1;
						border: none;
						outline: none;
					}

					.icon {
						width: 25px;
						text-align: center;
					}
				}

				.cheBox {
					margin: 10px 0;
					font-size: 15px;

					label {
						cursor: pointer;
					}

					input {
						margin-right: 5px;
					}
				}

				.btn {
					width: 100%;
					padding: 8px 0;
					background-color: #0984e3;
					text-align: center;
					color: #ecf0f1;
					cursor: pointer;
				}

				.reg {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 30px;
					background-color: rgba(245, 249, 252, 1);
					display: flex;
					justify-content: space-between;
					align-items: center;

					span {
						flex: 1;
						text-align: center;
						font-size: 0.8rem;
						cursor: pointer;
					}

					span:first-child {
						color: rgba(52, 152, 219, 1.0);
					}

					span:first-child:active {
						color: rgba(41, 128, 185, 0.5);
					}

					span:active {
						color: rgba(189, 195, 199, 1.0);
					}
				}
			}
		}

		.container::after {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(255, 255, 255, 0.2);
			filter: blur(30px);
		}

		.footer {
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;

			a {
				text-decoration: none;
				color: #2c3e50;
				;
			}
		}
	}
</style>
