import React from 'react';
import { Modal } from 'fish';

// 菜单配置
export default [
  {
    name: '后台管理',
    icon: 'setting',
    sub: [
      {
        name: '用户管理',
        icon: 'team',
        url: 'main.account'
      },
      {
        name: '文章管理',
        icon: 'book',
        url: 'main.article'
      }
    ]
  },
  {
    name: '基础使用',
    icon: 'code',
    sub: [
      {
        name: '多级路由',
        icon: 'share-alt',
        url: 'main.router'
      },
      {
        name: '各式菜单',
        icon: 'appstore',
        sub: [
          {
            name: '多级菜单',
            icon: 'bars',
            sub: [
              {
                name: '四级菜单 - 1',
                icon: 'smile',
                url: 'main.innerMenu1'
              },
              {
                name: '四级菜单 - 2',
                icon: 'frown',
                url: 'main.innerMenu2'
              }
            ]
          },
          {
            name: '事件菜单',
            icon: 'scan',
            action(e) {
              Modal.success({
                title: '事件菜单',
                content: <div>响应菜单点击事件</div>
              });
            }
          },
          {
            name: '外链菜单',
            icon: 'link',
            url: 'https://www.baidu.com'
          }
        ]
      }
    ]
  }
];
