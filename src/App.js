import './App.css';
import TodoList from './components/TodoList';
import Card from './UI/Card';

function App() {
  return (
    <Card>
      <h1>What is your task?</h1>
      <TodoList />
    </Card>
  );
}

export default App;
