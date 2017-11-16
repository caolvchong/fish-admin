import React, { Component } from 'react';
import style from './style';
import logo from 'styles/images/logo.png';

export default props => {
  return (
    <div className={style.logo}>
      <img src={logo} alt="中国网龙" />
      <h1>ND Admin</h1>
    </div>
  );
};
