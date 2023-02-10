import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { complete, delete_todo, edit_todo, post_todo } from './Action/TodoActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos);
  const [newTodo, setNewTodo] = useState("");
  const [data, setData] = useState("");
  const [click, setClick] = useState(false);
  const [todoId, setTodoId] = useState("");
  return (
    <div className="App">
    <input className='add-input' type="text" placeholder='enter todo' onChange={(e)=>setNewTodo(e.target.value)}></input>
    <button className='add-btn' onClick={()=>dispatch(post_todo(newTodo))}>Add todo</button>
    <div className='completed'>
          <button className='btn-complete' onClick={()=>dispatch(complete(true))}>Completed</button>
          <button className='btn-not-complete' onClick={()=>dispatch(complete(false))}>Not completed</button>
      </div>
      {todos.map((el)=>(
        <div className='todo-list' key={el.id}>
          {click===true && el.id == todoId ? (<div>
            <input className='edit-input' type="text" onChange={(e)=>setData(e.target.value)}></input>
            <button className='edit-btn' onClick={()=>dispatch(edit_todo(el.id,data),setClick(false))}>save</button>
            </div>
            ):
              <h1>{el.text}</h1> }
          
          <button className='btn-delete' onClick={()=>dispatch(delete_todo(el.id))}>delete</button>
          <button className='btn-edit' onClick={(()=>dispatch(setClick(true),setTodoId(el.id)))}>edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
