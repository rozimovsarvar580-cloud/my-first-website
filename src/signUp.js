import { useState } from "react"
import './signUp.css'
import SingIn from "./LogIn"; 
import {  Routes, Route, Link  } from 'react-router-dom';
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
         const users = JSON.parse(localStorage.getItem('users')) || []
         const userExists = users.some(user => user.email === email)
          if(userExists){
            alert('You Already have account Please go to Login')
          }else{
            users.push({email, password})
         localStorage.setItem('users' ,JSON.stringify(users))
         alert('sing up succesful!')
         setEmail('')
         setPassword('')
         console.log(users)
          }

         
         
      }
      
      return(
          <div className='form2'> 
           <h1>Already have account  <Link to='/SignIn' className='link'>Log-In</Link> </h1>
            <Routes>
                <Route path='/SignIn' element={<SingIn />}></Route>
            </Routes>
              <form action="#" onSubmit={submit}>
              <input type="email" placeholder="Email"  required id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
              <input type="password" placeholder="Password" required id='password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
              <input type="submit" value="Sign-UP" id= 'submit' />  
              
          </form> 
          </div>
        
      )
}
export default SingUp 