import React from 'react';
import { render, Router, request } from 'cat-eye';
import 'global/request'
import 'global/model/user'
import 'global/model/navigation'
import 'global/cat-eye'
import App from './App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
