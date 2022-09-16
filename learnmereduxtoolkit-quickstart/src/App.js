import './App.css';
import { Counter } from './features/counter/Counter';
import Name from './features/name/Name';
import First from './components/First';
import MessageList from './features/messageList/MessageList';
import Todo from './features/todo/Todo';
import Recipe from './features/recipe/Recipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Recipe />
        <Todo />

        {/* <Counter />
        <Name />
        <First />
        <MessageList /> */}
      </header>
    </div>
  );
}

export default App;
