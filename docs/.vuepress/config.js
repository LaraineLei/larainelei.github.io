module.exports = {
    title: 'Laraine Docs',
    description: "Welcom to Lariane Docs",
 
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
    themeConfig:{
        nav: [
            { text: '本地化平台', link: '/localization/' },
            { text: '权限平台', link: '/authorization/' },
        { text: 'Git', link: 'https://github.com/' }      
        ],
        sidebar: [
            {
              title: '本地化平台',
              collapsable: false,
              children: [
                '/localization/issue',
              ]
            },
            {
              title: '权限平台',
              collapsable: false,
              children: [
                '/authorization/role',
                '/authorization/assignment'
              ]
            }
          ]
    }
}