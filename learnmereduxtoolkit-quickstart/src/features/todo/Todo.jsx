import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

export default function Todo() {
  const [input, setInput] = useState('enter new todo');

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>To do list</h2>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input));
          setInput('');
        }}
      >
        Add todo
      </button>
      <ul>
        {todos.value.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
