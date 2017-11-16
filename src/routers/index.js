import React from 'react';
import { router, Route } from 'cat-eye';
import './routers';
import NotFound from 'components/common/Exception/404';

// 路由 permission 使用的 props
// 一般 permission 在 routers.js 中指定，使用的验证函数由 validate.js 中的 checkXX 提供
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const Routers = props => {
  let nf = props.notFound ? props.notFound : NotFound;
  return (
    <router.Routes path={props.path} mapStateToProps={mapStateToProps}>
      <Route component={nf} />
    </router.Routes>
  );
};

export default Routers;

if (DEBUG) {
  if (console && console.table) {
    console.table(router.getFlat());
  }
}
