import React from 'react'
import Home from '../src/Component/Home';
import Destination from './Component/Destination';
import Crew from './Component/Crew';
import Technology from './Component/Technology';
import Nav from '../src/Component/Nav';
import './style.css'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>

    <Router>
   <div className='container'>
  <Nav/>
    <Routes>
      
    <Route path='/' element={<Home/>}/>
    <Route path='/Destination' element={<Destination/>}/>
    <Route path='/Crew' element={<Crew/>}/>
    <Route path='/Technology' element={<Technology/>}/>
    </Routes>
   </div>
    </Router>
    
    </>
  )
}

export default App