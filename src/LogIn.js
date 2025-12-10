import './LogIn.css'
import { useState } from 'react'

function SingIn(){
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
        <div className='form1'> 
            
            <form action="#" onSubmit={submit}>
            <input type="email" placeholder="Email"  id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
            <input type="password" placeholder="Password"  id='password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br />
            <input type="submit" value="Log-In" id= 'submit'  />  
            
        </form> 
        </div>
      
    )
   
}
export default SingIn