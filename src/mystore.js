import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';





let initial={
    contacts: [
        { 
           id: 1,
           name: "Leanne Graham",
           username: "Bret",
           email: "Sincere@april.biz",
           address: {
             street: "Kulas Light",
             suite: "Apt. 556",
             city: "Gwenborough",
             zipcode: "92998-3874",
             geo: {
               lat: "-37.3159",
               lng: "81.1496",
             },
           },
           phone: "1-770-736-8031 x56442",
           compny: "hildegard.org",
           co: {
             name: "Romaguera-Crona",
             catchPhrase: "Multi-layered client-server neural-net",
             bs: "harness real-time e-markets",
           },
         },
         {
           id: 2,
           name: "Ervin Howell",
           username: "Antonette",
           email: "Shanna@melissa.tv",
           address: {
             street: "Victor Plains",
             suite: "Suite 879",
             city: "Wisokyburgh",
             zipcode: "90566-7771",
             geo: {
               lat: "-43.9509",
               lng: "-34.4618",
             },
           },
           phone: "010-692-6593 x09125",
           compny: "anastasia.net",
          site : {
             name: "Deckow-Crist",
             catchPhrase: "Proactive didactic contingency",
             bs: "synergize scalable supply-chains",
           },
         },
         {
           id: 3,
           name: "Clementine Bauch",
           username: "Samantha",
           email: "Nathan@yesenia.net",
           compny: "ramiro.info",
           address: {
             street: "Douglas Extension",
             suite: "Suite 847",
             city: "McKenziehaven",
             zipcode: "59590-4157",
             geo: {
               lat: "-68.6102",
               lng: "-47.0653",
             },
           },
           phone: "1-463-123-4447",
           com: {
             name: "Romaguera-Jacobson",
             catchPhrase: "Face to face bifurcated interface",
             bs: "e-enable strategic applications",
           },
         },
        
       
       ],

       selectedcontacts:[]
}


export let Addcontact=(data)=>({
  
   type:"NEW-CONTACT",
   payload :data,
})


export let Edittcontact=(data)=>({
  type:"EDIT-CONTACT",
  payload :data,
});

export let Deleteall=()=>({
  type:"DELETE-ALL"
})

export let Deletecontact=(data)=>({
  type:"DELETE-CONTACT",
  payload:data,
});



function ContactReducer(state=initial ,action){
    switch(action.type){
    case "NEW-CONTACT" :{
       return{
         ...state,
         contacts:[action.payload,...state.contacts]
            }};

    case "DELETE-CONTACT":{
      return{
        ...state,
        contacts:state.contacts.filter(data=>data.id !=action.payload)

      }
    }

case "DELETE-ALL":{
  return{
    ...state,
    contacts:[],

  }
}
case "EDIT-CONTACT":{
  return {
    ...state,
    contacts: state.contacts.map((contact) =>(
        contact.id == action.payload.id ? action.payload : contact
    ) )
  };
}


        default :
        return state;

}
}



let store=createStore(ContactReducer,composeWithDevTools());
export default store;