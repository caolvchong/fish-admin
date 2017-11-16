import React, { Component } from 'react';
import { Card } from 'fish';
import './model';
import style from './style';
import Search from './Search';
import List from './List';

export default props => {
  return (
    <div className="main">
      <div className="clearfix">
        <Search />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};
