/**
 * 系统全局常量
 */

// 用户角色
export const ROLE = {
  ADMIN: 1,
  USER: 2
};

// 用户登录状态
export const USER_STATUS = {
  WAIT: 0, // 自动登录等待状态
  LOGINED: 1, // 已经登录
  NOT_LOGIN: 2, // 未登录
  RE_LOGIN: 3 // 需要重新登录，用于退出登录后刷新到登录页
};

// 版权信息
export const COPYRIGHT = 'Copyright © 2017 网龙共享平台技术部出品';

// 左侧菜单模式，是否采用紧凑模式
export const MENU_KNIT = false;

// 异常的一些常量
export const EXCEPTION = {
  403: {
    img: require('styles/images/403.png'),
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  404: {
    img: require('styles/images/404.png'),
    title: '404',
    desc: '抱歉，你访问的页面不存在'
  }
}