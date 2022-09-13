import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from './nameSlice';

function Name() {
  const [formName, setformName] = useState('enter name');

  const dispatch = useDispatch();
  const nameFromStore = useSelector((state) => state.name.value);

  return (
    <div>
      <div>Name</div>
      <div>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          placeholder={formName}
          onChange={(e) => setformName(e.target.value)}
        />
        <button onClick={() => dispatch(changeName(formName))}>
          change name
        </button>
        <p>{nameFromStore}</p>
      </div>
    </div>
  );
}

export default Name;
