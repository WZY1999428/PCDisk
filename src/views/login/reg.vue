<template>
	<div class="reg">
		<LHeader />
		<div class="container">
            <div class="form">
				<div class="formItem">
					<span class="icon iconfont icon-user"></span><input type="text" placeholder="请输入注册账号">
				</div>
				<div class="formItem">
					<span class="icon iconfont icon-icon_huabanfuben"></span><input type="text" placeholder="请输入密码">
				</div>
				<div class="formItem">
					<span class="icon iconfont icon-icon_huabanfuben"></span><input type="text" placeholder="请输入确认密码">
				</div>
				<div class="formItem">
					<span class="icon iconfont icon-email1"></span><input type="text" placeholder="请输入电子邮箱">
				</div>
				<div class="formItem code">
					<input type="text" placeholder="请输入电子邮箱"><span class="btn">获取验证码</span>
				</div>
				<div class="regBtn">
					<button @click="$router.replace({name:'login'})">返回</button>
					<button>注册</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import LHeader from '../../components/login/header.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			LHeader
		}
	}
</script>

<style lang="less">
	.reg{
		width: 100%;
		height: 100%;
		.container{
			height: calc(100% - 35px);
			display: flex;
			justify-content: center;
			align-items: center;
			.form{
				width:300px;
				padding: 10px;
				border-radius: 3px;
				.formItem{
					width: 100%;
					border: 2px solid rgba(52, 152, 219,0.8);
					margin: 10px 0;
					padding: 8px 0;
					border-radius: 5px;
					display: flex;
					align-items: center;
					padding-right: 5px;
					.icon{
						width: 25px;
						text-align: center;
					}
					input{
						flex: 1;
						border: none;
						background:none;
						outline: none;
					}
				}
				.code{
					padding: 0;
					padding-left: 5px;
					.btn{
						font-size: 0.75rem;
						height: 35px;
						background-color:  rgba(52, 152, 219,0.8);
						line-height: 35px;
						padding: 0 5px;
						color: white;
						cursor: pointer;
						user-select: none;
					}
					.btn:hover{
						background-color:  rgba(52, 152, 219,0.5);
					}
					.btn:active{
						background-color:  rgba(52, 152, 219,0.8);
					}
				}
			    .regBtn{
					display: flex;
					justify-content: space-between;
					width: 100%;
					button{
						border: none;
						width: 130px;
						padding: 8px 0;
						border-radius: 3px;
						font-size: 1.1rem;
						background-color: rgba(52, 152, 219,1.0);
						outline: none;
						color: white;
					}
					button:hover{
						background-color: rgba(52, 152, 219,0.8);
					}
					button:active{
						background-color: rgba(52, 152, 219,1);
					}
				}
			}
		}
	}
</style>
