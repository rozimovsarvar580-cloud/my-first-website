import { BrowserRouter, Routes, Route, Link ,NavLink } from 'react-router-dom';
import './App.css';
import About from './about';
import Utilities from './Utilities';
import SignUp from './signUp';
import SingIn from './LogIn';
import { Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import moon from './image/moon.png';
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
  return (
  
   <BrowserRouter>
   <Fragment>
  
    <div className={Navbar}>
      <div className="navbar">
        <a href="/" className='tool'>Utilify</a>
         
     <NavLink to="/"  className={({isActive}) =>( isActive ? 'active' : 'a')}  >Home  </NavLink>
     <NavLink to="/about"  className={({isActive}) =>( isActive ? 'active' : 'a')} >About</NavLink> 
     <NavLink to='/Utilities'  className={({isActive}) =>( isActive ? 'active' : 'a')} >Utilities</NavLink> 
     <NavLink to='/SignIn' className={({isActive}) =>( isActive ? 'active' : 'a')} >Log-In</NavLink> 
     <NavLink to='/SignUp' className={({isActive}) =>( isActive ? 'active' : 'a')} >Sign-Up</NavLink>
      </div>
     
     <button className='theme-btn' onClick={changeNavbar}> <img src={image} alt="" /></button>
    
     </div>
   </Fragment>
   <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/Utilities' element={<Utilities />}></Route>
    <Route path='/SignIn' element={<SingIn />}></Route>
    <Route path='/SignUp/*' element={<SignUp />}></Route>
   </Routes>
   </BrowserRouter> 
   
  )
   
}

export default Home;
