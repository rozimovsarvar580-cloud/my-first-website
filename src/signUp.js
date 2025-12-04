import { useState } from "react"
import './signUp.css'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
function SingUp(){
    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
  
      const submit = (event) =>{
      event.preventDefault()
      setError('')
      if(!email || !password){
          setError('Please fill both fields')
          return
      }
      localStorage.setItem('Email', email)
      localStorage.setItem('Password', password)
      }
      
      return(
          <div className='form2'> 
           <h1>Already have account <Link></Link></h1>
              <form action="#" onSubmit={submit}>
              <input type="email" placeholder="Email"  required id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
              <input type="password" placeholder="Password" required id='password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
              <input type="submit" value="Sign-UP" id= 'submit' />  
              
          </form> 
          </div>
        
      )
}
export default SingUp 