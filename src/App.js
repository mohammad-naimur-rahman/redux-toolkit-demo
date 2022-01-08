import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/couter';
import { addTodo, deleteTodo } from './redux/todo';
import {v4 as uuid} from 'uuid';

function App() {

  const { count } = useSelector(state => state.counter);
  const { todo } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  const addToDo = e => {
    e.preventDefault();
    setTodoText('');
    if(todoText.trim().length <= 0) return
    dispatch(addTodo({
      id: uuid(),
      text: todoText,
    }));
  }

  return (
    <div className="App">
      <h1>Redux Toolkit Demo</h1>
      <hr />
      <hr />
      <h2>Coutner Example</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <hr />
      <h2>Todo Example</h2>
        {
          todo.map(item => <p key={item.id} onClick={() => dispatch(deleteTodo(item.id))}>{item.text} [Click to delete]</p>)
        }
      <form onSubmit={addToDo}>
        <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} placeholder='New todo text' />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;


//onClick={dispatch(deleteTodo(item.id))}