import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import './App.css';
import About from './about';
import Plans from './Plans';
import SignUp from './signUp';
import SingIn from './LogIn';
import { Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import moon from './image/rasm.jpg';
import sun from './image/sun.jpg';
function App() {

  return (
    <div className="App">
      <h1>Home</h1>;
    </div>
  );
}
function Home() {

   const [Navbar, setNavbar] = useState(() =>{
    return localStorage.getItem('Navbar') || 'Navbar'
   })
   const [image, setImage] = useState(() =>{
    return localStorage.getItem('image') === 'sun' ? sun: moon
   })
   useEffect(() =>{
    localStorage.setItem('Navbar', Navbar)
    localStorage.setItem('image', image === sun ? 'sun' : 'moon')
   })
   const changeNavbar = () =>{
    if(Navbar === 'Navbar'){
      setNavbar('NavbarLight')
      setImage(sun)
    }else{
      setNavbar('Navbar')
      setImage(moon)
    }
   }
  return (
   
   <BrowserRouter>
   <Fragment>
    <div className={Navbar}>
      <Link to="/">Home</Link>
     <Link to="/about">About</Link> 
     <Link to='/Plans'>Plans</Link> 
     <Link to='/SignIn'>Log-In</Link> 
     <Link to='/SignUp'>Sign-Up</Link>
     <img src={image} alt="" className='img' onClick={changeNavbar} />
     </div>
   </Fragment>
   <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/Plans' element={<Plans />}></Route>
    <Route path='/SignIn' element={<SingIn />}></Route>
    <Route path='/SignUp' element={<SignUp />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default Home;
