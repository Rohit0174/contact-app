import React from "react";

const ContactList = (props) =>{
    console.log("hello",props);
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div className="item">
                <div className="content">
                    <div className="Header">{contact.name}</div>
                    <div className="Email">{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"/>
            </div>
        );
    });
    return (
        <div className="ui called list">
            {renderContactList}
        </div>
    );
}
export default ContactList;