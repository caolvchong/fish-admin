import React from 'react';
import { Card } from 'fish';

export default props => {
  return (
    <Card bordered={false} title="静夜思" className="card">
      <p>床前明月光，</p>
      <p>疑是地上霜。</p>
      <p>举头望明月，</p>
      <p>低头思故乡。</p>
    </Card>
  );
};
