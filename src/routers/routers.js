import React from 'react';
import { router } from 'cat-eye';
import { LOGIN_PATH, checkAdmin, checkLogin } from './validate';

import Login from 'components/login';
import Main from 'components/Main';

import Home from 'components/home';
import Account from 'components/manage/account'
import Article from 'components/manage/article'

import ExampleRouter from 'components/example/router';
import ExampleRouterPage1 from 'components/example/router/page1';
import ExampleRouterPage2 from 'components/example/router/page2';
import ExampleMenuPage1 from 'components/example/menu/page1';
import ExampleMenuPage2 from 'components/example/menu/page2';
/**
 * 路由注册
 * path: 必须 {string}，路径
 * component: 必须 {Component}，路由对应的渲染组件
 * exact: 可选 {boolean}，是否完全匹配
 * permission: 可选 {function}，权限验证函数，无表示不需要权限验证
 * sub: {array} 子路由
 */
router.register({
  // 登录
  login: {
    path: LOGIN_PATH,
    component: Login,
    description: '登录页'
  },
  // 主模块：管理后台
  main: {
    path: '/',
    component: Main, // Main 组件用来承载子路由
    exact: true,
    permission: checkLogin,
    sub: {
      home: {
        path: '/',
        component: Home,
        exact: true,
        description: '首页'
      },
      account: {
        path: '/accounts',
        component: Account,
        exact: true,
        permission: checkAdmin,
        description: '用户管理'
      },
      article: {
        path: '/articles',
        component: Article,
        exact: true,
        permission: checkAdmin,
        description: '文章管理'
      },
      router: {
        path: '/examples/router',
        component: ExampleRouter,
        exact: true,
        description: '多级路由示例',
        sub: {
          page1: {
            path: '/',
            exact: true,
            component: ExampleRouterPage1,
            description: '2级路由 - 1'
          },
          page2: {
            path: '/page2',
            component: ExampleRouterPage2,
            description: '2级路由 - 2'
          }
        }
      },
      innerMenu1: {
        path: '/examples/inner_menu_1',
        component: ExampleMenuPage1,
        description: '3级菜单 - 1'
      },
      innerMenu2: {
        path: '/examples/inner_menu_2',
        component: ExampleMenuPage2,
        description: '3级菜单 - 2'
      }
    }
  }
});
