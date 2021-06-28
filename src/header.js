import React from 'react';
import img1 from './3logo.jpg'
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
// import {useDispatch} from 'react-redux'
import {Deleteall} from './mystore'

export default function Navbar() {
  let dispatch=useDispatch();
  
  return (
    <nav class="navbar-fixed-top navc">
      
      <div className='container'>
        <div class="nav-wrapper">
         <div className="logo"><Link to="/"> <i class="medium material-icons">phone</i></Link>
        </div>
          <ul id="nav-mobile" class="right hide-on-small-and-down">
          <li><Link to="/ADD-NEWCONTACT">ADD NEW</Link></li>
            <li><button class="clear" onClick={()=>dispatch(Deleteall())} > CLEAR ALL</button></li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}



