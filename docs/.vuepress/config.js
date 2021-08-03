module.exports = {
  title: '村长',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  base: process.env.NODE_ENV === 'dev' ? '/' : '.', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    // nav:[ // 导航栏配置
    //   {text: '前端基础', link: '/accumulate/' },
    //   {text: '算法题库', link: '/algorithm/'},
    //   {text: '微博', link: 'https://baidu.com'}      
    // ],
    // sidebar: 'auto', // 侧边栏配置
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/page-b', 'Explicit link text']
    // ]
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: {
      '/myblog/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/myblog/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/myblog/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  },
  serviceWorker: true, // 是否开启 PWA
  // dest: './docs'
};