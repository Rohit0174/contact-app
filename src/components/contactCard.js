import React from "react";

const ContactCard = (props) =>{
    const{id,email,name} = props.Contact;
    return (
        <div className="item">
                <div className="content">
                    <div className="Header">{name}</div>
                    <div className="Email">{email}</div>
                </div>
                <i className="trash alternate outline icon"
                 style={{color:"red",marginTop:"7px"}}></i>
            </div>
    );
}
export default ContactCard;