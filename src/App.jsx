import React, { Component } from 'react';
import style from 'styles/app';
import Routers from './routers';
import { smart, actions, withRouter } from 'cat-eye';
import { Spin } from 'fish';
import { USER_STATUS } from 'config/constant';
import Layout from 'components/layout';

class App extends Component {
  componentDidMount() {
    actions.user.startup();
  }
  render() {
    let content;
    const { status } = this.props;
    if (status === USER_STATUS.WAIT) {
      content = (
        <div>
          <div className="waiting">
            <Spin />
            <div>拼命加载中...</div>
          </div>
        </div>
      );
    } else if (status === USER_STATUS.LOGINED) {
      content = (
        <div className="root">
          <Layout>
            <div className={style.body}>
              <Routers />
            </div>
          </Layout>
        </div>
      );
    } else {
      content = (
        <div className="root">
          <Routers />
        </div>
      );
    }
    return content;
  }
}

export default withRouter(
  smart(state => {
    return {
      status: state.user.status
    };
  })(App)
);
