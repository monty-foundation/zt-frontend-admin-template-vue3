import { createRouter, createWebHashHistory } from "vue-router";

const hash = createWebHashHistory();
const Routers = createRouter({
    history: hash,
    routes: [
      // 错误页面重定向到404页面
      // { path: "*", redirect: "/404" },
      // {
      //   path: "/404",
      //   component: resolve => require(['src/views/help/404/404.vue'], resolve),
      // },
      // 重定向
      { path: '/', redirect: '/index'},
      {
          path: '/index',
          component: ()=> import("pages/index.vue")
      },
      {
        path: '/client-manage',
        component: ()=> import("pages/client-manage/client-manage.vue")
      },
      // {
      //   path: '/',
      //   component: resolve => require(['src/views/common/xheader/xheader.vue'], resolve),
      //   children: [
      //     //菜单
      //     {
      //         path: '/user-manage/505',
      //         component: resolve => require(['views/user-manage/505/505.vue'], resolve)
      //     },
      //     {
      //         path: '/user-manage/510',
      //         component: resolve => require(['views/user-manage/510/510.vue'], resolve)
      //     },
  
      //     //======员工管理开始=======
      //     //名单
      //     {
      //         path: '/user/520',
      //         component: resolve => require(['views/user/520/520.vue'], resolve)
      //     },
      //     {
      //         path: '/user/530',
      //         component: resolve => require(['views/user/530/530.vue'], resolve)
      //     },
      //   ]
      // },
    ]
})



//路由守卫方法
// Routers.beforeEach((to, from, next) => {
//   if (to.path == '/404') {
//     next()
//     return
//   }

//   //保存当前路径地址
//   Vue.prototype.ModelData.xNewPath = to.path;

//   for (let i = 0; i < Vue.prototype.ModelData.xLeftTitle.length; i++) {
//     Vue.prototype.ModelData.xLeftTitle[i].isActive = false;
//     for (let j = 0; j < Vue.prototype.ModelData.xLeftTitle[i].children.length; j++) {
//       if (Vue.prototype.ModelData.xLeftTitle[i].children[j].url == to.path) {
//         Vue.prototype.ModelData.xLeftTitle[i].isShow = true;
//         Vue.prototype.ModelData.xLeftTitle[i].isActive = true;
//         Vue.prototype.ModelData.xLeftTitle[i].children[j].isActive = true;
//       } else {
//         Vue.prototype.ModelData.xLeftTitle[i].children[j].isActive = false;
//       }
//     }
//   }
//   next();
// })

export default Routers
