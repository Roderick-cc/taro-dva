export default {
  pages: [
    'pages/index/index',
    'pages/page/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    // custom: true,
    color: '#ACACAC',
    selectedColor: '#3E72C9',
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "./images/tabbar-2-nosel.png",
        "selectedIconPath": "./images/tabbar-1-sel.png",
      },
      {
        "pagePath": "pages/page/index",
        "text": "雷达",
        "iconPath": "./images/tabbar-2-nosel.png",
        "selectedIconPath": "./images/tabbar-1-sel.png",
      },
    ]
  },
}
