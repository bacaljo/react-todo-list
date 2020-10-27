import './App.css';
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoItem text={'Todo Item 1'} />
      </header>
    </div>
  );
}

export default App;
