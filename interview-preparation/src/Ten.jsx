import React from 'react' ; 
import Contact from './forRouter/Contact';
import Home from './forRouter/Home';
import About from './forRouter/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom' ; 

function Ten() {
  return (
    <div>
        <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Ten