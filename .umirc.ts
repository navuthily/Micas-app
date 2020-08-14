import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {component: '@/routes/index' },
    // {
    //   path: '/login', component: '@/pages/Login/index',
    // }, 
    // { path: '/register', component: '@/pages/Register/index' }
  ],
});
