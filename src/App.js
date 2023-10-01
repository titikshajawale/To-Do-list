import react from 'react';
import TodoList from './components/TodoList';
import'./App.css';
function App(){
  return(
    <div classname='todo-app'>
      <TodoList/>
    </div>
  );
}
export default App;