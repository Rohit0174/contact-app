import './App.css';
import React from 'react';
import Header from './header';
import AddContact from './addContact';
import ContactList from './contactList';
function App() {
  const contacts=[
    {
      id:'1',
      name:'Rohit',
      email:'rohit@gmail.com'
    },
    {
      id:'2',
      name:'Ajay',
      email:'Ajay@gmail.com'
    }
  ]
  return (
    <div className='ui container'>
   <Header/>
   <AddContact/>
   <ContactList contacts = {contacts}/>
  </div>
  );
}

export default App;
