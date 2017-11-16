import React from 'react';
import { router, NavLink, urlFor, smart } from 'cat-eye';
import style from './style';
import Routers from 'routers';
import { Card, Row, Col } from 'fish';
import classnames from 'classnames'

const Index = props => {
  return (
    <div className="main">
      <Row gutter={8}>
        <Col span={4}>
          <Card title="二级路由导航" className={style.card}>
            <ul className={style.nav}>
              <li>
                <NavLink
                  to={urlFor('main.router.page1')}
                  className={style.item}
                  isActive={props.defaultActive}
                  activeClassName={style.highlight}
                >
                  二级路由 - 1
                </NavLink>
              </li>
              <li>
                <NavLink to={urlFor('main.router.page2')} className={style.item} activeClassName={style.highlight}>
                  二级路由 - 2
                </NavLink>
              </li>
              <li>
                <NavLink to="/examples/router/page_not_found" activeClassName={style.highlight}>
                  二级路由下404
                </NavLink>
              </li>
              <li>
                <NavLink to="/page_not_found" activeClassName={style.highlight}>
                  全局404
                </NavLink>
              </li>
            </ul>
          </Card>
        </Col>
        <Col span={20}>
          <Card className={classnames(style.content, style.card)}>
            <Routers path="main.router" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default smart(null, props => {
  return {
    defaultActive(match) {
      return (match && match.isExact) || props.match.isExact;
    }
  };
})(Index);
