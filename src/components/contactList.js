import React from "react";
import ContactCard from "./contactCard";
const ContactList = (props) =>{
    console.log("hello",props);
    const renderContactList = props.Contacts.map((contact)=>{
        return <ContactCard Contact = {contact}/>
    });
    return  <div className="ui called list"> {renderContactList}</div>
};
export default ContactList;