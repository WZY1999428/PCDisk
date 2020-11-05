import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
			path: "/",
			name:'login',
			component: () => import("@/views/login.vue")
		},
		{
			path: "/index",
			name: "index",
			component: () => import("@/views/index.vue"),
			redirect: "/index/all",
			children: [{
					path: "all",
					component: () => import("@/views/index/all.vue")
				},
				{
					path: "type/:id",
					component: () => import("@/views/index/type.vue")
				},
				{
					path: "download",
					component: () => import("@/views/index/download.vue")
				},
				{
					path: "upload",
					component: () => import("@/views/index/upload.vue")
				},
				{
					path: "recycle",
					component: () => import("@/views/index/recycle.vue")
				},
				{
					path: "Completed",
					component: () => import("@/views/index/Completed.vue")
				},

			]
		}, {
			path: "/reg",
			name: "reg",
			component: () => import("@/views/login/reg.vue")
		},
		{
			path: "/exit",
			name: "exit",
			component: () => import("@/views/login/exitpassword.vue")
		}
	]
})

export default router;
