import React from 'react';
import { smart, Redirect } from 'cat-eye';
import Forbidden from 'components/common/Exception/403';
import { ROLE } from 'config/constant';

export const LOGIN_PATH = '/login';

// 默认验证不通过的跳转页面
const defaultRedirect = props => {
  return (
    <Redirect
      to={{
        pathname: LOGIN_PATH,
        // 跳转后的组件通过 props.location.state.from 可以拿到 referrer
        // 通常用来登录后调回原页面
        state: { from: props.location }
      }}
    />
  );
};

const login = (props, callback) => {
  const user = props.user;
  if (user.accessToken) {
    return true;
  }
  return callback(props);
};

/**
 * 权限验证函数
 * 返回 true：表示权限通过
 * 不通过需要返回一个 Component 来显示
 */
export const checkLogin = props => {
  return login(props, props => defaultRedirect(props));
};

export const checkAdmin = props => {
  const flag = checkLogin(props);
  if (flag !== true) {
    return flag;
  }

  const user = props.user.data;
  if (user.role === ROLE.ADMIN) {
    return true;
  }
  return <Forbidden />;
};
