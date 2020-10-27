import './App.css';
import TodoGroup from './components/TodoGroup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoGroup todoList={[{id: 1234, text: 'This is my first task'}]} />
      </header>
    </div>
  );
}

export default App;
