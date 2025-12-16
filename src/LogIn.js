import './LogIn.css'
import { useState } from 'react'
function SingIn(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submit = (event) =>{
    event.preventDefault()
    setError('')
    const users = JSON.parse(localStorage.getItem('users')) || []
    const userExists = users.some(user => user.email === email && user.password === password)
    if(userExists){
    alert('Login-In is successfull')
    }else{
       setError('Email or password must be incorrect')
    }
    }
    
    return(
        <div className='form1'> 
            
            <form action="#" onSubmit={submit}>
            <input type="email" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
            <input type="password" placeholder="Password"  id='password' value={password} onChange={(e) => setPassword(e.target.value)} /> {error && <p className='error'>{error}</p>}<br />
           
            <input type="submit" value="Log-In" id= 'submit'  />  
            
        </form>     
        </div>
      
    )
   
}
export default SingIn