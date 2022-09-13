import React from 'react';
import Second from './Second';

function First() {
  return (
    <div>
      <div>first level which below contains second level</div>
      <Second />
    </div>
  );
}

export default First;
