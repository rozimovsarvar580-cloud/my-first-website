import { BrowserRouter, Routes, Route, Link , NavLink } from 'react-router-dom';
import './App.css';
import About from './about';
import Plans from './Plans';
import SignUp from './signUp';
import SingIn from './LogIn';
import { Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import moon from './image/moon.jpg';
import sun from './image/sun.jpg';
import './LogIn.css'
function App() {

  return (
    <div className="App">
      <div className="about">
        <h1>Welcome visitor to our website. If you want use our tool we suggest you <Link to='/SignUp' className='link'>Sign-Up</Link> <br /> 
        and if you more information about our website go to about section
      </h1>
         
      </div>
    
    </div>
  );
}
function Home() {
  const [theme, setTheme] = useState(() =>{
   return localStorage.getItem('theme') || 'dark'
  })
   const [Navbar, setNavbar] = useState(() =>{
    return localStorage.getItem('Navbar') || 'Navbar'
   })
   const [image, setImage] = useState(() =>{
    return localStorage.getItem('theme') === 'light' ? sun: moon
   })
   useEffect(() =>{
    document.body.className = theme 
    localStorage.setItem('Navbar', Navbar)
    localStorage.setItem('theme', theme)
   })
   const changeNavbar = () =>{
    if(theme === 'dark'){
      setTheme('light')
      setNavbar('NavbarLight')
      setImage(sun)
    }else{
     setTheme('dark')
      setNavbar('Navbar')
      setImage(moon)
    }
   }
  let i = 1
  let sum= 0
  do{
    sum=sum+i
    i++
  
  }while(i<=10)
    console.log(sum)
  return (
   
   <BrowserRouter>
   <Fragment>
    <div className={Navbar} >
     <NavLink to="/"   className={({isActive}) => isActive ? 'active' : 'a'}>Home</  NavLink>
     <NavLink to="/about"  className={({isActive}) => isActive ? 'active' : 'a'}>About</ NavLink> 
     <NavLink to='/Plans'  className={({isActive}) => isActive ? 'active' : 'a'}>Plans</NavLink> 
     <NavLink to='/SignIn' className={({isActive}) => isActive ? 'active' : 'a'}>Log-In</NavLink> 
     <NavLink to='/SignUp' className={({isActive}) => isActive ? 'active' : 'a'} >Sign-Up</NavLink>
     <img src={image} alt="" className='img' onClick={changeNavbar} />
     </div>
   </Fragment>
   <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/Plans' element={<Plans />}></Route>
    <Route path='/SignIn' element={<SingIn />}></Route>
    <Route path='/SignUp/*' element={<SignUp />}></Route>
   </Routes>
   </BrowserRouter> 
   
  )
  
}

export default Home;
