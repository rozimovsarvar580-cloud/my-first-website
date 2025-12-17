import { useState, useEffect } from 'react';
import './Utilities.css'
import bin  from'./image/bin.jpg'
import pencil  from'./image/pencil.jpg'
 function Utilities() {
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

const del = (indexToDelete) =>{
setTodos(todos.filter((_, index)=> index !== indexToDelete))
}

const handleKey = (e) =>{
  console.log(e.key) 
if(e.key === 'Enter'){
  AddTodo()
}

}

 const a = (e) =>{
         
}

  return (
    <div className='tools'>
      <div className='Unhidden hidden'>
      </div>
      <div className='todo '> 
      <ul>
        {todos.map((todo,index ) =>(
          <li key={index} className='li' >
            <div className='div'>{todo}</div>
             <img src={bin} alt="" onClick={() => del(index)}/>
             <img src={pencil} alt="" />
             </li>
        ))}

      </ul>
      <input 
      type="text"
       placeholder='type what you want do'
        id='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKey}
        /><br />
     <button onClick={AddTodo}>Add</button>
     </div>
    </div>
  );
  
}
export default Utilities