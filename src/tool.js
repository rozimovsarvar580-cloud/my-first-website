import { useState, useEffect } from 'react';
import './todo.css'
import bin  from'./image/bin.jpg'
 function Plans() {
  const [todos, setTodos] = useState(() =>{
   
    const saved = localStorage.getItem('todos') 
    return saved ? JSON.parse(saved): []
  }) 
  

  const [input, setInput] = useState('')
  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
 const AddTodo = () =>{
  if(input.trim() === '') return
  setTodos([...todos, input])
  setInput('')
 }


  return (
    <div>
      <div className='todo'> 
      <ul>
        {todos.map((todo, index) =>(
          <li key={index} className='li'><div className='div'>{todo}</div> <img src={bin} alt=""/></li>
        ))}
      </ul>
      <input 
      type="text"
       placeholder='type what you want do'
        id='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        /><br />
     <button onClick={AddTodo}>Add</button>
     </div>
    </div>
  );
  
}
export default Plans