import {useSelector,useDispatch} from  "react-redux";
import {Deletecontact} from './mystore';
import {Link} from 'react-router-dom';


export default function Contactlist(){
  let mycontact=useSelector(state => state.contacts)
  let dispatch=useDispatch();
  return(<div>
     <p className="hd">CONTACT LIST</p>
      <table className="responsive-table  table">
        <thead>
          <tr >
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Company</th>

          </tr>
        </thead>
        <tbody>
          {mycontact.map((c)=>(
          <tr>
            <td>{c.name}</td>
            <td>{c.phone}</td>
            <td>{c.email}</td>
            <td>{c.compny }</td>
            <td class="edi"><i class="small material-icons del" onClick={()=>(dispatch(Deletecontact(c.id)))} >delete</i>
            <Link to={`"/EDIT-CONTACT/${c.id}`}><i class="small material-icons edb ">edit</i></Link></td>
            </tr>
            ))}
        </tbody>
      </table>

 </div>

 )    
}