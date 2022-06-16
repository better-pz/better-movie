export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/index' },
      { component: '@/pages/404' }, // 不存在的路径直接跳转404页面
    ],
  },
]
