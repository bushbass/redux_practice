import React from 'react';
import { useSelector } from 'react-redux';

function Second() {
  const name = useSelector((state) => state.name.value);
  const blahblah = useSelector((state) => state.counter.value);
  return (
    <div>
      <div>second level</div>
      <div>{name}</div>
      <div>{blahblah}</div>
    </div>
  );
}

export default Second;
