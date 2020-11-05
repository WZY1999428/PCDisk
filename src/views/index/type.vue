<template>
	<div class="type">
		<div class="type-item" v-for="item in 150">
			<span class="icon iconfont" :class="type"></span>
			<div class="file-name">{{id}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: "",
				type: ""
			}
		},
		mounted() {
			this.id = this.$route.params.id
			this.getType(this.id)
		},
		beforeRouteUpdate(to, from, next) {
			this.id = to.params.id;
			this.getType(this.id)
			next();
		},
		methods: {
			getType(id) {
				switch (id) {
					case 'pic':
						this.type = "icon-tupian";
						break;
					case 'document':
						this.type = "icon-wendang";
						break;
					case 'video':
						this.type = "icon-shipin-tianchong";
						break;
					case 'audio':
						this.type = "icon-yinlewenjian";
						break;
					case 'other':
						this.type = "icon-f-zip";
						break;
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.type {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-content: flex-start;
		padding: 0 10px;
        overflow: auto;
		.type-item {
			margin-right: 7px;
			margin-top: 10px;
			width: 100px;
			height: 100px;
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
			border-radius: 5px;
			.icon {
				font-size: 4.5rem;
			}
			.file-name{
				width: 100%;
				text-align: center;
				font-size: 0.75rem;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				color: rgba(119, 140, 163,1.0);
			}
			.icon-tupian{
				color: rgba(116, 185, 255,1.0);
			}
			.icon-wendang{
				color: rgba(127, 140, 141,1.0);
			}
			.icon-shipin-tianchong{
				color: rgba(252, 92, 101,1.0);
			}
			.icon-yinlewenjian{
				color: rgba(252, 92, 101,1.0);
			}
			.icon-f-zip{
				color: rgba(56, 103, 214,1.0);
			}
			
		}
		.type-item:hover {
			background-color: rgba(52, 152, 219,0.1);
		}
	}
</style>
