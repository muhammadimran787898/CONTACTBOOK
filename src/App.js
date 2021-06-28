import Header from "./header"
import Contactlist from "./contactlist"; 
import {Provider}   from "react-redux";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import store from './mystore';
import Footer from './footer';
  import  Addnewcontact from './newcontact';
  import  Editcontact from './editcontact';

import './App.css';

function App() {
      return ( <div className="App">
    <Provider store={store}>
     <Router>
     <Header/>
     <Switch>
     <Route exact path="/"   component={Contactlist}/>
     <Route eaxt path="/ADD-NEWCONTACT" component={Addnewcontact}/>
     <Route eaxt path="/EDIT-CONTACT/:id" component={Editcontact}/>
     

     </Switch>
     </Router>
     <Footer/>
     </Provider>
     </div>  )}

export default App;
