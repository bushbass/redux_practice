import React from 'react';
import { useSelector } from 'react-redux';

function NameBlock() {
  const name = useSelector((state) => state.name.value);
  return (
    <div>
      <div>NameBlock</div>
      <div>{name}</div>
    </div>
  );
}

export default NameBlock;
