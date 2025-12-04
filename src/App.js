import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import './App.css';
import About from './about';
import Plans from './Plans';
import SignUp from './signUp';
import SingIn from './signIn';
function App() {

  return (
    <div className="App">
      <h1>Home</h1>;
    </div>
  );
}
function Home() {
  
  return (
   <BrowserRouter>
   <nav>
    <Link to="/">Home</Link> <Link to="/about">About</Link>  <Link to='/Plans'>Plans</Link> <Link to='/SignIn'>SignIn</Link> <Link to='/SignUp'>SignUp</Link>
   </nav>
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
