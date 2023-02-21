import { demoBlockPlugin } from 'vitepress-theme-demoblock';

const sidebar = {
  '/': [
    {
      test: '首页',
      link: '/',
    },
    {
      text: '通用',
      children: [
        {
          text: 'Button按钮',
          link: '/components/button/',
        },
      ],
    },
  ],
};

const config = {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
};

export default config;
