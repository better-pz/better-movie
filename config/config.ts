import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  antd: {},
  dva: {},
  alias: {
    '@': require('path').resolve(__dirname, 'src'), // src下的文件可以使用 @/xxx
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {}, // 快速刷新
  hash: true, // 打包文件增加 hash 值，避免浏览器缓存
  metas: [
    {
      name: 'keywords',
      content: 'video',
    },
    {
      name: 'description',
      content: '资源丰富,高清好用的视频网站',
    },
  ],
});
