import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import bar from '../images/Group (1).png'
import bar2 from '../images/closebar.png'

const Nav = () => {

    const[open,setOpen]=React.useState(false)

    function close (){
        setOpen(false)
    }
  return (
    <div>

<header>
    <nav className={`nav ${open?'show':""}`}>
<div className='logo'>
<img src={logo} alt="link" />
</div>
<ul>
    <li onClick={close} className='active'><Link to ='/'>00 Home</Link></li>
    <li onClick={close}><Link to ='/Destination'>01 Destination</Link></li>
    <li onClick={close}><Link to ='/Crew'>02 Crew</Link></li>
    <li onClick={close}><Link to ='/Technology'>03 Technology</Link></li>
</ul>

<div onClick={()=>setOpen(!open)} className='icon'>
    {
    open === false ?

         <img src={bar} alt="bar" />:
         <img src={bar2} alt="bar" />
    }
    
</div>
    </nav>
</header>
 </div>

  )
}

export default Nav