import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { Button } from 'react-bootstrap';
import {Addcontact} from './mystore';
import {useHistory} from 'react-router-dom';



export default function Addnewcontact(){
  
  var ID = function () {
      
    return '-' + Math.random().toString(36).substr(2, 9);
    
  };

    let [name, setName]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setPhone]=useState("");
    let [compny,setCompny]=useState("");
    


    let id=ID();
    let dispatch=useDispatch();
    let history=useHistory();
    function Add(e){
     e.preventDefault()
      
     let newdata={
       id:id,
       name:name,
       phone:phone,
       email:email,
       compny:compny
     };

     dispatch(Addcontact(newdata));
     history.push("/")


    }
    
    return(<div class="nct">
      <a href="#"> <h1>NEW CONTACT</h1></a>
       <form onSubmit={(e)=>Add(e)} class="col s12">

       <div class="row  ">
        <div class="input-field col s12">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" value={name} onChange={(e)=>setName(e.target.value)} type="text" />
          <label for="icon_prefix">Name</label>
        </div>
      </div>
    <div class="row">
        <div class="input-field col s3">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" class="validate"/>
          <label for="icon_telephone">Telephone</label>
        </div>
        </div>
          
  <div class="row">
    <div class="input-field col ss3">
    <i class="material-icons prefix">email</i>
          <input id="icon_email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="validate"/>
          <label for="icon_email">Email</label>
         </div>
      </div>
      <div class="row  ">
        <div class="input-field col s12">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_company" value={compny} onChange={(e)=>setCompny(e.target.value)} type="text" />
          <label for="icon_company">compny</label>
        </div>
        </div>
      <button class="subbtn"  >SUBMIT</button>

    </form>
  </div>)
}