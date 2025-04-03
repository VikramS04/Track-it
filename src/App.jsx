import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Login from './components/Login'
import SignUpPage from './components/SignUp';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <Router>
      
      <Header />
      <Hero />

    </Router>

    {/* <Header />
    <Hero /> */}


    </>
  )
}

export default App;
