import React from 'react';
import { Card } from 'fish';

export default props => {
  return (
    <Card bordered={false} title="登鹳雀楼" className="card">
      <p>白日依山尽，</p>
      <p>黄河入海流。</p>
      <p>欲穷千里目，</p>
      <p>更上一层楼。</p>
    </Card>
  );
};
