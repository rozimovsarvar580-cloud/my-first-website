import { useState, } from 'react';
import './todo.css'
 function Plans() {
  const [todos, setTodos] = useState([])
 const AddTodo = () =>{
  setTodos([...todos, `Todo ${todos.length + 1}`])
 }
 const value = () =>{
  
 }
  return (
    <div>
      <div className='todo'> 
        
      <ul>
        {todos.map((todo, index) =>(
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input type="text" placeholder='type what you want do' id='input'/><br />
     <button onClick={AddTodo}>Add</button>
     </div>
    </div>
  );
}
export default Plans