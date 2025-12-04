import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import './App.css';
import About from './about';
import Plans from './Plans';
import SignUp from './signUp';
import SingIn from './signIn';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import moon from'./image/moon.jpg'
import sun from'./image//sun.jpg'
function App() {
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
}
function Home() {
const [Navbar, setNavbar] = useState('Navbar')

const change = (e) =>{
  setNavbar('Navbarbl')
  console.log(e.target)
}

  return (
   <BrowserRouter>
   <Fragment>
    <div className= {Navbar}><Link to="/">Home</Link> <Link to="/about">About</Link> <Link to='/Plans'>Plans</Link> <Link to='/SignIn'>SignIn</Link> <Link to='/SignUp'>SignUp</Link> <img src={moon} alt="" onClick={change} /></div>
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
