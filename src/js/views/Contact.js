import React from "react";
import { Navbar } from "../component/navbar.js";
import { useAppContext } from "../store/context.js";


const Contact =()=>{
    const {store , actions} = useAppContext();
    const {
        listContacts,
        
        } =store;

        const {
          handleDeleteContact,
            
            } =actions;
    
return(
    <div>
<Navbar/>
{listContacts.length == 0 ? (
                <p className="fs-4"> You haven't got contacts </p>
            ) : (
    listContacts.map((item, index)=>{
return(
<div key={index.id} className="contactStyle row">
<img className="fotoContact  col-3" src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
<div className="col-5 mt-3">
<p>{item.full_name}</p>
<p>{item.email}</p>
<p>{item.address}</p>
<p>{item.phone}</p>
</div>
<span className="me-3 col-3"  onClick={()=> handleDeleteContact(item.full_name)}><i className="fa-solid fa-xmark"></i></span>
</div>
)}))} 




</div>
)
}


export default Contact;